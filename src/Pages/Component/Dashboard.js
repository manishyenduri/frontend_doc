import React, { Component } from "react";
import Header from '../MainHeader'
import blockOne from '../../assets/Group 486.svg'
import blockTwo from '../../assets/Group 488.svg'
import blockThree from '../../assets/Group 487.svg'
import blockFour from '../../assets/noun-checklist-5210926.svg'
import {getByDpd, getByCpdd,getByUcic,createAuditLog} from '../../store/Admin/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import back from '../../assets/Group 471.png'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        data:''
      
    }
  }

  componentDidMount(){
    this.props.getByDpd(localStorage.getItem('ucic'))
    this.props.getByUcic(localStorage.getItem('ucic'))
    this.props.getByCpdd(localStorage.getItem('ucic'))
  }

  componentDidUpdate(prev){
    if(prev.DpdData !== this.props.DpdData){
        console.log(this.props.DpdData.result)
        if(this.props.DpdData.result.data.length !== 0){
        this.setState({
          data:this.props.DpdData.result.data.customer_name
        })

        localStorage.setItem('Customer_name',this.state.data)
        }
    }
    if(prev.FemaData !== this.props.FemaData){
        console.log(this.props.FemaData)
        if(this.props.FemaData.data !== undefined){
        this.setState({
            data: this.props.FemaData.data.userData.customer_name
        })

        localStorage.setItem('Customer_name',this.state.data)
        }
    }
    if(prev.CpddData !== this.props.CpddData){
            
        console.log(this.props.CpddData)
        if(this.props.CpddData.result.data !== undefined){
        this.setState({
          data:this.props.CpddData.result.data.customer_name

        })

    localStorage.setItem('Customer_name',this.state.data)
    }
    }
    if(prev.createAuditSucc !== this.props.createAuditSucc){
        console.log(this.props.createAuditSucc)
        localStorage.setItem('auditId',this.props.createAuditSucc.data.data.id)
        this.props.history.push('Document')
      }
  }

  handleDocverify=()=>{
    console.log(this.props)
    this.props.createAuditLog('Mandatory','underscrutiny')
  }

  handleTrade=()=>{    
    console.log(this.props)
    this.props.history.push('Trade')    
  }

  handleBack=()=>{
    this.props.history.push('/')
  }


  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div >
        <Header {...this.props}/>
        <div ClassName="container" style={{width:'80%',marginLeft:'10%',marginTop:'50px'}}>
            <div className="row">
                <div className="col-md-6">
                    <a onClick={this.handleBack}><img src={back} style={{width:'6%',marginTop:'-8px'}}/></a>
                    <label style={{fontSize:'23px',fontWeight:'bold',fontFamily:'Lato',marginLeft:'20px'}}>Line Item</label>
                </div>
                <div className="col-md-6">
                    <p style={{border:'2px solid black',padding:'11px 20px',width:'60%',borderRadius:'10px',marginLeft:'40%'}}>
                        <span style={{color:'#9B1E28',fontWeight:'bold'}}>Customer Name:</span><span> &nbsp; &nbsp;{this.state.data}</span>
                        <br/><span style={{color:'#9B1E28',fontWeight:'bold'}}>UCIC No.</span> <span style={{fontWeight:'bold'}}>{localStorage.getItem('ucic')} </span> &nbsp; <span style={{padding:'5px 10px',backgroundColor:'#c5d8ee',color:'#2963a5',borderRadius:'5px'}}>Track id: {localStorage.getItem('tackid')}</span></p>
                </div>
            </div>
            <div className="row" style={{marginTop:'30px',marginLeft:'-3%'}}>
                <div className="col-md-5">
                    <div className="" style={{padding:'10px 10px',height:'230px',width:'94%',marginLeft:'5%',backgroundColor:'#C1ECFF',borderRadius:'10px'}}>
                        <div className="row" style={{marginTop:'10px'}}>
                            <p style={{marginLeft:'10px',fontWeight:'bold',fontFamily: 'Seoge'}}>Trade Intelligence <span style={{color:'#46BA90',padding:'5px 15px',backgroundColor:'white',width:'20%',marginLeft:'45%',borderRadius:'5px'}}>Verfied</span></p>
                        </div>
                        <div className="row">
                            <img src={blockOne} style={{width:'77%',marginLeft: '10%'}}/>
                        </div>
                        <div ClassName="row">
                            <div> <button style={{border:'none',backgroundColor:'#F8D9DB',padding:'5px 15px',borderRadius:'15px',marginLeft:'82%',color:'#9B1E28',marginTop:'10px',fontSize:'12px'}} onClick={(e)=>{this.handleTrade(e)}}>View</button></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="" style={{padding:'10px 10px',height:'230px',width:'95%',marginLeft:'5%',backgroundColor:'#F3DEF9',borderRadius:'10px'}}>
                        <div className="row" style={{marginTop:'10px'}}>
                            <p style={{marginLeft:'10px',fontWeight:'bold',fontFamily: 'Seoge'}}>Document Classification and Highlighting Missing Document <span style={{color:'#46BA90',padding:'5px 15px',backgroundColor:'white',width:'20%',marginLeft:'9%',borderRadius:'5px'}}>Security Pending</span></p>
                        </div>
                        <div className="row">
                            <img src={blockTwo} style={{width:'49%',marginLeft: '10%'}}/>
                        </div>
                        <div ClassName="row" style={{marginTop:'-16px',dispay:'flex'}}>
                            <div> <button style={{border:'none',backgroundColor:'#F8D9DB',padding:'5px 15px',borderRadius:'15px',marginLeft:'86%',color:'#9B1E28',fontSize:'12px'}} onClick={(e)=>{this.handleDocverify(e)}}>View</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginTop:'30px'}}>
                <div className="col-md-6">
                    <div className="" style={{padding:'10px 10px',height:'230px',width:'96%',marginLeft:'0%',backgroundColor:'#B4D7FB',borderRadius:'10px'}}>
                        <div className="row" style={{marginTop:'10px'}}>
                            <p style={{marginLeft:'10px',fontWeight:'bold',fontFamily: 'Seoge'}}> Rule Based Check <span style={{color:'#46BA90',padding:'5px 15px',backgroundColor:'white',width:'20%',marginLeft:'42%',borderRadius:'5px'}}>Security Pending</span></p>
                        </div>
                        <div className="row">
                            <img src={blockFour} style={{width:'19%',marginLeft: '35%',marginTop:'20px'}}/>
                        </div>
                        <div ClassName="row" style={{marginTop:'2px',dispay:'flex'}}>
                            <div> <button style={{border:'none',backgroundColor:'#F8D9DB',padding:'5px 15px',borderRadius:'15px',marginLeft:'85%',color:'#9B1E28',fontSize:'12px'}}>View</button></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="" style={{padding:'10px 10px',height:'230px',width:'97%',marginLeft:'3%',backgroundColor:'#CED4F1',borderRadius:'10px'}}>
                        <div className="row" style={{marginTop:'10px'}}>
                            <p style={{marginLeft:'10px',fontWeight:'bold',fontFamily: 'Seoge'}}>Extraction of Data Entry Fields <span style={{color:'#46BA90',padding:'5px 15px',backgroundColor:'white',width:'20%',marginLeft:'26%',borderRadius:'5px'}}>Security Pending</span></p>
                        </div>
                        <div className="row">
                            <img src={blockThree} style={{width:'59%',marginLeft: '10%',marginTop:'5%'}}/>
                        </div>
                        <div ClassName="row" style={{marginTop:'22px',dispay:'flex'}}>
                            <div> <button style={{border:'none',backgroundColor:'#F8D9DB',padding:'5px 15px',borderRadius:'15px',marginLeft:'86%',color:'#9B1E28',fontSize:'12px'}}>View</button></div>
                        </div>
                    </div>
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
        DpdData: state.Admin.GetDpdData.data,
        FemaData: state.Admin.GetFemaData.data,
        CpddData: state.Admin.GetCpddData.data,
        createAuditSucc: state.Admin.createAuditdata,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        getByDpd,
        getByUcic,
        getByCpdd,
        createAuditLog
      },
      dispatch,
    )
  }
  
  // export default Login;
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)