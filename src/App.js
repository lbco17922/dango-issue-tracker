import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import UserPage from './components/UserPage.jsx';
import DevPage from './components/DevPage.jsx';
import {useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [isDeveloper, setIsDeveloper] = React.useState(false);
  const [listOfIssues, setListOfIssues] = React.useState([]);

  function changeIsDeveloper() {
    setIsDeveloper(prev => !prev);
  }

  useEffect(() => {
    Axios.get("https://dango-issue-tracker.herokuapp.com/getAllTickets")
      .then(response => {
        setListOfIssues(response.data);
      })
  }, []);

  return (
    <div>
      <NavBar isDeveloper={isDeveloper} changeStatus={changeIsDeveloper}/>
      {isDeveloper ? <DevPage 
        changeStatus={changeIsDeveloper} 
        listOfIssues={listOfIssues} 
        setListOfIssues={setListOfIssues}/> : <UserPage changeStatus={changeIsDeveloper}/>}
    </div>
  );
}

export default App;
