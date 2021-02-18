import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

import userInfo from './database/user.json';

function App() {
  return (
    <div>
      <Profile {...userInfo}/>            {/*высыпали все свойства*/}
      <Statistics title="Upload stats" /> {/*Рендер по условию*/}
    </div>
  );
}

export default App;
