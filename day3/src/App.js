import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import TodoContainer from './TodoContainer';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserContainer from './UserContainer';
import Home from './Home';


function App() {

  const [{todos}, dispatch] = useStateValue();

  useEffect(() => {
    fetch('/todos')
      .then(resp => {
        console.log(resp);
        console.log('======success=======');
        return resp.json();
      })
      .then(resp => {
          Object.entries(resp).map(([key, value]) => {
              console.log("mapping values....")
              console.log(value.title);
          })
          dispatch({
            type: 'ADD_TO_TODOS',
            item: resp,
          });
        console.log("assigned todos....");
      })
      .catch(err => {
        console.log('======failure=======');
        console.log(err);
      });

    fetch('/users')
      .then(resp => {
        console.log(resp);
        console.log('======success=======');
        return resp.json();
      })
      .then(resp => {
          Object.entries(resp).map(([key, value]) => {
              console.log("mapping values....")
              console.log(value.username);
          })
          dispatch({
            type: 'ADD_TO_USERS',
            item: resp,
          });
        console.log("assigned todos....");
      })
      .catch(err => {
        console.log('======failure=======');
        console.log(err);
      });
  }, []);

  return (
      <Router>
        <div className="App">
          {/* Header */}
          <Header/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<UserContainer/>}/>
            <Route path="/tasks" element={<TodoContainer/>}/>


          </Routes>
        </div>
      </Router>
      

    
  );
}

export default App;
