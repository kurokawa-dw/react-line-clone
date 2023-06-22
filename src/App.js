
import './App.css';
import SingIn from './components/SingIn';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Line from './components/Line';

function App() {
	// console.log(useAuthState)

	const [user] = useAuthState(auth);
	// console.log(user)

  return (
    <div className="App">
			{user ? <Line/> : <SingIn />}
    </div>
  );
}

export default App;
