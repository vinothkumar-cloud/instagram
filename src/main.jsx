
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ViewStory from './ViewStory.jsx'
import Profil from './Profil.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/story/:id/:tot",
    element:<ViewStory/>
  },
  {
    path:"/profile",
    element:<Profil />
  }

])

createRoot(document.getElementById('root')).render(
 
    <RouterProvider router ={router} />
 
)
