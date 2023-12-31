import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import Avatar from '../../Components/Avatar/Avatar'
import {EditProfileForm} from './EditProfileForm'
import {ProfileBio} from './ProfileBio'
import './UserProfile.css'

export const UserProfile = () => {

    const [Switch, setSwitch] = useState(false)

    const {id} = useParams()
    const Users = useSelector((state) => state.allUserReducer)
    const currentProfile = Users.filter((user) => user._id === id)[0];
    const currentUser = useSelector((state) => (state.currentUserReducer))

  return (
    <div className='home-container-1'>
       <LeftSidebar />
       <div className="home-container-2">
        <section>
            <div className="user-details-container">
                <div className="user-details">
                    <Avatar backgroundColor="purple" color="white"fontSize='50px' px='40px' py='30px'>
                        {currentProfile?.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <div className="user-name">
                        <h1>{currentProfile?.name}</h1>
                        <p><i className="fa-solid fa-cake-candles"></i>  Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                    </div>
                </div>
                {
                    currentUser?.result._id === id && (
                        <button type='button' onClick={()=> setSwitch(true)} className='edit-profile-btn'>Edit Profile</button>
                    )
                }
            </div>
            <>
               {
                Switch? (
                    <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                ):(
                    <ProfileBio currentProfile={currentProfile}/>
                )
               }
            </>
        </section>
       </div>
    </div>
  )
}
