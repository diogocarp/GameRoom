import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Store from './pages/Store';
import Payment from './pages/Payment';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import RegisterGameBoard from './pages/RegisterGameBoard';
import UsersTable from './pages/UsersTable';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/store" element={<Store />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/registerGameBoard" element={<RegisterGameBoard />} />
    <Route path="/usersTable" element={<UsersTable/>} />
    </>
  )
)

function App() {
  return (
    <div style={{backgroundColor: '#37363D'}}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
