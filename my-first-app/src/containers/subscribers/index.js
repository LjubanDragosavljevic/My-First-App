import React from 'react';
import '../styles/style.css';


function Subscribers() {
    return (
        <div >            
            <nav className="sidenav"> 
                <a className="titleBottom title" href="#smartnetwork"><img src="images/Group.png" alt="" className='smart-network'/>Smart Network</a>
                <a href="#subscribers"><img src="images/Shape-3.png" alt="" className='icon-nav'/>Subscribers</a>
                <a href="#networks"><img src="images/Shape-4.png" alt="" className='icon-nav'/>Networks</a>
                <a href="#ispplans"><img src="images/Shape-5.png" alt="" className='icon-nav'/>ISP Plans</a>
                <a href="#taskmanager"><img src="images/Shape-2.png" alt="" className='icon-nav'/>Task Manager</a>
                <a href="#scriptlibrary"><img src="images/Shape-1.png" alt="" className='icon-nav'/>Script Library</a>
                <a href="#preferences"><img src="images/Shape-6.png" alt="" className='icon-nav'/>Preferences</a> 
                <a className="bottomBorder" href="#system"><img src="images/SYSTEM.png" alt="" className='system'/></a>
                <a href="#accounts"><img src="images/user.png" alt="" className='icon-nav'/>Accounts</a>
                <a href="#organizations"><img src="images/Shape-7.png" alt="" className='icon-nav'/>Organizations</a>
                <a href="#admins"><img src="images/Shape-8.png" alt="" className='icon-nav'/>Admins</a>
                <a href="#support"><img src="images/Shape.png" alt="" className='icon-nav'/>Support</a>
                <a class="bottom topBorder" href="#email"><img src="images/user.png" alt="" className='icon-user'/>ofervallezinternet.net</a>
            </nav>  
                 
            <div className="container">
                <div className="subscribers-div"><img src="images/user.png" alt="" className='subscribers-box'/>
                    <p className="subscribers-aligment">Subscribers</p> 
                    <p className="subscribers-aligment subscribers-name">John Miller</p> 
                </div> 
                <div className="subscribers-div"><img src="images/user.png" alt="" className='subscribers-box'/>
                    <p className="subscribers-aligment">Subscribers</p> 
                    <p className="subscribers-aligment subscribers-name">John Miller</p> 
                </div> 
                <div className="subscribers-div"><img src="images/user.png" alt="" className='subscribers-box'/>
                    <p className="subscribers-aligment">Subscribers</p> 
                    <p className="subscribers-aligment subscribers-name">John Miller</p> 
                </div> 
                
            </div> 
        </div>
    );
}

export default Subscribers;