import React from 'react';
import './styles.css';
import Move from '../progress-bar';

function Subscribers() {
  return (
    <div>
      <nav className="sidenav">
        <a className="titleBottom title" href="#smartnetwork">
          <img src="images/Group.png" alt="" className="smart-network" />
          Smart Network
        </a>
        <a href="#subscribers">
          <img src="images/Shape-3.png" alt="" className="icon-nav" />
          Subscribers
        </a>
        <a href="#networks">
          <img src="images/Shape-4.png" alt="" className="icon-nav" />
          Networks
        </a>
        <a href="#ispplans">
          <img src="images/Shape-5.png" alt="" className="icon-nav" />
          ISP Plans
        </a>
        <a href="#taskmanager">
          <img src="images/Shape-2.png" alt="" className="icon-nav" />
          Task Manager
        </a>
        <a href="#scriptlibrary">
          <img src="images/Shape-1.png" alt="" className="icon-nav" />
          Script Library
        </a>
        <a href="#preferences">
          <img src="images/Shape-6.png" alt="" className="icon-nav" />
          Preferences
        </a>
        <a className="bottomBorder" href="#system">
          <img src="images/SYSTEM.png" alt="" className="system" />
        </a>
        <a href="#accounts">
          <img src="images/user.png" alt="" className="icon-nav" />
          Accounts
        </a>
        <a href="#organizations">
          <img src="images/Shape-7.png" alt="" className="icon-nav" />
          Organizations
        </a>
        <a href="#admins">
          <img src="images/Shape-8.png" alt="" className="icon-nav" />
          Admins
        </a>
        <a href="#support">
          <img src="images/Shape.png" alt="" className="icon-nav" />
          Support
        </a>
        <a className="bottom topBorder" href="#email">
          <img src="images/user.png" alt="" className="icon-user" />
          ofervallezinternet.net
        </a>
      </nav>

      <div className="container">
        <div className="subscribers-div">
          <img src="images/user.png" alt="" className="subscribers-box" />
          <p className="subscribers-aligment">Subscribers</p>
          <p className="subscribers-aligment subscribers-name">John Miller</p>
        </div>
        <div className="subscribers-div">
          <img src="images/user.png" alt="" className="subscribers-box" />
          <p className="subscribers-aligment">Subscribers</p>
          <p className="subscribers-aligment subscribers-name">John Miller</p>
        </div>
        <div className="subscribers-div">
          <img src="images/user.png" alt="" className="subscribers-box" />
          <p className="subscribers-aligment">Subscribers</p>
          <p className="subscribers-aligment subscribers-name">John Miller</p>
        </div>
      </div>

      <div className="container2">
        <div>
          <div className="infoBar1">
            <div className="divgb">
              <div>
                <p className="pgb">JUNE UTILIZATION <span className="sgb">LIMIT: 35GB</span></p>
              </div>
              <div id="myProgress" onClick={Move}>
                <div id="myBar" max="10" value="5">
                  14.1GB
              </div>
              </div>
            </div>
          </div>

          <div className="infoBar2">
            <img
              src="images/smiley-happy.png"
              alt=""
              className="subscribers-box"
            />
          </div>
          <div className="infoBar2">
            <p>A</p>
          </div>
        </div>

        <div className="map">
          <iframe
            className="map-height"
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181139.35491648177!2d20.282514448937967!3d44.815403288471224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade!5e0!3m2!1sen!2srs!4v1602606674013!5m2!1sen!2srs"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Subscribers;
