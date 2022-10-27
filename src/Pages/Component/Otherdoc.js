import React, { Component } from "react";
import Header from '../MainHeader'
import { IoIosArrowDropleft } from "react-icons/io";
import PdfComponent from '../Component/Pdfcomponent'
import { BiSend } from "react-icons/bi";
import ReClassify from './Modal/Reclassify'
import {createAuditLog, getAllAuditog,updateAction,addCommentApi} from '../../store/Admin/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import send from '../../assets/noun-send-5161486.png'
import axios from 'axios'


class Otherdoc extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        setValue: 'first',
        setSideTab:'comm',
        modalPopup:false ,  
        pageData:'',  
        auditData:[], 
        allComment:''      
    }
  }
  componentDidMount() {
    this.props.getAllAuditog()    
  } 

  componentDidUpdate = (prev) => {
    
    if(prev.AllAuditData !== this.props.AllAuditData){
      console.log(this.props.AllAuditData)
      this.setState({
        auditData:this.props.AllAuditData.data.data
      })
    }
    if(prev.createAuditSucc !== this.props.createAuditSucc){
      console.log(this.props.createAuditSucc)
      localStorage.setItem('auditId',this.props.createAuditSucc.data.data.id)
      this.props.history.push('/' + this.state.pageData)
    }
    if(prev.ActionUpdateSucc !== this.props.ActionUpdateSucc){
      toast.success("Action updated succefully")
      this.props.getAllAuditog()
    }
    if(prev.addCommentSucc !== this.props.addCommentSucc){
      this.setState({
        comment:''
      })
      toast.success("Your Comment Added Successfully")
    }
  }

  handleActivity=()=>{
    this.setState({
      modalPopup: !this.state.modalPopup
    })
  }
  handleBack=()=>{
    this.props.history.push('./Dashboard')
  }

  handletab=(data)=>{
    this.setState({
        setValue:data
    })
  }

  handleSideTab=(data)=>{
    this.setState({
        setSideTab: data,
    })
  }

  handleChange=(e) => {
    const name = e.target.name
    this.setState({
        [name]: e.target.value
    })
  }

  handleScreenChng=(data)=>{
    this.props.createAuditLog(data,'underscrutiny')
    this.setState({
        pageData:data
    })
  }

  handleStatus=(data)=>{
    const body={
      id: localStorage.getItem('auditId'),
      action: data
    }
    this.props.updateAction(body)
  }

  handleSendComm=()=>{
    const body={
      auditid: localStorage.getItem('auditId'),
      comment: this.state.comment
    }
    
    this.props.addCommentApi(body)
  }

  handleView=(data) => {
    console.log(data)
    axios.get('http://159.65.157.216:5000/api/auditlog/getcomments?auditid='+data)
    .then((res) => {
      console.log(res)
      this.setState({
        allComment:res.data.data
      })
  }).catch((err) => (
      console.log(err)
    ))
    this.setState({
      itemCode:data,
      statusT:!this.state.statusT,
    })
  }


  render() {
    console.log(this.state)
    return (
      <div >
      <ToastContainer style={{fontSize:'15px'}}/>
        {this.state.modalPopup == true &&
          <ReClassify  handleActivity={this.handleActivity}/>
        }
        <Header {...this.props}/>
        <div className="row" style={{marginTop:'20px',width:'90%',marginLeft:'5%'}}>
            <div className="col-md-2" style={{display:'flex'}}>
                <IoIosArrowDropleft style={{fontSize:'23px',marginRight: '3px',marginTop:'11px',color:'#9b2829'}} onClick={this.handleBack}/>
                <button style={{padding:'10px 7px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Document')}>Mandatory Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'#9B1E28',color:'white',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Other-Document')}>Other Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Screen-Document')}>Screened Documents</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Classified-Document')}>Classified Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Missing-Document')}>Missing Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 15px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}}>Unclassified Document</button>
            </div>
        </div>
        {this.state.setSideTab == "comm" ?
        <>
        <div className="row" style={{marginTop:'20px',width:'90%',marginLeft:'5%',display:'flex'}}>
                <a style={{width:'11%',borderBottom: this.state.setValue == 'first' ? '2px solid black' : 'none',fontWeight:this.state.setValue === "first" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('first')}>Letter Of Credit</a>
            
                <a style={{width:'10%',borderBottom: this.state.setValue == 'Second' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "Second" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('Second')}>Bill Of Lading</a>
            
                <a style={{width:'13%',borderBottom: this.state.setValue == 'three' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "three" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('three')}>Certificate Of Origin</a>
            
                <a style={{width:'10%',borderBottom: this.state.setValue == 'four' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "four" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('four')}>Insurance</a>
            
                <a style={{width:'10%',borderBottom: this.state.setValue == 'five' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "five" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('five')}>Packing List</a>
            
                <a style={{width:'14%',borderBottom: this.state.setValue == 'six' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "six" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('six')}>Import Bill Lodgement</a>
            
            <hr></hr>
        </div>
            <div className="row" style={{marginTop:'20px',width:'90%',marginLeft:'5%'}}>
                <div className="col-md-8">
                    {this.state.setValue === "first" &&
                    <div className="row" style={{width:'95%',padding:'20px 20px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
                        <div className="col-md-6" >
                            <PdfComponent/>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <center>
                                    <label style={{fontWeight:'bold',fontSize:'23px'}}>Document details</label>
                                </center>
                                <div className="row" style={{marginTop:'20px',marginLeft:'2%'}}>
                                    <div className="col-md-5">
                                        <label style={{fontWeight:'bold'}}>Document Name</label>
                                    </div>
                                    <div className="col-md-7">
                                        <p style={{fontSize:'15px'}}> Customer request letter</p>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:'8px',marginLeft:'2%'}}>
                                    <div className="col-md-5">
                                        <label style={{fontWeight:'bold'}}>Document Type</label>
                                    </div>
                                    <div className="col-md-7">
                                        <p style={{fontSize:'15px'}}> PDF</p>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:'8px',marginLeft:'2%'}}>
                                    <div className="col-md-5">
                                        <label style={{fontWeight:'bold'}}>Version</label>
                                    </div>
                                    <div className="col-md-7">
                                        <p style={{fontSize:'15px'}}> Latest version</p>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:'8px',marginLeft:'2%'}}>
                                    <div className="col-md-5">
                                        <label style={{fontWeight:'bold'}}> Last modified</label>
                                    </div>
                                    <div className="col-md-7">
                                        <p style={{fontSize:'15px'}}> 30-09-2021</p>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:'8px',marginLeft:'2%'}}>
                                    <div className="col-md-5">
                                        <label style={{fontWeight:'bold'}}> Created on</label>
                                    </div>
                                    <div className="col-md-7">
                                        <p style={{fontSize:'15px'}}> 10-07-2019</p>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:'8px',marginLeft:'2%'}}>
                                    <div className="col-md-5">
                                        <label style={{fontWeight:'bold'}}> Created by</label>
                                    </div>
                                    <div className="col-md-7">
                                        <p style={{fontSize:'15px'}}> Simplyfi</p>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:'30px',marginLeft:'2%'}}>
                                    <div className="col-md-5">
                                        <button style={{padding:'10px 20px',border:'none',borderRadius:'10px',backgroundColor:'#21740D',color:'white',fontSize:'15px'}}>Approve</button>
                                    </div>
                                    <div className="col-md-7">
                                        <button style={{padding:'10px 20px',border:'1px solid red ',borderRadius:'10px',backgroundColor:'white',color:'red',fontSize:'15px'}} onClick={this.handleActivity}>re-classify</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className="col-md-4">
                    <div style={{width:'100%',height:'100%',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',padding:'20px 20px'}}>
                        <div ClassName="row" style={{display:'flex'}}>
                            <div className="col-md-6">
                                <a onClick={() => this.handleSideTab('comm')} style={{borderBottom:this.state.setSideTab === "comm" ? '2px solid #9B1E28' : 'none',color: this.state.setSideTab =="comm" ? '#9B1E28' : 'black', fontWeight: this.state.setSideTab =="comm" ? 'bold' : '300',cursor:'pointer'}}>+ Add Comment</a>
                            </div>
                            <div className="col-md-6">
                                <a onClick={() => this.handleSideTab('audit')} style={{borderBottom:this.state.setSideTab !== "comm" ? '2px solid #9B1E28' : 'none',color: this.state.setSideTab !=="comm" ? '#9B1E28' : 'black', fontWeight: this.state.setSideTab !=="comm" ? 'bold' : '300',cursor:'pointer'}}>Audit Logs</a>
                            </div>
                        </div>
                        {this.state.setSideTab == "comm" &&
                        <div>
                        <textarea type="text" value={this.state.comment} onChange={this.handleChange} name="comment" style={{fontSize:'15px',marginTop:'20px',outline:'none',height:'373px',width:'100%',border:'none'}} placeholder="write something ....."/>
                        <a style={{marginLeft:'78%',fontSize:'18px',color:'#9B1E28'}} onClick={this.handleSendComm}>Submit &nbsp;<img src={send} /></a>     
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
        :
        <div className="row" style={{marginTop:'20px',width:'90%',marginLeft:'5%'}}>
                
                <div className="col-md-12">
                    <div style={{width:'100%',height:'400px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',padding:'20px 20px'}}>
                        <div ClassName="row" style={{display:'flex'}}>
                            <div className="col-md-6">
                                <a onClick={() => this.handleSideTab('comm')} style={{borderBottom:this.state.setSideTab === "comm" ? '2px solid #9B1E28' : 'none',color: this.state.setSideTab =="comm" ? '#9B1E28' : 'black', fontWeight: this.state.setSideTab =="comm" ? 'bold' : '300',cursor:'pointer'}}>+ Add Comment</a>
                            </div>
                            <div className="col-md-6">
                                <a onClick={() => this.handleSideTab('audit')} style={{borderBottom:this.state.setSideTab !== "comm" ? '2px solid #9B1E28' : 'none',color: this.state.setSideTab !=="comm" ? '#9B1E28' : 'black', fontWeight: this.state.setSideTab !=="comm" ? 'bold' : '300',cursor:'pointer'}}>Audit Logs</a>
                            </div>
                        </div>
                        <div style={{height:'183px'}}>
                    <div className="row" style={{backgroundColor:'#eb7073',marginTop:'10px'}}>
                      <div className="col-md-2">
                        <center><label style={{marginTop:'5px',color:'white'}}>User name</label></center>
                      </div>
                      <div className="col-md-2">
                        <center><label style={{marginTop:'5px',color:'white'}}>UCIC No</label></center>
                      </div>
                      <div className="col-md-2">
                        <center><label style={{marginTop:'5px',color:'white'}}>Action</label></center>
                      </div>
                      <div className="col-md-2">
                        <center><label style={{marginTop:'5px',color:'white'}}>Checkpoint</label></center>
                      </div>
                      <div className="col-md-2">
                        <center><label style={{marginTop:'5px',color:'white'}}>Timestamp</label></center>
                      </div>
                      <div className="col-md-2">
                        <center><label style={{marginTop:'5px',color:'white'}}>Remarks</label></center>
                      </div>
                    </div>
                    <div id="overflow" style={{height:'300px',overflow:'scroll',width:'101%'}}>
                    {this.state.auditData.length !== 0 && this.state.auditData.map((item) =>
                        <div className="row" style={{marginTop:'10px'}}>
                          <div className="col-md-2">
                            <center><label>{item.user_name}</label></center>
                          </div>
                          <div className="col-md-2">
                            <center><label>{item.ucic}</label></center>
                          </div>
                          <div className="col-md-2">
                          {item.action === 'accepted' && 
                            <center><label style={{padding:'5px 10px',backgroundColor:'#d0f9ea',color:'#56c29b'}}>{item.action}</label></center>
                          }
                          {item.action === 'Approve' && 
                            <center><label style={{padding:'5px 10px',backgroundColor:'#d0f9ea',color:'#56c29b'}}>{item.action}</label></center>
                          }
                          {item.action === 'Re-classify' && 
                            <center><label style={{padding:'5px 10px',backgroundColor:'#feb1b1',color:'#ed4444'}}>{item.action}</label></center>
                          }
                          {item.action === 'underscrutiny' && 
                            <center><label style={{padding:'5px 10px',backgroundColor:'#F5B169',color:'#E77802'}}>{item.action}</label></center>
                          }
                          {item.action === 'declined' && 
                            <center><label style={{padding:'5px 10px',backgroundColor:'#feb1b1',color:'#ed4444'}}>{item.action}</label></center>
                          }
                          </div>
                          <div className="col-md-2">
                              <center><label>{item.checkpoint}</label></center>
                          </div>
                          <div className="col-md-2">
                            <center><label>{item.timestamp}</label></center>
                          </div>
                          <div className="col-md-2">
                            <div class="dropdown">
                                  <button onClick={() => this.handleView(item.id)} style={{backgroundColor:'#fcf5f6',color:'#b24c54',fontSize:'15px',marginLeft:'35%',outline:'none'}} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    View
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {this.state.allComment !== '' && this.state.allComment.map((val) =>(
                                    <a class="dropdown-item" href="#">{val.comment}</a>
                                    ))}
                                  </div>
                                </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div style={{marginTop:'30px'}}>
                        <button style={{padding:'10px 10px',backgroundColor:'#2a750e',border:'none',borderRadius:'7px',color:'white',fontWeight:'bold',marginLeft:'30px',fontSize:'15px'}} onClick={() =>this.handleStatus('Approve')}>Approve</button>
                        <button style={{padding:'10px 10px',backgroundColor:'white',border:'2px solid #9b2829',borderRadius:'7px',color:'#9b2829',fontWeight:'bold',marginLeft:'30px',fontSize:'15px'}} onClick={() =>this.handleStatus('Re-classify')}>Re-Classify</button>
                    </div>
                  </div>
                    </div>
                </div>
            </div>
        }
        </div>
    )
  }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        AllAuditData: state.Admin.getAllAudit,
        createAuditSucc: state.Admin.createAuditdata,
        ActionUpdateSucc: state.Admin.updateActionData,
        addCommentSucc: state.Admin.addCommentData ,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        createAuditLog,
        getAllAuditog,
        updateAction,
        addCommentApi
      },
      dispatch,
    )
  }
  
  // export default Login;
  export default connect(mapStateToProps, mapDispatchToProps)(Otherdoc)
