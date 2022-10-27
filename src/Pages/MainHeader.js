import React, { Component } from "react";
import header from '../assets/Header.svg'
import logo from '../assets/Strip.svg'
import { FaUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

class MainHeader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dropdown:false,
      
    }
  }

  handleDropDown=()=>{
    this.setState({
      dropdown: !this.state.dropdown
    })
  }

  handleLogout=()=>{
    this.setState({
      dropdown:false
    })
    this.props.history.push('/')
  }


  render() {
    console.log(localStorage)
    return (
      <div>
        <div className="row" style={{background:'#9b2829',height:'74px'}}>
          <div className="col-md-6">
            <span style={{display:'flex',marginTop:'0px',marginLeft:'4%'}}>
              <img src={logo} style={{width:'6%'}}/>
              <p style={{fontSize:'18px',fontWeight:'bolder',color:'white',marginLeft:'10px',fontFamily:'Maven',marginTop:'10px'}}>IDFC FIRST<br/>BANK</p>
            </span>
          </div>
          <div className="col-md-6" style={{textAlign:'right'}}>
            <p style={{fontWeight:'bold',fontSize:'20px',color:'white',marginRight:'5%',marginTop:'1%'}}>{localStorage.getItem('Username')}</p>
            <p style={{fontWeight:'bold',fontSize:'16px',color:'white',marginRight:'5%',marginTop:'-11px'}}>Scrunitizer</p>
            {/* <span style={{marginTop:'20px'}}>
              <FaUserCircle style={{color:'white',fontSize:'30px',marginTop:'20px',marginRight:'42px'}} onClick={this.handleDropDown}/>
              {this.state.dropdown === true &&
              <ul style={{listStyle:'none',width:'15%',marginLeft:'83%'}}>
                <li onClick={this.handleLogout}  style={{cursor:'pointer',fontSize:'15px',padding:'10px',background:'white',padding:'10px',fontWeight:'bold',boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}><BiLogOut /> Logout</li>
              </ul>
              }
            </span> */}
          </div>
        </div>
      </div>
    )
  }
}

export default MainHeader;