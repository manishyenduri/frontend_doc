import React, { Component } from "react";
import Header from '../MainHeader'
import { IoIosArrowDropleft } from "react-icons/io";
import PdfComponent from '../Component/Pdfcomponent'
import Sliders from '../Crous'
import axios from 'axios'
import { BiSend } from "react-icons/bi";
import { getByDpd , getAllAuditog, addCommentApi ,updateAction} from '../../store/Admin/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import back from '../../assets/Group 471.png'
import send from '../../assets/noun-send-5161486.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Dpd extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        setValue: 'first',
        setSideTab:'comm',
        data:'',
        auditData:[],
        createAudit: false,
        itemCode:'',
        statusT: false,
        allComment:''
    }
  }

  
  componentDidMount() {
    console.log(localStorage)
    this.props.getByDpd(localStorage.getItem('ucic'))
    this.props.getAllAuditog()
    
  }  


  componentDidUpdate = (prev) => {
    
    if(prev.DpdData !== this.props.DpdData){
        console.log(this.props.DpdData)
        this.setState({
          data:this.props.DpdData.result.data
        })
    }
    if(prev.DpdData_err !== this.props.DpdData_err){
      this.setState({
        data:[]
      })
    }
    if(prev.AllAuditData !== this.props.AllAuditData){
      console.log(this.props.AllAuditData)
      this.setState({
        auditData:this.props.AllAuditData.data.data
      })
    }
    if(prev.addCommentSucc !== this.props.addCommentSucc){
      this.setState({
        comment:''
      })
      toast.success("Your Comment Added Successfully")
    }
    if(prev.ActionUpdateSucc !== this.props.ActionUpdateSucc){
      toast.success("Action updated succefully")
      this.props.getAllAuditog()
    }
  }

  handleBack=()=>{
    this.props.history.push('./Trade')
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

  handleSendComm=()=>{
    const body={
      auditid: localStorage.getItem('auditId'),
      comment: this.state.comment
    }
    
    this.props.addCommentApi(body)
  }

  handleScreenChng=(data)=>{
    console.log(data)
    this.props.history.push('/' + data)
  }

  handleStatus=(data)=>{
    const body={
      id: localStorage.getItem('auditId'),
      action: data
    }
    this.props.updateAction(body)
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
        <Header {...this.props}/>
        <div className="row" style={{marginTop:'2%',width:'82%',marginLeft:'9%'}}>
            <div className="col-md-6" style={{display:'flex'}}>
              <a onClick={this.handleBack}><img src={back} style={{width:'77%',marginTop:'14px'}}/></a>
                {/* <IoIosArrowDropleft style={{fontSize:'30px',marginRight: '3px',marginTop:'11px',color:'#9b2829'}} onClick={this.handleBack}/> */}
                <button style={{padding:'10px 9px',marginLeft:'5px',color:'black',border:'none',outline:'none',background:'white',fontSize:'23px',fontWeight:'bold',fontFamily:'Lato'}}>DPD</button>
            </div>
            <div className="col-md-6" style={{display:'flex'}}>
                <p style={{padding:'11px 15px',border:'1px solid #8A8686',borderRadius:'15px',marginLeft:'51%'}}>UCIC No. <span style={{fontWeight:'bold'}}>{localStorage.getItem('ucic')} </span> &nbsp; &nbsp;
                <span style={{color:localStorage.getItem('topHeader') === 'Discrepant' ? '#E82020' :'#7bc398',backgroundColor:localStorage.getItem('topHeader') === 'Discrepant' ?'#FFB1B1'  : '#d0f9ea',padding:'5px 10px',borderRadius:'10px'}}>{localStorage.getItem('topHeader')}</span>
                </p>
            </div>
        </div>
        <div style={{marginTop:'30px',backgroundColor:'#f9f9f9',padding:'10px 20px',width:'80%',marginLeft:'10%',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius:'10px'}}>
          <div className="row" style={{width:'96%',backgroundColor:'#d65054',marginLeft:'2%',marginTop:'20px',height:'233px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
            
            <div>
            <Sliders  {...this.state}/>
            </div>
          </div>
          <div className="row" style={{width:'96%',backgroundColor:'white',marginLeft:'2%',marginTop:'30px',marginBottom:'20px',height:this.state.setSideTab == "comm" ? '220px' : '400px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
            <div ClassName="row" style={{display:'flex',marginTop:'20px'}}>
                              <div className="col-md-2">
                                  <a onClick={() => this.handleSideTab('comm')} style={{borderBottom:this.state.setSideTab === "comm" ? '2px solid #9B1E28' : 'none',color: this.state.setSideTab =="comm" ? '#9B1E28' : 'black', fontWeight: 'bold',cursor:'pointer'}}>+ Add Comment</a>
                              </div>
                              <div className="col-md-2">
                                  <a onClick={() => this.handleSideTab('audit')} style={{borderBottom:this.state.setSideTab !== "comm" ? '2px solid #9B1E28' : 'none',color: this.state.setSideTab !=="comm" ? '#9B1E28' : 'black', fontWeight:'bold',cursor:'pointer'}}>Audit Logs</a>
                              </div>
                          </div>
                          {this.state.setSideTab == "comm" ?
                          <div>
                              <textarea type="text" value={this.state.comment} onChange={this.handleChange} name="comment" style={{marginTop:'20px',outline:'none',height:'100px',width:'96%',marginLeft:'2%',border:'none',fontSize:'15px'}} placeholder="write something ....."/>
                              <a style={{marginLeft:'90%',fontSize:'18px',color:'#9B1E28'}} onClick={this.handleSendComm}>Submit &nbsp;<img src={send} /></a>   
                          </div>
                          :
                          <div >
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
                                {item.action === 'underscrutiny' && 
                                  <center><label style={{padding:'5px 10px',backgroundColor:'#F5B169',color:'#E77802'}}>{item.action}</label></center>
                                }
                                {item.action === 'declined' && 
                                  <center><label style={{padding:'5px 10px',backgroundColor:'#feb1b1',color:'#ed4444'}}>{item.action}</label></center>
                                }
                                {item.action === 'Approve' && 
                                  <center><label style={{padding:'5px 10px',backgroundColor:'#d0f9ea',color:'#56c29b'}}>{item.action}</label></center>
                                }
                                {item.action === 'Re-classify' && 
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
                                  {/* <center><label style={{padding:'5px 10px',backgroundColor:'#fcf5f6',color:'#b24c54'}} onClick={() => this.handleView(item.id)}>View</label></center>
                                  {this.state.itemCode === item.id &&
                                  < div >
                                  {this.state.statusT === true &&
                                  <ul style={{listStyle:'none',backgroundColor:'grey'}}>
                                    {this.state.allComment !== '' && this.state.allComment.map((val) =>(
                                      <li>{val.comment}</li>
                                    ))}
                                  </ul>
                                  }
                                  </div>
                                  } */}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                          }
          </div>
        </div>
        <div className="row" style={{marginTop:'30px',width:'96%'}}>
          <center>
            <button id="buttonHover" style={{color:'white',padding:'8px 25px',backgroundColor:'#2a750e',border:'2px solid #2a750e',fontSize:'15px',borderRadius:'5px'}} onClick={() =>this.handleStatus('accepted')}>Accept</button>
            <button id="buttonHover" style={{color:'#d73929',padding:'8px 25px',backgroundColor:'white',border:'2px solid #d73929',fontSize:'15px',borderRadius:'5px',marginLeft:'30px'}} onClick={() =>this.handleStatus('declined')}>Decline</button>
          </center>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      DpdData: state.Admin.GetDpdData.data,
      DpdData_err: state.Admin.GetDpdDataErr, 
      AllAuditData: state.Admin.getAllAudit,
      addCommentSucc: state.Admin.addCommentData  ,
      ActionUpdateSucc: state.Admin.updateActionData
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getByDpd,
      getAllAuditog,
      addCommentApi,
      updateAction,
    },
    dispatch,
  )
}

// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Dpd)

