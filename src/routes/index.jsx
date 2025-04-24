import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Planes from '../pages/Planes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "planes",
        element: <Planes />
      }
    ]
  }
]);

export default router;