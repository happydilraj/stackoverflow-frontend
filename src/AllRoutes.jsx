import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import { Tags } from './Pages/Tags/Tags'
import  Users from './Pages/Users/Users'
import  {UserProfile} from './Pages/UserProfile/UserProfile'
import  {Subscription} from './Pages/Subscription/Subscription'

export default function AllRoutes() {
  return (
    
    <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/Auth" element={<Auth />} />
        <Route exact path="/Questions" element={<Questions />} />
        <Route exact path="/AskQuestion" element={<AskQuestion />} />
        <Route exact path="/Questions/:_id" element={<DisplayQuestion />} />
        <Route exact path="/Tags" element={<Tags />} />
        <Route exact path="/Users" element={<Users />} />
        <Route exact path="/Users/:id" element={<UserProfile />} />
        <Route exact path="/Subscription" element={<Subscription />} />

          
    </Routes>
    
  )
}
