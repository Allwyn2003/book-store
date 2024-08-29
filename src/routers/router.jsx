import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../home/Home.jsx";
import App from "../App.jsx";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog.jsx";
import SingleBook from "../shop/SingleBook.jsx";
import FavoriteBooks from "../home/BestSellerBooks.jsx";
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import UploadBook from "../dashboard/UploadBook.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: '/book/:id',
        element: <SingleBook />,
        loader: ({ params }) => fetch(`https://book-server-o1xw.onrender.com/book/${params.id}`)
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) => fetch(`https://book-server-o1xw.onrender.com/book/${params.id}`)
      }
    ]
  }, {
    path: "sign-up",
    element: <Signup />
  }, {
    path: "login",
    element: <Login />
  }, {
    path: "logout",
    element: <Logout />
  }
]);


export default router;