import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from './actions/question';
import { getAllUsers } from './actions/getAllUsers'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllQuestions());
    dispatch(getAllUsers());
  },[dispatch])

  return (
    <Router>
      <Navbar/>
      <AllRoutes/>
    </Router>
  );
}

export default App;
