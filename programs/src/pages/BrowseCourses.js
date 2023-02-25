import React from 'react'
import Card from '../components/Card'
import HeaderPage from '../components/HeaderPage'

const BrowseCourses = () => {
  return (
    <React.Fragment>
    <main>
    <div className="bg-green-900 pb-20 mt-16 centered flex-col ">
        <HeaderPage/>
        <Card/>
      </div>
    </main>
  </React.Fragment>
  )
}

export default BrowseCourses