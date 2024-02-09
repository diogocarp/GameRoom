import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Store from './screens/Store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Login />} />
    <Route path="/header" element={<Header />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/store" element={<Store />} />
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
