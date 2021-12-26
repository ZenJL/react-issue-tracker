
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAdd from './components/FormAdd';

import {Button } from 'reactstrap';
import IssueList from './components/IssueList';
import { useEffect } from 'react/cjs/react.development';
import { useState } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from "uuid";


function App() {
  const [todos, setTodos] = useState([]);

  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('');

  const [form, setForm] = useState(
    {
      id: "",
      title: "Learn React",
      author: "Tony Nguyen",
      description: "",
      severity: "low",
      status: "new"
    }
);

  useEffect(() => {
    // console.log('helloeqwe useEe');

    async function getTodos() {
      try {
        const res = await axios.get('https://tony-json-server.herokuapp.com/api/todos');
        // console.log(res);
        // console.log('hello: ', res.data)
        setTodos(res.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getTodos();
  }, [])

  const addIssue = async (newIssue) => {

    console.log('from top: ', form.description, form.severity);
    console.log('from rrs: ', form);
    // axios.post(`https://tony-json-server.herokuapp.com/api/todos`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: {newIssue},
    // })
    // console.log('newiss: ', newIssue);
    // setTodos([newIssue, ...todos])
    

  };
  addIssue();

  const deleteIssue = async (id) => {
    axios.delete(`https://tony-json-server.herokuapp.com/api/todos/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
      setTodos(todos.filter((item) => item.id !== id))
    // if(window.confirm('Are you sure you want to delete?')) {
    // }
};

  return (
    <div className="App">
      <div 
        className="container">
        <Button
          className='btn-logout'
          color='info'
        >
          Log out</Button>

        <h2 className='head-title'>ISSUES TRACKER</h2>
        <FormAdd
          addIssue={addIssue}
          form={form}
          setForm={setForm}
          description={description}
          setDescription={setDescription}
          severity={severity}
          setSeverity={setSeverity}
        />

        <hr/>

        <IssueList todos={todos} deleteIssue={deleteIssue}/>
      </div>
    </div>
  );
}

export default App;
