import React, { Suspense } from 'react'
import Layout from './Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import SignUp from './Pages/SignUp/SignUp'
import Korzina from './Pages/Korzina/Korzina'
import Login from './Pages/Login/Login'
import Tovar from './Pages/Tovar/Tovar'
import Category from './Pages/Category/Category'
import Orders from './Pages/Orders/Orders'

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Suspense><Layout/></Suspense>),
    children: [
      {
        index: true,
        element: (<Suspense><Home/></Suspense>)
      },
      {
        path: "signUp",
        element: (<Suspense><SignUp/></Suspense>)
      },
      {
        path: "login",
        element: (<Suspense><Login/></Suspense>)
      },
      {
        path: "korzina",
        element: (<Suspense><Korzina/></Suspense>)
      },
      {
        path: "tovar/:id",
        element: (<Suspense><Tovar/></Suspense>)
      },
      {
        path: "category",
        element: (<Suspense><Category/></Suspense>)
      },
      {
        path: "orders",
        element: (<Suspense><Orders/></Suspense>)
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App