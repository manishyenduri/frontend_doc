import React, { Component } from "react";
import Header from '../MainHeader'
import { IoIosArrowDropleft } from "react-icons/io";
import PdfComponent from '../Component/Pdfcomponent'
import { BiSend } from "react-icons/bi";
import {createAuditLog} from '../../store/Admin/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class MissingDoc extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        setValue: 'first',
        setSideTab:'comm',  
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
        <Header {...this.props}/>
        <div className="row" style={{marginTop:'20px',width:'90%',marginLeft:'5%'}}>
            <div className="col-md-2" style={{display:'flex'}}>
                <IoIosArrowDropleft style={{fontSize:'23px',marginRight: '3px',marginTop:'11px',color:'#9b2829'}} onClick={this.handleBack}/>
                <button style={{padding:'10px 7px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Document')}>Mandatory Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Other-Document')}>Other Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Screen-Document')}>Screened Documents</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}} onClick={() => this.handleScreenChng('Classified-Document')}>Classified Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 20px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'#9B1E28',color:'white',border:'2px solid #9B1E28'}}>Missing Document</button>
            </div>
            <div className="col-md-2">
                <button style={{padding:'10px 15px',border:'none',fontSize:'15px',borderRadius:'10px',backgroundColor:'white',color:'#9B1E28',border:'2px solid #9B1E28'}}>Unclassified Document</button>
            </div>
        </div>
        {/* <div className="row" style={{marginTop:'20px',width:'90%',marginLeft:'5%',display:'flex'}}>
                <a style={{width:'16%',borderBottom: this.state.setValue == 'first' ? '2px solid black' : 'none',fontWeight:this.state.setValue === "first" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('first')}>Customer Request Letter</a>

                <a style={{width:'7%',borderBottom: this.state.setValue == 'seven' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "seven" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('seven')}>Invoice</a>
            
                <a style={{width:'12%',borderBottom: this.state.setValue == 'Second' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "Second" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('Second')}>Letter Of Credit</a>
            
                <a style={{width:'11%',borderBottom: this.state.setValue == 'three' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "three" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('three')}>Bill Of Landing</a>
            
                <a style={{width:'13%',borderBottom: this.state.setValue == 'four' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "four" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('four')}>Certificate Of Origin</a>
            
                <a style={{width:'10%',borderBottom: this.state.setValue == 'five' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "five" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('five')}>Insurance</a>
            
                <a style={{width:'14%',borderBottom: this.state.setValue == 'six' ? '2px solid black' : 'none',fontWeight:this.state.setValue == "six" ? 'bold':'300',fontSize:'15px'}} onClick={() => this.handletab('six')}>Packing List</a>
            
            <hr></hr>
        </div> */}
            <div className="row" style={{marginTop:'20px',width:'90%',marginLeft:'5%'}}>
                <div className="col-md-8">
                    {this.state.setValue === "first" &&
                    <div className="row" style={{width:'95%',height:'100%',padding:'20px 20px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
                       <center>
                            <h3 style={{marginTop:'20%'}}>MISSING DOCUMENT</h3>
                            <h5 style={{marginTop:'30px'}}>The following documents are missing:</h5>
                       </center>
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
  export default connect(mapStateToProps, mapDispatchToProps)(MissingDoc)
