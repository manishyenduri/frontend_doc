import { height } from "@mui/system";
import React from "react";
import green from '../../assets/Radio button green.svg'
import red from '../../assets/Radio Button Red.svg'

class ExportSlide extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ucic: undefined,
        }
      }

    handlechange=(e)=>{
        console.log(e.target.name)
        const name=e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    render(){
        console.log(this.props)
        return(
            <div>
                {/* <div class="container" >
                  <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{borderRadius:'10px',height:'200px',backgroundColor:'white',marginTop: '5px',width: '103%',marginLeft: '-1.5%'}}>
                    {this.props.data.length !== 0 ?
                    <div>
                        <ol class="carousel-indicators" id="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        </ol>

                        <div class="carousel-inner"  >
                        <div class="item active" style={{}}>
                            <div className="row" style={{height:'34px',padding:' 5px 20px',display:'flex',backgroundColor:'#f0f0f0'}}>
                                <div className="col-md-6">
                                    <center>
                                    <label style={{color:'#bcb8b8'}}>BOE not submitted (Non Capex) & Ageing > 210 days</label>
                                    </center>
                                </div>
                                <div className="col-md-6">
                                    <center>
                                    <label style={{color:'#bcb8b8'}}>BOE not submitted (Capex 3 years) + 90 days</label>
                                    </center>
                                </div>
                            </div>
                            <div className="row" style={{padding:' 5px 20px',display:'flex'}}>
                                <div className="col-md-6">
                                <center>
                                    {this.props.exportflag.export_advance_not_regualrised_g_1y === true ?
                                    <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                    :
                                    <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                    }
                                </center>
                                </div>
                                <div className="col-md-6">
                                <center>
                                    {this.props.exportflag.export_not_advance_not_regualrised_g_2y === true ?
                                    <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                    :
                                    <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                    }
                                </center>
                                </div>
                               
                            </div>
                            
                        </div>

                        <div class="item" >
                            <div className="row" style={{height:'34px',padding:' 5px 20px',display:'flex',backgroundColor:'#f0f0f0'}}>
                                <div className="col-md-6">
                                    <center>
                                    <label style={{color:'#bcb8b8'}}>BOE not settled & Ageing > 360 days</label>
                                    </center>
                                </div>
                                <div className="col-md-6">
                                    <center>
                                    <label style={{color:'#bcb8b8'}}>BOE not settled & Ageing > 210 days</label>
                                    </center>
                                </div>
                               
                            </div>
                            <div className="row" style={{padding:' 5px 20px',display:'flex'}}>
                                <div className="col-md-6">
                                <center>
                                    {this.props.exportflag.bill_overdue_pending_lodgement_g_480d === true ?
                                    <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                    :
                                    <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                    }
                                </center>
                                </div>
                                <div className="col-md-6">
                                <center>
                                    {this.props.exportflag.bill_lodged_overdue_g_480d === true ?
                                    <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                    :
                                    <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                    }
                                </center>
                                </div>
                               
                            </div>
                        </div>

                        </div>

                    </div>
                    :
                    <center>
                        <h1 style={{paddingTop:'7%'}}>UCIC not found</h1>
                    </center>
                    }
                  </div>
                  
                </div> */}

            </div>
        )
    }

}
 export default ExportSlide