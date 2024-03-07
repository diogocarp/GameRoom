import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Store from './pages/Store';
import Payment from './pages/Payment';
import { Check } from '@material-ui/icons';
import Checkout from './pages/Checkout';




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Login />} />
    <Route path="/header" element={<Header />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/store" element={<Store />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/checkout" element={<Checkout />} />
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
