import React, {Component} from 'react'
import './Profile.css'
import profileImage from './profileImage.png'

const profileText = <p>Software enthusiast by trade, gamer by passion, father to a 4 yo.Advocate for developing software the right way.Can hold a conversation on Test Driven Development, DevSecOps, Test Automation and the few buzzwords which our industry seems to follow.Focussed on client enablement with agile delivery.Currently supporting few financial services organization on their journey to continuous "everything".</p>

class Profile extends Component{

    render(){
        return(
            <div className='container'>
                <h1>Manu Chandrasekhar</h1>
                <img src={profileImage} alt='Profile' id="profileImage"/>
                <p className='profileContainer'>{profileText}</p>
            </div>
        )
    }
}

export default Profile