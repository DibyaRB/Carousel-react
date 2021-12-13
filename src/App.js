import './App.css';
import comic01 from './assets/comic01.jpg';
import comic02 from './assets/comic02.jpg';
import comic03 from './assets/comic03.jpg';
import {useState, useEffect} from 'react';

function App() {

  const [index, setIndex] = useState(0);

  const cards=[
    {id:"1", image: comic01},
    {id:"2", image: comic02},
    {id:"3", image: comic03}
  ];
  

  const mod = (n,m) =>{
    let result = n%m;
    return result >=0 ? result : result + m;
  }

  useEffect(()=>{
      setTimeout(()=>{
          setIndex((index+1)%cards.length)
      },3000);
  },[index]);
  
  return (
    <div className="App">
      <div className='carousel'>
      {/* <img className="card card--active" src={comic01} alt="comic01"/>
      <img className="card card--left" src={comic02} alt="comic02"/>
      <img className="card card--right" src={comic03} alt="comic03"/> */}
      {cards.map((item,i)=>{
          const indexLeft = mod(index-1, cards.length);
          const indexRight = mod(index+1,cards.length);

          let className= "";

          if(i === index){
            className="card card--active";
          }
          else if(i === indexRight){
            className= "card card--right";
          }
          else if(i=== indexLeft){
            className = "card card--left";
          }
          else{
            className = "card";
          }

          return(<img key={item.id} src={item.image} alt="Comic" className={className}/>)
      })}
      </div>
    </div>
  );
}

export default App;
