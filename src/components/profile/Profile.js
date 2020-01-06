import React, {Component} from 'react'
import './Profile.css'
import profileImage from './profileImage.png'

const profileText = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida. Vel risus commodo viverra maecenas accumsan lacus vel. Enim neque volutpat ac tincidunt. A arcu cursus vitae congue. Elementum nibh tellus molestie nunc non blandit massa enim nec. Posuere urna nec tincidunt praesent. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Sit amet tellus cras adipiscing enim eu. Nulla porttitor massa id neque. Nam libero justo laoreet sit. Ut ornare lectus sit amet est. Suscipit tellus mauris a diam maecenas sed. Phasellus vestibulum lorem sed risus ultricies.</p>

class Profile extends Component{

    render(){
        return(
            <div className='container'>
                <h1>Manu Chandrasekhar</h1>
                <img src={profileImage} alt='Profile' />
                <p className='profileContainer'>{profileText}</p>
            </div>
        )
    }
}

export default Profile