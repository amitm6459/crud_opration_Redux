import logo from './logo.svg';
import './App.css';
import {BrowserRouter,  Link,  Route,  Routes } from "react-router-dom"
import Home from './component/Home';
import UserListing from './component/UserListing';
import Adduser from './component/Adduser';
import Updateuser from './component/Updateuser';
import {ToastContainer } from 'react-toastify';
import Store from './Redux/Store';
import {Provider} from "react-redux";


function App() {
  return (
    <Provider store={Store}>
    <div className="App" >
      <BrowserRouter>
        <div className="header">
          <Link to={'/'}>Home</Link>
          <Link  to={'/user'}>User</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<UserListing/>}/>
          <Route path='/user/add' element={<Adduser/>}/>
          <Route path='/user/edit/:code' element={<Updateuser/>}/>

        </Routes>
      </BrowserRouter>
      <ToastContainer ></ToastContainer>
      
    </div>
    </Provider>
  );
}

export default App;
