from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_restful import Api, Resource, reqparse
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
import secrets

app = Flask(__name__)
CORS(app)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ehurtqfu:uAQU-zL7j4Tm_rbqQmf2k96-2iHIF2Qu@mahmud.db.elephantsql.com/ehurtqfu'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

app.config['JWT_SECRET_KEY'] = secrets.token_hex(16)
jwt = JWTManager(app)


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    created_at = db.Column(db.DateTime)

    def __repr__(self):
        return f'<User {self.username}>'


class UserRegistration(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', help='This field cannot be blank', required=True)
        parser.add_argument('password', help='This field cannot be blank', required=True)
        data = parser.parse_args()

        username = data['username']
        password = data['password']

        if User.query.filter_by(username=username).first():
            return {'message': 'Username already exists'}, 400

        new_user = User(username=username, password_hash=password)
        db.session.add(new_user)
        db.session.commit()

        return {'message': 'User registration successful'}, 201


class Strategy(Resource):
    @jwt_required
    def get(self):
        user_id = get_jwt_identity()
        return {'user_id': user_id, 'strategy': 'Your trade strategy goes here'}, 200


class UserLogin(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', help='This field cannot be blank', required=True)
        parser.add_argument('password', help='This field cannot be blank', required=True)
        data = parser.parse_args()

        username = data['username']
        password = data['password']

        user = User.query.filter_by(username=username).first()

        if user and user.password_hash == password:
            access_token = create_access_token(identity=user.id)
            return {'access_token': access_token}, 200
        else:
            return {'message': 'Invalid credentials'}, 401


class EditUser(Resource):
    @jwt_required
    def put(self, user_id):
        user = User.query.get(user_id)

        if not user:
            return {'message': 'User not found'}, 404
        username = request.json.get('username')
        password = request.json.get('password')

        if username:
            user.username = username
        if password:
            user.password_hash = password

        db.session.commit()

        return {'message': 'User updated successfully'}, 200


class DeleteUser(Resource):
    @jwt_required
    def delete(self, user_id):
        user = User.query.get(user_id)

        if not user:
            return {'message': 'User not found'}, 404

        db.session.delete(user)
        db.session.commit()

        return {'message': 'User deleted successfully'}, 200


@app.route('/')
def index():
    return 'Welcome to the CynUSD/Fxtive Backend!'

@app.route('/register', methods=['POST'])
def register():
    user_registration = UserRegistration()
    return user_registration.post()

@app.route('/strategy', methods=['GET'])
@jwt_required
def strategy():
    trade_strategy = Strategy()
    return trade_strategy.get()

@app.route('/login', methods=['POST'])
def login():
    user_login = UserLogin()
    return user_login.post()



api.add_resource(UserRegistration, '/register')
api.add_resource(Strategy, '/strategy')
api.add_resource(UserLogin, '/login')
api.add_resource(EditUser, '/users/<int:user_id>')
api.add_resource(DeleteUser, '/users/<int:user_id>')


if __name__ == '__main__':
    app.run(debug=True)


