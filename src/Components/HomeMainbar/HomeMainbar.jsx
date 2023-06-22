import React from 'react'
import './HomeMainbar.css'
import {useLocation, useNavigate} from 'react-router-dom'
import QuestionList from './QuestionList';
import { useSelector } from "react-redux";
// import questionList from '../../Question.json'


export default function HomeMainbar() {
  let curLocation = useLocation();

  const questionList = useSelector((state)=>(state.questionReducer));
  
  const user = 1;
  const navigate = useNavigate();

  const AskQuestion = () => {
      if(user == null)
      {
        alert("Login or Signup to Ask a Question")
        navigate('/Auth')
      }
      else
        navigate('/AskQuestion')  
  }

  return (
    <div className='Home-mainbar-container'>
        <div className="Home-mainbar-container-1">
          {
            curLocation.pathname === '/' ? <h1> Top Questions </h1> :
              <h1>All Questions</h1>
          }
          <button onClick={AskQuestion} className='ask-button'>Ask Questions</button>
        </div>
        <div className="Home-mainbar-container-2">
          {
            questionList.data === null ? <h1>Loading..</h1>:
            <>
            <p>{questionList.data.length} Questions</p>
            <QuestionList questionList={questionList.data}/>
            </>
          }
        </div>
    </div>
  )
}
