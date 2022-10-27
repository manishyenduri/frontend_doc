import React, { Component } from "react";
import Header from '../MainHeader'
import { IoIosArrowDropleft } from "react-icons/io";
import PdfComponent from '../Component/Pdfcomponent'
import { BiSend } from "react-icons/bi";
import ReClassify from './Modal/Reclassify'
import {createAuditLog} from '../../store/Admin/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class Classifieddoc extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        setValue: 'first',
        setSideTab:'comm',
        modalPopup:false ,  
        pageData:'',          
    }
  }

  componentDidUpdate = (prev) => {
    if(prev.createAuditSucc !== this.props.createAuditSucc){
      console.log(this.props.createAuditSucc)
      localStorage.setItem('auditId',this.props.createAuditSucc.data.data.id)
      this.props.history.push('/' + this.state.pageData)
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

  render() {
    console.log(this.state)
    return (
      <div >
                {this.state.modalPopup == true &&
          <ReClassify  handleActivity={this.handleActivity}/>
        }
        <Header {...this.props}/>
        <div className="row" style={{marginTop:'20px',width:'90%',marginLeft:'5%'}}>
            <div className="col-md-2" style={{display:'flex'}}>
                <IoIosArrowDropleft style={{fontSize:'23px',marginRight: '3px',marginTop:'11px',color:'#9b2829'}} onClick={this.handleBack}/>
                <button style={{padding:'10px 7px',border:'none',borderRadius:'10px',fontSize:'15px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Document')}>Mandatory Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',borderRadius:'10px',fontSize:'15px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Other-Document')}>Other Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',borderRadius:'10px',fontSize:'15px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Screen-Document')}>Screened Documents</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',borderRadius:'10px',fontSize:'15px',backgroundColor:'#9B1E28',color:'white',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Classified-Document')}>Classified Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',borderRadius:'10px',fontSize:'15px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Missing-Document')}>Missing Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 15px',border:'none',borderRadius:'10px',fontSize:'15px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}}>Unclassified Document</button>
            </div>
        </div>
        <div className="row" style={{marginTop:'20px',width:'90%',marginLeft:'5%',display:'flex'}}>
                <a style={{width:'16%',borderBottom: this.state.setValue == 'first' ? '2px solid black' : 'none',fontWeight:this.state.setValue === "first" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('first')}>Customer Request Letter</a>

                <a style={{width:'7%',borderBottom: this.state.setValue == 'seven' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "seven" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('seven')}>Invoice</a>
            
                <a style={{width:'12%',borderBottom: this.state.setValue == 'Second' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "Second" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('Second')}>Letter Of Credit</a>
            
                <a style={{width:'11%',borderBottom: this.state.setValue == 'three' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "three" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('three')}>Bill Of Landing</a>
            
                <a style={{width:'13%',borderBottom: this.state.setValue == 'four' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "four" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('four')}>Certificate Of Origin</a>
            
                <a style={{width:'10%',borderBottom: this.state.setValue == 'five' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "five" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('five')}>Insurance</a>
            
                <a style={{width:'14%',borderBottom: this.state.setValue == 'six' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "six" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('six')}>Packing List</a>
            
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
                            <textarea type="text" value={this.state.comment} onChange={this.handleChange} name="comment" style={{marginTop:'20px',outline:'none',height:'373px',width:'100%',border:'none'}} placeholder="write something ....."/>
                            <BiSend style={{marginLeft:'96%',fontSize:'26px',color:'#9B1E28'}}/>    
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        createAuditSucc: state.Admin.createAuditdata,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        createAuditLog
      },
      dispatch,
    )
  }
  
  // export default Login;
  export default connect(mapStateToProps, mapDispatchToProps)(Classifieddoc)
