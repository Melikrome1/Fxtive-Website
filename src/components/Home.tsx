import React, {useEffect} from 'react';
import gifImage from "../assets/gif.gif";

const Home: React.FC = () => { 
  useEffect(()=>{
    fetch("http://127.0.0.1:5000/")
      .then((res)=>res.json())
      .then((data)=>console.log(data))
  })
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0rem' }}>
      <h2>Welcome To Fx'tive Solutions Academy!</h2> 
      </div>
  
      <div>
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
    <p style={{ marginRight: '0.5em' }}>Subscribe:</p>
    <button
      style={{
        marginRight: '0.5rem',
        padding: '0.5rem 0.5rem',
        borderRadius: '20px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
      }}
      onClick={() => window.open('https://t.me/DailyBreadQandA', '_blank', 'noopener noreferrer')}
    >
      Telegram
    </button>
    <button
      style={{
        marginRight: '0.5rem',
        marginLeft: '0rem',
        padding: '0.5rem 0.5rem',
        borderRadius: '20px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
      }}
      onClick={() => window.open('https://twitter.com/FxtiveHNW', '_blank', 'noopener noreferrer')}
    >
      Twitter
    </button>
    <button
      style={{
        padding: '0.5rem 0.5rem',
        marginRight: '2rem',
        borderRadius: '20px',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
      }}
      onClick={() => window.open('https://www.youtube.com/@FxtiveHNW', '_blank', 'noopener noreferrer')}
    >
      YouTube
    </button>
  </div>
</div>

      
      <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <img src={gifImage} alt="GIF Background" style={{ position: 'absolute', top: 7 ,left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        
  
        <div>
          <h4> Our Team</h4>

        </div>

      {/* Our mission footer */}

        <footer style={{ position: 'absolute', bottom: '0.5rem', left: '0', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '0.8rem', borderTop: '2px solid #000', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '70%' }}>
            <h4>Our Mission</h4>
            <p>
              At the Daily₿read Market Institute, we understand the importance of financial self-sufficiency.
              That's why we offer a unique approach to trading and investing that sets us apart from traditional trading academies.
              Our program teaches the necessary knowledge and skillset and provides the crucial mentorship component needed for individuals to succeed.
            </p>
            <p>
              With our program, you can reduce the learning curve and increase your chances of success in the trading and investing world.
              Our team of experts is the authority on this subject and has the experience and knowledge to guide you toward financial freedom.
              Don't settle for less. Join Our Daily₿read Market Institute today and take control of your financial future.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button style={{ padding: '1rem 2rem', fontSize: '1.2rem', borderRadius: '1rem', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>
              Let's Chat!
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;






