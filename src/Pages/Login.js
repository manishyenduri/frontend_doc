import React from "react";
import axios from "axios";
import { FaUserAlt, FaLock, FaKeyboard} from "react-icons/fa";
import logo from '../assets/Group 1.png'
import imageOne from '../assets/Group 35.svg'


class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  handleSubmit=()=>{
    localStorage.setItem('tackid',this.state.trackId)
    localStorage.setItem('Username',this.state.userId)
    const body={
      password: this.state.password ,
      userId: this.state.userId
    }
    axios.post('https://ps-trade.invoizo.com/user/login',body)
    .then((res)=> {
      console.log(res)
      localStorage.setItem("ucic", this.state.ucic)
      this.props.history.push('/Dashboard')
    }).catch((err) => {
      console.log(err)
    })
  }

  handleChange=(e)=>{
    const name = e.target.name
    this.setState({
      [name]:e.target.value
    })
  }

  render(){
    return(
      <div style={{width:'99%'}}>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="row" > 
                <div style={{width:'30%',marginTop:'7%',marginLeft:'10%',display:'flex'}}>
                  <img src={logo} style={{width:'77%'}}/>
                  {/* <p style={{fontSize:'18px',fontWeight:'bolder',color:'#9b2829',marginLeft:'10px',fontFamily:'Maven'}}>IDFC FIRST<br/>BANK</p> */}
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop:'11%'}}>
              <img src={imageOne} style={{marginLeft:'10%',width:'80%'}}/>
            </div>
          </div>
          <div className="col-md-6" style={{backgroundColor:'#9d2927',borderTopLeftRadius:'50px',borderBottomLeftRadius:'50px'}}>
            <center>
              <h1 style={{marginTop:'10%',color:'#9d2927'}}>Login</h1>
              <div style={{width:'57%',marginTop:'50px'}}>
                <p style={{padding:'5px 10px',backgroundColor:'white',borderRadius:'5px',border:'1px solid #9d2927',display:'flex'}}>
                  <FaUserAlt style={{color:'#9d2927',fontSize:'16px',marginTop:'7px'}}/> &nbsp; 
                  <input value={this.state.userId} name="userId" placeholder="User Id" onChange={this.handleChange} style={{width:'86%',marginLeft:'2%',border:'none',borderRadius:'10px',fontSize:'16px',outline:'none'}} />
                </p>
              </div>
              <div style={{width:'57%',marginTop:'30px'}}>
                <p style={{padding:'5px 10px',backgroundColor:'white',borderRadius:'5px',border:'1px solid #9d2927',display:'flex'}}>
                  <FaLock style={{color:'#9d2927',fontSize:'16px',marginTop:'7px'}}/> &nbsp; 
                  <input type="password" value={this.state.password} name="password" placeholder="Password" onChange={this.handleChange} style={{width:'86%',marginLeft:'2%',border:'none',borderRadius:'10px',fontSize:'16px',outline:'none'}} />
                </p>
              </div>
              <div style={{width:'57%',marginTop:'20px'}}>
                <div className="row">
                  <div className="col-md-6" style={{display:'flex'}}>
                    <input type="checkbox"/>
                    <a style={{color:'#9d2927',marginLeft:'5px'}}>Remember me</a>
                  </div>
                  <div className="col-md-6" style={{textAlign:'right',color:'#9d2927'}}>
                    <a>Forgot Password?</a>
                  </div>
                </div>
              </div>
              <div style={{width:'57%',marginTop:'30px'}}>
                <p style={{padding:'5px 10px',backgroundColor:'white',borderRadius:'5px',border:'1px solid #9d2927',display:'flex'}}>
                  <FaKeyboard style={{color:'#9d2927',fontSize:'16px',marginTop:'7px'}}/> &nbsp; 
                  <input value={this.state.ucic} name="ucic" placeholder='UCIC' place onChange={this.handleChange} style={{width:'86%',marginLeft:'2%',border:'none',borderRadius:'10px',fontSize:'16px',outline:'none'}} />
                </p>
              </div>
              <div style={{width:'57%',marginTop:'30px'}}>
                <div className="" style={{padding:'5px 10px',height:'235px',backgroundColor:'white',borderRadius:'5px',border:'1px solid #9d2927'}}>
                    
                  <center>
                    <p>Upload Your File</p>
                    <input value={this.state.trackId} name="trackId" placeholder="trackId" onChange={this.handleChange} style={{border:'none',outline:'none',fontSize:'15px',marginLeft:'20%',width:'32%'}}/>
                    <form id="form-file-upload">
                    <input type="file" id="input-file-upload" multiple={true} />
                    <label id="label-file-upload" htmlFor="input-file-upload">
                      <div>
                        <p>Drag and drop your file here or <span style={{color:'blue'}}>Browser</span></p>
                      </div> 
                    </label>
                    </form>

                    <button className="upload-button" style={{padding:'5px 20px',backgroundColor:'#9d2927',borderRadius:'5px',marginTop:'-20px',color:'white',fontSize:'16px'}}>Upload</button>
                    {/* <p style={{fontSize:'16px', fontWeight:'bold',marginTop:'30px'}}>Upload Your File</p>                    
                    <input value={this.state.trackId} name="trackId" placeholder='Track Id' place onChange={this.handleChange} style={{width:'50%',border:'none',marginLeft:'38%',borderRadius:'10px',fontSize:'15px',outline:'none'}} />
                    <p>Drag & Drop Your File Here of </p> */}
                  </center>
                </div>
              </div>
              <div style={{width:'57%',marginTop:'30px',marginBottom:'7%'}}>
                <center>
                  <button style={{color:'#9d2927',fontWeight:'bold',padding:'10px 30px',backgroundColor:'white',borderRadius:'5px',fontSize:'15px',border:'2px solid #9d2927'}} onClick={() => this.handleSubmit()}>Login</button>
                </center>
              </div>
            </center>
          </div>
        </div>
        {/* <button onClick={() => this.handleSubmit()} style={{fontSize:'30px'}}>Login</button> */}
      </div>
    )
  }
}

export default Login;