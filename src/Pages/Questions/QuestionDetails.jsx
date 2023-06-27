import React, {useState} from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment"
import copy  from "copy-to-clipboard"

import upVote from "../../assets/upVote.svg";
import downVote from "../../assets/downVote.svg";
import Avatar from "../../Components/Avatar/Avatar";
import "./QuestionDetails.css";
import { deleteQuestion, postAnswer, voteQuestion } from "../../actions/question";
import DisplayAnswer from "./DisplayAnswer";

export default function QuestionDetails() {
  const questionList = useSelector((state) => state.questionReducer);

  const [answerBody, setanswerBody] = useState("")
  let { _id } = useParams();
  const User = useSelector((state) => (state.currentUserReducer))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const url = "http://localhost:3000"

  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault()

    if(User===null){
      alert("login or signup to post a answer")
      navigate('/')
    }
    else{
      dispatch(postAnswer({_id, noOfAnswers: answerLength+1, answerBody, userAnswered: User?.result?.name, userId: User?.result?._id}))
    }
   }

  const handleShare = () => {
    copy(url+location.pathname)
    alert("url copied : "+url+location.pathname)
  }

  const handleDelete = () => {
    dispatch(deleteQuestion(_id,navigate))
  }

  const handleupVote = () => {
    dispatch(voteQuestion(_id,"upVote",User?.result?._id));
  }

  const handledownVote = () => {
    dispatch(voteQuestion(_id,"downVote",User?.result?._id));
  }

  return (
    <div className="question-details-page">
      {questionList.data === null ? (
        <h1> Loading...</h1>
      ) : (
        <>
          {questionList.data
            .filter((question) => question._id === _id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upVote} onClick={handleupVote} alt="upVote" width="18" style={{cursor: "pointer"}}/>
                      <p>{question.upVotes.length - question.downVotes.length}</p>
                      <img src={downVote} onClick={handledownVote} alt="downVote" width="18" style={{cursor: "pointer"}}/>
                    </div>
                    <div style={{ width: "100%" }} className="question-body">
                      <p>{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tags) => (
                          <p key={tags}> {tags} </p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>Share</button>
                          {
                            User?.result?._id === question.userId &&
                            <button type="button" onClick={handleDelete}>Delete</button>
                            
                          }
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form onSubmit={(e)=>{handlePostAnswer(e,question.answer.length)}}>
                    <textarea
                      autoFocus
                      onChange={(e)=>setanswerBody(e.target.value)}
                      name="yourAnswer"
                      id="yourAnswer"
                      cols="30"
                      rows="10"
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>

                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
          
        </>
      )}
    </div>
  );
}


