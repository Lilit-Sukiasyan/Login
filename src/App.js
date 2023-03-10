import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './screens/LoginPage/Login';
import MainPage from './screens/MainPage/MainPage';
import { authLogin } from './store/actions/authActions';
import { currentUserSelector } from './store/selectors/authSelectors';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authLogin())
  }, []);
 
  const currentUser = useSelector(currentUserSelector)
  return (
    <div className="App">
      {currentUser ? <MainPage /> : <Login />}
    </div>
  );
}

export default App;
