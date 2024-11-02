import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddBlog from "../pages/AddBlog";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AllBlogList from "../pages/AllBlogList";
import Blog from "../pages/Blog";

function Route() {
    const route = createBrowserRouter([
        {
            path:'/',
            element: <HomePage/>
        },
        {
            path:'/add-blog',
            element:<AddBlog/>
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
            element:<AllBlogList/>
        },
        {
            path:'/fullarticle/:id',
            element:<Blog/>
        }
    ])
  return <RouterProvider router={route}/>
}

export default Route



