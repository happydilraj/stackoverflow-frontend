import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import './Subscription.css'
import gold from '../../assets/gold.jpg'
import silver from '../../assets/silver.jpg'
import bronze from '../../assets/bronze.jpg'
import './Subscription.css'


export const Subscription = () => {

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
        
        <div className="three-cards">
        <div className="cards">
            <div className="card">
                <div className="card-img">
                    <img src={bronze} alt="bronze" width="100%" height="100%"/>
                </div>
                <h5>1 Questions</h5>
                <p className="amount">Rs.10/month</p>
                <button className="btns btn-bronze">Apply</button>
            </div>
        </div>

        <div className="cards">
            <div className="card">
                <div className="card-img">
                    <img src={silver} alt="silver"
                    width="100%" height="100%" />
                </div>
                <h5>5 Questions</h5>
                <p className="amount">Rs.100/month</p>
                <button className="btns btn-silver">Apply</button>
            </div>
        </div>

        <div className="cards">
            <div className="card">
                <div className="card-img">
                    <img src={gold} alt="gold" 
                    width="100%" height="100%"/>
                </div>
                <h5>Unlimited Questions</h5>
                <p className="amount">Rs.1000/month</p>
                <button className="btns btn-gold">Apply</button>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
};
