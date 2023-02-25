import React from 'react'
import BrowseCourses from '../pages/BrowseCourses'
import Home from '../pages/Home'

const MainPage = () => {
  return (
    <React.Fragment>
    <main>
      <Home/>
      <BrowseCourses/>
    </main>
  </React.Fragment>
  )
}

export default MainPage