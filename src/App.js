import './App.css';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userInfo from './database/user.json';
import statistic from './database/statistical-data.json';
import friends from './database/friends.json';
import transactions from './database/transactions.json'

function App() {
  return (
    <div>
      <Profile {...userInfo}/>                                 {/*высыпали все свойства*/}
      <Statistics title="Upload stats" statistic={statistic}/> {/*title - это для Рендера по условию*/}
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </div>
  );
}

export default App;
