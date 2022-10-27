import React, { Component } from "react";
import Header from '../MainHeader'
import { IoIosArrowDropleft } from "react-icons/io";
import PdfComponent from '../Component/Pdfcomponent'
import { BiSend ,BiRadioCircleMarked } from "react-icons/bi";
import { getByDpd , getByUcic, getByCpdd,createAuditLog,createAuditLog2, getAllAuditog} from '../../store/Admin/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import back from '../../assets/Group 471.png'
import green from '../../assets/Radio button green.svg'
import red from '../../assets/Radio Button Red.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip';


class Trade extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        setValue: 'first',
        setSideTab:'comm',
        dpdFlag: '',
        femaFlag:'', 
        redirValue:'', 
        dpdmsg:'',  
        femamsg:'',  
        cpddmsg:'',  
    }
  }

  componentDidMount() {
    this.props.getByDpd(localStorage.getItem('ucic'))
    this.props.getByUcic(localStorage.getItem('ucic'))
    this.props.getByCpdd(localStorage.getItem('ucic'))
    this.props.getAllAuditog()
    
  } 

  componentDidUpdate = (prev) => {
    
    if(prev.DpdData !== this.props.DpdData){
        console.log(this.props.DpdData)
        this.setState({
          dpdFlag:this.props.DpdData.result.flag
        })
    }

    if(prev.FemaData !== this.props.FemaData){
      console.log(this.props.FemaData)
      this.setState({
          femaFlag: this.props.FemaData.data.flag,
      })
    }

    if(prev.CpddData !== this.props.CpddData){
      console.log(this.props.CpddData)
      this.setState({
        cpddFlag:this.props.CpddData.result.flag
      })
    }
    if(prev.createAuditSucc !== this.props.createAuditSucc){
      console.log(this.props.createAuditSucc)
      localStorage.setItem('auditId',this.props.createAuditSucc.data.data.id)
      this.props.history.push('/' + this.state.redirValue)
    }
    if(prev.createAudit2Succ !== this.props.createAudit2Succ){
      console.log(this.props.createAudit2Succ)
      toast.success("Action updated succefully")
    }
    if(prev.AllAuditData !== this.props.AllAuditData){
      console.log(this.props.AllAuditData)
      const AllList = this.props.AllAuditData.data.data
      const dpdData=[]
      const femaData=[]
      const cpddData=[]
      console.log(AllList)
      for(var i=0;i<AllList.length;i++){
        if(AllList[i].checkpoint == "DPD"){
          if(AllList[i].comments.length !== 0){
            dpdData.push(AllList[i])
          }
        }
        if(AllList[i].checkpoint == "FEMA"){
          if(AllList[i].comments.length !== 0){
            femaData.push(AllList[i])
          }
        }
        if(AllList[i].checkpoint == "CPDD"){
          if(AllList[i].comments.length !== 0){
            cpddData.push(AllList[i])
          }
        }
      }
      console.log(dpdData)
      console.log(femaData)
      console.log(cpddData)
      const dpd= dpdData[dpdData.length - 1]
      const fema= femaData[femaData.length - 1]
      const cpdd= cpddData[cpddData.length - 1]
      this.setState({
        dpdmsg:dpdData.length !== 0 ? dpd.comments[dpd.comments.length - 1].comment : undefined,
        femamsg: femaData.length !== 0 ?fema.comments[fema.comments.length - 1].comment :undefined,
        cpddmsg:cpddData.length !== 0 ?  cpdd.comments[cpdd.comments.length - 1].comment : undefined,
      })
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

  hanglePageRed=(data)=>{
    console.log(data)
    if(data === 'Dpd'){
      this.props.createAuditLog('DPD','underscrutiny')
      this.setState({
        createAudit:true,
        redirValue:data
      })
    }
    if(data === 'Fema'){
      this.props.createAuditLog('FEMA','underscrutiny')
      this.setState({
        createAudit:true,
        redirValue:data
      })
    }
    if(data === 'Cpdd'){
      this.props.createAuditLog('CPDD','underscrutiny')
      this.setState({
        createAudit:true,
        redirValue:data
      })
    }
    // this.props.history.push('/' + data)
  }
  handleStatus=(data)=>{
    const value= 'DPD'+','+'FEMA'+','+'CPDD'
    console.log(value) 
    if(data == 'accepted'){
      this.props.createAuditLog2(value,'accepted')
    }else{
      this.props.createAuditLog2(value,'declined')      
    }
  }

  render() {
    console.log(localStorage)
    console.log(this.state)
    let topHeader='';
    if(this.state.dpdFlag === true ){
      if(this.state.femaFlag === true ){
        if(this.state.cpddFlag === true){
          topHeader ='Compliant'
          localStorage.setItem('topHeader',topHeader)
        }else{
          topHeader ='Discrepant'
          localStorage.setItem('topHeader',topHeader)
        }
      }else{
        topHeader ='Discrepant'
        localStorage.setItem('topHeader',topHeader)
      }
    }else{
      topHeader ='Discrepant'
      localStorage.setItem('topHeader',topHeader)
    }

    console.log(topHeader)
    return (
      <div >
      <ToastContainer style={{fontSize:'15px'}}/>
      <ReactTooltip />
        <Header {...this.props}/>
        <div className="row" style={{marginTop:'5%',width:'70%',marginLeft:'15%'}}>
            <div className="col-md-6" style={{display:'flex'}}>
              <a onClick={this.handleBack}><img src={back} style={{width:'77%',marginTop:'14px'}}/></a>
                {/* <IoIosArrowDropleft style={{fontSize:'30px',marginRight: '3px',marginTop:'11px',color:'#9b2829'}} onClick={this.handleBack}/> */}
                <button style={{padding:'10px 9px',marginLeft:'5px',color:'black',border:'none',outline:'none',background:'white',fontSize:'23px',fontWeight:'bold',fontFamily:'Lato'}}>Details</button>
            </div>
            <div className="col-md-6" style={{display:'flex'}}>
                <p style={{padding:'11px 15px',border:'1px solid #8A8686',borderRadius:'15px',marginLeft:'43%'}}>
                        <span style={{color:'#9B1E28',fontWeight:'bold'}}>Customer Name:</span><span> &nbsp; &nbsp;{localStorage.getItem('Customer_name')}</span>
                  <br/><span style={{color:'#9B1E28',fontWeight:'bold'}}>UCIC No.</span> <span style={{fontWeight:'bold'}}>{localStorage.getItem('ucic')} </span>&nbsp; &nbsp;
                <span style={{color:localStorage.getItem('topHeader') === 'Discrepant' ? '#E82020' :'#7bc398',backgroundColor:localStorage.getItem('topHeader') === 'Discrepant' ?'#FFB1B1'  : '#d0f9ea',padding:'5px 10px',borderRadius:'10px'}}>{localStorage.getItem('topHeader')}</span>
                </p>
            </div>
        </div>

        <div className="row" style={{width:'70%',backgroundColor:'#f9f9f9',marginLeft:'15%',marginTop:'30px',height:'400px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          <div className="row" style={{width:'90%',marginLeft:'5%',marginTop:'30px',height:'0px'}}>
            <div className="col-md-4" style={{fontWeight:'bold',fontSize:'15px'}}>
              <center>
                <p style={{fontSize:'17px',fontFamily: 'Seoge'}}>Checkpoint</p>
              </center>
            </div>
            <div className="col-md-4" style={{fontWeight:'bold',fontSize:'15px'}}>
              <center>
                <p style={{fontSize:'17px',fontFamily: 'Seoge'}}>Status</p>
              </center>
            </div>
            <div className="col-md-4" style={{fontWeight:'bold',fontSize:'15px'}}>
              <center>
                <p style={{fontSize:'17px',fontFamily: 'Seoge'}}>Remarks</p>
              </center>
            </div>
          </div>
          <div style={{width:'90%',marginLeft:'5%',height:'181px'}}>
            <div className="row" id="selectRow" style={{border:'1px solid grey',backgroundColor:'white',height:'60px',marginTop:'-50px'}}>
              <div className="col-md-4" onClick={() => this.hanglePageRed('Dpd')} style={{cursor:'pointer'}}>
                <center><p style={{marginTop:'17px',fontFamily:'Maven',fontWeight:'bold'}}>DPD</p></center>
              </div>
              <div className="col-md-4">
                <center>
                {this.state.dpdFlag === true ?
                  <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                :
                  <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                }
                </center>
                {/* <center><BiRadioCircleMarked style={{fontSize:'30px',color:this.state.dpdFlag === true ?'#1d5607' :'#d73929',marginTop:'17px'}}/></center> */}
              </div>
              <div className="col-md-4">
                <center><button data-tip={this.state.dpdmsg}  style={{padding:'3px 25px',marginTop:'12px',backgroundColor:'#fcf5f6',color:'#b45058',border:'1px solid #b45058',borderRadius:'5px',fontSize:'15px'}}> View </button></center>
              </div>
            </div>
            <div className="row" id="selectRow" style={{border:'1px solid grey',backgroundColor:'white',height:'60px'}}>
              <div className="col-md-4" onClick={() => this.hanglePageRed('Fema')} style={{cursor:'pointer'}}>
                <center><p style={{marginTop:'17px',fontFamily:'Maven',fontWeight:'bold'}}>FEMA</p></center>
              </div>
              <div className="col-md-4">
              <center>
                {this.state.femaFlag === true ?
                  <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                :
                  <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                }
                </center>
                {/* <center><BiRadioCircleMarked style={{fontSize:'30px',color:this.state.femaFlag == true ? '#1d5607' : '#d73929',marginTop:'17px'}}/></center> */}
              </div>
              <div className="col-md-4">
                <center><button data-tip={this.state.femamsg} style={{padding:'3px 25px',marginTop:'12px',backgroundColor:'#fcf5f6',color:'#b45058',border:'1px solid #b45058',borderRadius:'5px',fontSize:'15px'}}> View </button></center>
              </div>
            </div>
            <div className="row" id="selectRow" style={{border:'1px solid grey',backgroundColor:'white',height:'60px'}}>
              <div className="col-md-4" onClick={() => this.hanglePageRed('Cpdd')} style={{cursor:'pointer'}} >
                <center><p style={{marginTop:'17px',fontFamily:'Maven',fontWeight:'bold'}}>CPDD</p></center>
              </div>
              <div className="col-md-4">
              <center>
                {this.state.cpddFlag === true ?
                  <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                :
                  <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                }
                </center>
                {/* <center><BiRadioCircleMarked style={{fontSize:'30px',color:this.state.cpddFlag === true ?'#1d5607' : '#d73929',marginTop:'17px'}}/></center> */}
              </div>
              <div className="col-md-4">
                <center><button data-tip={this.state.cpddmsg} style={{padding:'3px 25px',marginTop:'12px',backgroundColor:'#fcf5f6',color:'#b45058',border:'1px solid #b45058',borderRadius:'5px',fontSize:'15px'}}> View </button></center>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop:'30px',width:'96%'}}>
          <center>
            <button id="buttonHover" style={{color:'white',padding:'8px 25px',backgroundColor:'#2a750e',border:'2px solid #2a750e',fontSize:'15px',borderRadius:'5px'}} onClick={() => this.handleStatus('accepted')}>Accept</button>
            <button id="buttonHover" style={{color:'#d73929',padding:'8px 25px',backgroundColor:'white',border:'2px solid #d73929',fontSize:'15px',borderRadius:'5px',marginLeft:'30px'}} onClick={() => this.handleStatus('declined')}>Decline</button>
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
      FemaData: state.Admin.GetFemaData.data,
      CpddData: state.Admin.GetCpddData.data,
      createAuditSucc: state.Admin.createAuditdata,
      createAudit2Succ: state.Admin.createAuditdata2,
      AllAuditData: state.Admin.getAllAudit ,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getByDpd,
      getByUcic,
      getByCpdd,
      createAuditLog,
      createAuditLog2,
      getAllAuditog
    },
    dispatch,
  )
}

// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Trade)

