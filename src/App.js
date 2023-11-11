import { useState } from 'react';
import './App.css';
import DoList from './DoList';

function App() {
  const [value, setValue] = useState('');
  const [dos, setDos] = useState([]);

  const handlevalue = () => {
    setDos([...dos, value]);
  }



  return (
    
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='enter...'/>
      <button className='add' onClick={handlevalue}>
        ADD
      </button>
      {dos.map((item , index) => (
        <DoList key={index} item={item} index={index} dos={dos} setDos={setDos} />
      )) }


      {console.log(dos)}
    </div>
  );
}

export default App;
