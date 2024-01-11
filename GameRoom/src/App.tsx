import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
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

