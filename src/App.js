import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import UserPage from './components/UserPage.jsx';
import DevPage from './components/DevPage.jsx';

function App() {
  const [isDeveloper, setIsDeveloper] = React.useState(false);

  function changeIsDeveloper() {
    setIsDeveloper(prev => !prev);
  }

  return (
    <div>
      <NavBar isDeveloper={isDeveloper} changeStatus={changeIsDeveloper}/>
      {isDeveloper ? <DevPage changeStatus={changeIsDeveloper}/> : <UserPage changeStatus={changeIsDeveloper}/>}
    </div>
  );
}

export default App;
