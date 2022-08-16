import React from 'react';
import { NavLink, Link } from 'react-router-dom'

export function Header() {
    return (
        <div style={{display:'flex',flexGrow:'1',flexDirection:'column'}}>
            
            <nav className='navbar navbar-expand-md navbar-dark bg-dark' style={{padding:'10px'}}>
                <span style={{fontWeight:'bold',color:'cyan', marginRight:'20px'}}><Link to="/" ><img src='/images/logo.png' style={{height:'40px', width:'auto'}} alt='Customer Manager'></img></Link>  Customer Manager</span>
            {/* <h4 style={{fontWeight:'bold',color:'cyan'}}>Customer Orders</h4> */}
            
           
            <NavLink to="/customers" style={{color:'cyan',textDecoration:'none',marginLeft:'auto'}}>Customers</NavLink>&nbsp;
            <NavLink to="/orders" style={{color:'cyan',textDecoration:'none',marginLeft:'10px',marginRight:'10px'}}>Orders</NavLink>
           
        </nav>
        </div>
    )
}