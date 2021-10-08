import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            //h-48 is 196 px
            <div className='bg-navbar bg-cover fixed z-10 h-20'> 
                <button className='ml-3 mt-1'><img src="/Slices/Back.png" alt="back" width='20px'height='20px' /></button>
                <input type="text" className="h-7 w-76 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-opacity-0" placeholder="Search anything..." />
                <button className='ml-14 mt-2 pr-2'><img src="/Slices/search.png" alt="search" width='20px'height='20px' /></button>
            </div>
        )
    }
}

export default Navbar
