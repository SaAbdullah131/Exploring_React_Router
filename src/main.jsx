import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import First from './component/First/First';
import Friends from './component/Friends/Friends';
import FriendDetail from './component/FriendDetail/FriendDetail';
import Posts from './component/Posts/Posts';
import PostDetail from './component/PostDetail/PostDetail';
import Error from './component/Error/Error';

// const rounter = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path:'/about',
//     element:<About></About>
//   },
//   {
//     path:'/contact',
//     element: <Contact></Contact>,
//     errorElement: <Error/>
//   },
//   {
//     path: "/",
//     element: <Error/>,
   
//   },
// ])
const router = createBrowserRouter([
{
  path:'/',
  element:<Home></Home>,
  children: [
    {
      path:'/',
      element:<First></First>
    },
    {
      path:'/friends',
      element:<Friends></Friends>,
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
    },
    {
      path:'friend/:friendId',
      element:<FriendDetail></FriendDetail>,
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
    },
    {
      path:'posts',
      element:<Posts></Posts>,
      loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
    },
    {
      path:'/post/:postId',
      element:<PostDetail></PostDetail>,
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    },
    {
      path:'about',
      element:<About></About>
    },
    {
      path:'contact',
      element:<Contact></Contact>
    },
    {
      path: '*',
      element:<Error></Error>
    }
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
