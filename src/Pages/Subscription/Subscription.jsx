import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import './Subscription.css'
import gold from '../../assets/gold.jpg'
import silver from '../../assets/silver.jpg'
import bronze from '../../assets/bronze.jpg'
import { useDispatch, useSelector } from "react-redux";
import { setTotalQuestions } from "../../actions/totalQuestionParticularUser";


export const Subscription = () => {

    const totalQuestions = useSelector((state) => state.totalQuestionsReducer);
    console.log(totalQuestions)


  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2" style={{ marginTop: "50px" }}>
        <h1
          style={{
            fontWeight: "400",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Subscription
        </h1>
        <div className="cards" style={{marginTop: '30px'}}>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img src={bronze} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{display: 'flex', justifyContent: 'center'}}>1 Question/day</h5>
                  <p style={{display: 'flex', justifyContent: 'center'}}>Free plan</p>
                  <div className="d-flex justify-content-center">
                    <button className="btn" style={{backgroundColor: 'rgb(238, 193, 168)'}}>Apply</button>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={silver} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{display: 'flex', justifyContent: 'center'}}>5 Questions/day</h5>
                  <p style={{display: 'flex', justifyContent: 'center'}}>Rs. 100/month</p>
                  <div className="d-flex justify-content-center">
                    <button className="btn" style={{backgroundColor: 'rgb(181, 181, 181)'}}>Apply</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={gold} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{display: 'flex', justifyContent: 'center'}}>Unlimited Questions</h5>
                  <p style={{display: 'flex', justifyContent: 'center'}}>Rs. 1000/month</p>
                  <div className="d-flex justify-content-center">
                    <button className="btn" style={{backgroundColor: 'rgb(239, 197, 101)'}}>Apply</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
