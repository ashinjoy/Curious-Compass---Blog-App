import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddBlog from "../pages/AddBlog";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AllBlogList from "../pages/AllBlogList";
import Blog from "../pages/Blog";
import MyPosts from "../pages/MyPosts";
import EditBlog from "../pages/EditBlog";
import ProtectedRoute from "./ProtectedRoute";

function Route() {
    const route = createBrowserRouter([
        {
            path:'/',
            element: <HomePage/>
        },
        {
            path:'/add-blog',
            element:<ProtectedRoute><AddBlog/></ProtectedRoute>
        },
        {
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/allblogs',
            element:<ProtectedRoute><AllBlogList/></ProtectedRoute>
        },
        {
            path:'/fullarticle/:id',
            element:<ProtectedRoute><Blog/></ProtectedRoute>
        },
        {
            path:'/myblogs',
            element:<ProtectedRoute><MyPosts/></ProtectedRoute>
        },
        {
            path:'/editpost/:id',
            element:<ProtectedRoute><EditBlog/></ProtectedRoute>
        }
    ])
  return <RouterProvider router={route}/>
}

export default Route



