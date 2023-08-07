import './App.css';
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import UserList from './components/UserList';
import Create from './components/Create';
import Update from './components/Update';
import { Provider } from 'react-redux'
import { Store } from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div>
            <Link to={'/'}>HOME</Link>
            <Link to={'/users'}>USERS</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/create' element={<Create />} />
            <Route path='/update/:code' element={<Update />} />
          </Routes>
        </BrowserRouter><ToastContainer position='bottom-right' />
      </div>
    </Provider>
  );
}

export default App;
