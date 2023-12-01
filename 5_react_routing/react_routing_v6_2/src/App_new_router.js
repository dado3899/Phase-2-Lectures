
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './components/User';
import Posts from './components/Post';
import Navbar from './components/Navbar';
import SingleUser from './components/singleUser';
import {Link,useParams,useNavigate } from "react-router-dom";


function App() {

  // const navigate = useNavigate()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>
    },
    {
      path: "/posts",
      element: <Posts/>
    },
    {
      path: "/users",
      element: <User/>
    },
    {
      path: "/users/:id",
      element: <SingleUser/>
    }
  ]);
  

  return (
    <div>
      {/* <Navbar/> */}
      <RouterProvider router={router}/>
      <div>Footer</div>
    </div>
  );
}

export default App;
