import React from "react";
import  "./drawing_panel.css";
import logo from "./img/sozo.jpg";
import ArrowIcon from "./img/arrow_icon.png";
import LockIcon from "./img/lock_icon.svg";
import TagIcon from "./img/tags_icon.svg";
import SmileIcon from "./img/smile_icon.svg";
import ChatIcon from "./img/chat_icon.svg";
import { Dropdown } from 'react-bootstrap';


const DrawingPanel=() => {
    return (
   <React.Fragment>
       <div>
  <header>
    <div className="row" style={{margin: 20}}>
      <div className="col-md-3 rename_document_col">
        <img src={logo} width={20} />
        <span style={{textAlign: 'center', marginLeft: 10}}><b>Rename Document</b> 
          <i className="far fa-save" style={{marginLeft: 30, color: '#00C07F', marginTop: 10, fontSize: 20}} />
        <Dropdown>
        <Dropdown.Toggle >
        <i className="fas fa-align-left float-right" style={{marginRight: 20, color: '#202225', marginTop: 10, fontSize: 20}} />
        </Dropdown.Toggle>

         <Dropdown.Menu>
         <a className="dropdown-item" href="#">New Canvas</a>
            <a className="dropdown-item" href="#">Insert<i className="fas fa-play float-right" /></a>
            <a className="dropdown-item" href="#">Export<i className="fas fa-play float-right" /></a>
            <a className="dropdown-item" href="#">Duplicate</a>
            <a className="dropdown-item" href="#">Convert to Template</a>
            <a className="dropdown-item" href="#">Print</a>
            <a className="dropdown-item" href="#">Show Grid</a>
            <a className="dropdown-item" href="#">Help<i className="fas fa-play float-right" /></a>
            <a className="dropdown-item" href="#">Account Settings</a>
            <a className="dropdown-item" href="#">Log Out</a>  
          </Dropdown.Menu>
       </Dropdown>
          {/* <a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            
          </a> */}
          <div className="dropdown-menu canvas_option" aria-labelledby="dropdownMenuLink">
           
          </div>  
        </span>
      </div>
      
      <div className="col-md-7 text-center">
        <button className="alert text-center text-light" role="alert"> Succesfully Saved !</button>
        <div className="col-md-5 tag_icon" style={{transform: 'translate3d(14px, 248px, 18px)'}}>
          <a href type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={ChatIcon} /></a>
          <ul className="dropdown-menu demo_tag" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item " href="#">Edit Tags</a></li>
            <li className="demo_listtag"><button style={{background: '#FFFFFF 0% 0% no-repeat padding-box', border: '1px solid #D4E5F9', borderRadius: 10, marginLeft: 19, opacity: 1, width: 199}}>Demo tag</button>
              <i className="far fa-circle" />
              <img src="img/delete_tag.svg" /></li><br />
            <li> <button style={{background: '#FFFFFF 0% 0% no-repeat padding-box', border: '1px solid #D4E5F9', marginLeft: 19, borderRadius: 10, opacity: 1, width: 199}}>Demo tag
              </button>
              <i className="far fa-circle" />
              <img src="img/delete_tag.svg" />
            </li>
            <div className="tag_btn" style={{marginTop: 28}}>
              <button style={{marginLeft: 52, background: '#FFFFFF 0% 0% no-repeat padding-box', border: '1px solid #B8B8B8', borderRadius: 10, opacity: 1}}>Cancel</button>
              <button style={{float: 'right', marginRight: 73, padding: '6px 32px 8px 33px', backgroundColor: '#137EF9', color: '#FFFFFF', background: '#137EF9 0% 0% no-repeat padding-box', boxShadow: '0px 10px 10px #2323230D', borderRadius: 10}}>Save</button>
            </div>
          </ul>
          <div className="dropdown-menu notes_dropdown" aria-labelledby="dropdownMenuButton">
            <h5>Notes</h5>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#" />
             
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <div>
                    <select className="form-control" style={{width: 111}} name="cars" id="cars">
                      <option value="volvo">Body</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#"><i className="far fa-text" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fas fa-bold" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#"><i className="fas fa-tasks" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#"><i className="far fa-link" /></a>
                </li>
              </ul>
            </nav>
          </div>
          <a href><img src={SmileIcon} /></a>
          <a href><img src={LockIcon} /></a>
          <a href role="button" id="dropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={TagIcon} />
          </a>   
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#"> <i className="far fa-circle" /> <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fal fa-horizontal-rule" />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#"><i className="fal fa-horizontal-rule" /><font /></a>
                  <a className="dropdown-item" href="#">.........</a>
                  <a className="dropdown-item" href="#">. . . . . </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  2px
                </a>
                
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">1<font /></a>
                  <a className="dropdown-item" href="#">1</a>
                  <a className="dropdown-item" href="#">1</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> <img src={ ArrowIcon} style={{width: 22}} /></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  None
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">1<font /></a>
                  <a className="dropdown-item" href="#">1</a>
                  <a className="dropdown-item" href="#">1</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-long-arrow-alt-right" />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">1<font /></a>
                  <a className="dropdown-item" href="#">1</a>
                  <a className="dropdown-item" href="#">1</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> <img src={TagIcon} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="col-md-2 icon_btn">
        <div className="header_panel">
          <a href><i className="far fa-search" /></a>
          <a href><i className="far fa-paper-plane" /></a>
          <a href><i className="far fa-comment-alt-lines" /></a>
          <a href><i className="far fa-user-plus" /></a>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
            <i className="far fa-file-alt" />
            </Dropdown.Toggle>
            
            <Dropdown.Menu>
            <Dropdown.Header><h5>Notes</h5></Dropdown.Header>
              <Dropdown.Item href="#/action-1">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#" />
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <div>
                    <select className="form-control" style={{width: 111}} name="cars" id="cars">
                      <option value="volvo">Text 1 Name</option>
                      <option value="saab">Text 1 Name</option>
                      <option value="opel">Text 1 Name</option>
                      <option value="audi">Text 1 Name</option>
                      <option value="audi">Text 1 Name</option>
                      <option value="audi">Text 1 Name</option>
                      <option value="audi">Text 1 Name</option>
                    </select>
                  </div>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#"><i className="far fa-text" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fas fa-bold" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#"><i className="fas fa-tasks" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#"><i className="far fa-link" /></a>
                </li>
              </ul>
            </nav>
              </Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
        </div>
      </div>
    </div></header>
  <div className="row">
    <div className="col-md-1">
      <div className="sidebar">
        <ul className="list-group draw_icon">
          <li className="active"> <i className="fas fa-location-arrow" /></li>
          <li><i className="fal fa-text" /></li>
          <li><i className="far fa-sticky-note" /></li>
          <li><i className="fal fa-rectangle-wide" /></li>
          <li><i className="far fa-long-arrow-right" /></li>
          <li><i className="fal fa-edit" /></li><li>
          </li></ul> 
      </div>
      <div className="sidebar_sub_menu">
        <ul className="list-group draw_icon">
          <li><i className="far fa-th-large" /></li>
          <li><i className="far fa-list" /></li>
        </ul>
      </div>
    </div>
  </div>
  <footer style={{display: 'flex', float: 'right', marginBottom: 40}}>
    <ul className="list-group list-group-horizontal backward_forward_btn">
      <li className="list-group-item"><i className="fas fa-undo" /></li>
      <li className="list-group-item"><i className="far fa-redo-alt" /></li>
      <li className="list-group-item">
        <a className id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="far fa-history" />
        </a>
        </li>
        <div className="dropdown-menu history_dropdown" aria-labelledby="dropdownMenuButton">
          <h5><strong>Revision History</strong></h5>
          <hr />
          <ul className="list-group">
            <li className="list-group-item coll_list">
              <div className="row">
                <div className="col-md-2"><img src="img/history_icon.svg" style={{marginLeft: 15}} /></div>
                <div className="col-md-5" style={{marginTop: 11}} ><label><strong>Last Update</strong></label></div>
                <div className="col-md-5" style={{marginTop: 11, color: '#B9B9B9'}}><label>3 Dec, 20 - 02:30 Am</label></div>
              </div>
              <hr />
            </li>
            <li className="list-group-item coll_list">
              <div className="row">
                <div className="col-md-2"><img src="img/history_icon.svg" style={{marginLeft: 15}} /></div>
                <div className="col-md-5" style={{marginTop: 11}}><label ><strong>Last Update</strong></label></div>
                <div className="col-md-5" style={{marginTop: 11, color: '#B9B9B9'}}><p>3 Dec, 20 - 02:30 Am</p></div>
              </div>
              <hr />
            </li>
        </ul>
        </div>
     {/* <button className="btn_history">Clear All</button> */}
      <li className="list-group-item"><i className="fas fa-expand-wide" /></li>
      <li className="list-group-item"> <i className="far fa-map-marker-alt" /></li>
    </ul>
    <ul className="list-group list-group-horizontal max_min_size">
      <li className="list-group-item"><i className="fas fa-minus" style={{color: '#137EF9'}} /></li>
      <li className="list-group-item"><label>100%</label></li>
      <li className="list-group-item"><i className="far fa-plus" style={{color: '#137EF9'}} /></li>
    </ul>
  </footer>
  </div>
</React.Fragment>
);

}
export default DrawingPanel;