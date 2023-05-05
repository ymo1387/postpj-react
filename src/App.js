import logo from './logo.svg';
import './App.css';
import { axiosToken } from 'axios-client';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const logout = () => {
    axiosToken
      .post("v1/auth/logout")
      .then(res => {
        Cookies.remove("access_token")
        navigate("/login")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code className='text-red-500'>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span className='text-red-500 cursor-pointer' onClick={logout}>Logout</span>
      </header>
    </div>
  );
}

export default App;
