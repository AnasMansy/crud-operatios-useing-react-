import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const SideBar = () => {
    return (
        < >
            <ul className='list-unstyled'>
                <li>
                <Link to="/products">Products</Link>
                </li>
                <li>
                    <a>categories</a>
                </li>
                <li>
                    <a>logout</a>
                </li>
                <li>
                    <a>about</a>
                </li>
            </ul>
        </>
    )
}

export default SideBar
