import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const URL = 'http://localhost:3001/'

function App() {
  const [tasks, settasks] = useState([])

  useEffect(() => {
    axios.get(URL)
    .then((response)=>{
      settasks(response.data)
    }).catch (error =>{
      alert(error.response.data.error)
    })
}, [])


  return (
    <div>
      <h3>My Tasks</h3>
      <ol>
        {tasks.map(task =>(
          <li key={task.id}>{task.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
