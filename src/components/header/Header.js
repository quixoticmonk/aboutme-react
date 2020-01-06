import React, { Component } from "react";
import './Header.css'
const headerTiles = 'Home | Github Repo '


class Header extends Component{
    render(){
        return(
            <div className='headerTile'>
                <h3>{headerTiles}</h3>
            </div>
        )
    }
}

export default Header