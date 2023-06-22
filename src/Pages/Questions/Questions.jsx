import React from 'react'
import HomeMainbar from '../../Components/HomeMainbar/HomeMainbar'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import '../Home/Home.css'

export default function Home() {
  return (
    <div className="home-container-1">
      <LeftSidebar/>
      <div className="home-container-2">
        <HomeMainbar/>
        <RightSidebar/>
      </div>
    </div>
  )
}
