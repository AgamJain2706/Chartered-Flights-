import React from 'react'
import ReactDOM from 'react-dom/client'
import Empty from './Pages/Empty.jsx'
import Layout from '../src/Layout.jsx'
import Form from './Pages/Form.jsx'
import Charter from './Pages/charter.jsx'
import SaleJet from './Pages/JetsSale.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import OurFleet from './Pages/OurFleet.jsx'
import JetCard from './Pages/JetCard.jsx'
import About from './Pages/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/Form' element={<Form />} />
      <Route path='Charter' element={<Charter />} />
      <Route path='/Empty-legs-flights' element={<Empty />} />
      <Route path='private-jets-for-sale' element={<SaleJet/>} />
      <Route path='our-fleet' element={<OurFleet/>} />
      <Route path='jet-card' element={<JetCard/>} />
      <Route path='about-us' element={<About/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
