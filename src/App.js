import './App.css';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList'

import userInfo from './database/user.json';
import statistic from './database/statistical-data.json';
import friends from './database/friends.json';

function App() {
  return (
    <div>
      <Profile {...userInfo}/>                                 {/*высыпали все свойства*/}
      <Statistics title="Upload stats" statistic={statistic}/> {/*title - это для Рендера по условию*/}
      <FriendList friends={friends}/>
    </div>
  );
}

export default App;
