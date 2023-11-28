
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './components/User';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/User",
      element: <User user={"David"}/>
    },
    {
      path: "/user/:uid",
      element: <User/>
    }
  ]);
  return (
    <>
      <div>Header</div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
