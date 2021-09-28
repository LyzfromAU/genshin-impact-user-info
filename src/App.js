import './App.css';
import React, { useState, useEffect } from 'react';
import User from './User';
import { randomUidArray } from './uid';


function App() {

  const [uid, setUid] = useState('');
  const axios = require('axios');
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [randomUid, setRandomUid] = useState('');

  function search(){
    if(uid.toString().length===9){
      setShow(true);
      axios.get(`https://genshin-impact-api-converter.herokuapp.com/api/main/?uid=${uid}`).then(res=>{
        if(res.data.message==='OK'){
          setData(res.data);
        }else{
          alert('Information of this uid is not available to public or invalid uid!');
          setShow(false);
        }  
      }).catch(e=>alert(e));
    }else{
      alert('Invalid uid!');
    };
  };
  function searchRandom(){
      setShow(true);
      setRandomUid(randomUidArray[Math.floor(Math.random() * randomUidArray.length)])
  };
  useEffect(()=>{
    if(randomUid!=''){
      axios.get(`https://genshin-impact-api-converter.herokuapp.com/api/main/?uid=${randomUid}`).then(res=>{
          setData(res.data);  
      }).catch(e=>alert(e));
    }else{
      console.log('Do nothing')
    } 
  }, [randomUid]);

  

  return (
    <div className="app">
      {show===false?<div className="search" style={{
        backgroundImage: 'url("/images/background.png")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100%'
        }}>
        <div className="instruction">Type in your uid and then search</div>
        <input type="text" value={uid} onChange={(e)=>setUid(e.target.value)} className="input-bar"></input>
        <button onClick={search} className="search-btn">Search</button>
        <div className="instruction">Not a player yourself? Search a random uid</div>
        <button onClick={searchRandom} className="search-btn">Search Random</button>
      </div>:null}
      {show===true?<div>{data===null?<div className="loading">Fetching Data...Wait A Second</div>:<User data={data} uid={uid} random={randomUid}/>}</div>:null}
    </div>
  );
}

export default App;
