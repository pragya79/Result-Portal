import './App.css';
import Header from './containers/Header';
import Auth from './containers/Auth';
import { UserContextProvider } from './context/userContext';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="ui container">
      <UserContextProvider>
        <Router>
        <Header/>
      <Routes>
      <Route path="/" element={<Auth/>}/>
      </Routes>
        </Router>
      
      </UserContextProvider>
    </div>
  );
}

export default App;
