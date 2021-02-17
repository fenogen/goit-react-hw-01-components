
import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics'

import userInfo from './database/user.json'
import statistic from './database/statistical-data.json'
console.log(statistic)


function App() {
  return (
    <div>
      <Profile
        key={userInfo.tag}
        {...userInfo}
      />
      <Statistics/>
    </div>
  );
}

export default App;