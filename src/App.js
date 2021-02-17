
import './App.css';
import Profile from './components/Profile/Profile';
import userInfo from './database/user.json'


function App() {
  return (
    <div>
      <Profile
        key={userInfo.tag}
        {...userInfo}
      />
    </div>
  );
}

export default App;