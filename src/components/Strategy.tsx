import React,{useEffect} from 'react';
import flowchart1 from "../assets/Dailybread Flowchart (1).jpg";
import flowchart2 from "../assets/Dailybread Flowchart (2).jpg";



const Strategy: React.FC = () => {
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/")
          .then((res)=>res.json())
          .then((data)=>console.log(data))
      })
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ textAlign: 'center', backgroundColor: '#007bff', color: '#fff', padding: '0.8rem' }}>Our Strategy</h3>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div style={{ flex: 1, position: 'relative', marginRight: '5rem' }}>
          <img src={flowchart1} alt="" style={{ width: '115%', height: 'auto' }} />
        </div>
        <div style={{ flex: 1, position: 'relative', marginLeft: '5rem' }}>
          <img src={flowchart2} alt="" style={{ width: '79%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default Strategy;


