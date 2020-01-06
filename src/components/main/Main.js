import React, { Component } from 'react'
import Profile from '../profile/Profile'
import Header from '../header/Header'
import RightContent from '../rightcontent/RightContent'

import './Main.css'


class Main extends Component{
  render(){
    return(
      <div className='Main'>
        <Header/>
        <div>
          <Profile/>
          <RightContent/>
        </div>
      </div>
    )
  }
}

export default Main