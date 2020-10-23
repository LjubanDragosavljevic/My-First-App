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
                <p className="pgb">
                  JUNE UTILIZATION <span className="sgb">LIMIT: 35GB</span>
                </p>
              </div>
              <div id="myProgress" onClick={Move}>
                <div id="myBar">14.1GB</div>
              </div>
            </div>
            <div className="divmb">
              <div>
                <div id="mbProgress1" className="mbAligment">
                  <div className="mbFont1">
                    <img
                      src="images/arrow-dl-r.png"
                      alt=""
                      className="icon-mb"
                    />
                    21.4 Mb/s
                  </div>
                  <div id="mbBar1"> 1520</div>
                </div>
              </div>
              <div id="mbProgress2" className="mbAligment">
                <div className="mbFont2">
                  <img src="images/arrow-up-r.png" alt="" className="icon-mb" />{' '}
                  4.8 Mb/s
                </div>
                <div id="mbBar2"> 1520</div>
              </div>
            </div>
          </div>

          <div className="infoBar2">
            <div className="mbAligment">
              <div className="barBar">
                <div className="barText">
                  <div>
                    OVERALL <br></br>
                    INTERNET HEALTH
                  </div>
                </div>
                <div className="mbAligment">
                  <img
                    src="images/smiley-happy.png"
                    alt=""
                    className="icon-nav"
                  />
                  <div id="brCol1" className="barSize"></div>
                  <div id="brCol2" className="barSize"></div>
                  <div id="brCol3" className="barSize"></div>
                  <div id="brCol4" className="barSize"></div>
                  <div id="brCol5" className="barSize"></div>
                  <div id="brCol6" className="barSize"></div>
                  <div id="brCol7" className="barSize"></div>
                  <div id="brCol8" className="barSize"></div>
                  <div id="brCol9" className="barSize"></div>
                  <div id="brCol10" className="barSize"></div>
                  <div id="brCol11" className="barSize"></div>
                  <div id="brCol12" className="barSize"></div>
                </div>
              </div>
              <div className="barBar">
                <div className="barText">
                  <div>
                    OVERALL <br></br>
                    INTERNET HEALTH
                  </div>
                </div>
                <div className="mbAligment">
                  <div id="brCol13" className="barSize"></div>
                  <div id="brCol14" className="barSize"></div>
                  <div id="brCol15" className="barSize"></div>
                  <div id="brCol16" className="barSize"></div>
                  <div id="brCol17" className="barSize"></div>
                  <div id="brCol18" className="barSize"></div>
                  <div id="brCol19" className="barSize"></div>
                  <div id="brCol20" className="barSize"></div>
                  <div id="brCol21" className="barSize"></div>
                  <div id="brCol22" className="barSize"></div>
                  <div id="brCol23" className="barSize"></div>
                  <div id="brCol24" className="barSize"></div>
                </div>
              </div>
              <div className="barBar">
                <div className="barText">
                  <div>
                    OVERALL <br></br>
                    INTERNET HEALTH
                  </div>
                </div>
                <div className="mbAligment">
                  <div id="brCol25" className="barSize"></div>
                  <div id="brCol26" className="barSize"></div>
                  <div id="brCol27" className="barSize"></div>
                  <div id="brCol28" className="barSize"></div>
                  <div id="brCol29" className="barSize"></div>
                  <div id="brCol30" className="barSize"></div>
                  <div id="brCol31" className="barSize"></div>
                  <div id="brCol32" className="barSize"></div>
                  <div id="brCol33" className="barSize"></div>
                  <div id="brCol34" className="barSize"></div>
                  <div id="brCol35" className="barSize"></div>
                  <div id="brCol36" className="barSize"></div>
                </div>
              </div>
              <div className="barBar">
                <div className="barText">
                  <div>
                    OVERALL <br></br>
                    INTERNET HEALTH
                  </div>
                </div>
                <div className="mbAligment">
                  <div id="brCol37" className="barSize2"></div>
                  <div id="brCol38" className="barSize2"></div>
                  <div id="brCol39" className="barSize2"></div>
                  <div id="brCol40" className="barSize2"></div>
                  <div id="brCol41" className="barSize2"></div>
                  <div id="brCol42" className="barSize2"></div>
                  <div id="brCol43" className="barSize2"></div>
                  <div id="brCol44" className="barSize2"></div>
                  <div id="brCol45" className="barSize2"></div>
                  <div id="brCol46" className="barSize2"></div>
                  <div id="brCol47" className="barSize2"></div>
                  <div id="brCol48" className="barSize2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="infoBar3">
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
