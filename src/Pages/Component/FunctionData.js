import React from "react";
import { BiSend , BiRadioCircleMarked} from "react-icons/bi";
import SliderFema from './SliderFema'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { MdRadioButtonChecked } from "react-icons/md";
import green from '../../assets/Radio button green.svg'
import red from '../../assets/Radio Button Red.svg'



class FunctionData extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            view: false
        }
    }

    handleVeiw=()=>{
        this.setState({
            view: !this.state.view
        })
    }

    render(){
        return(
            <div>
                <div id="overflow" style={{overflow:'scroll',overflowY:'hidden',marginBottom:'30px'}}>
                     <div className="row" style={{height:'34px',padding:'5px 20px',display:'flex',width:'1500px',backgroundColor:'#bcb8b8'}}>
                         <label>Imports</label>
                     </div>
                     <div className="row" style={{height:'34px',padding:' 5px 20px',display:'flex',width:'1500px',backgroundColor:'#f0f0f0'}}>
                         <label style={{width:'420px',color:'#bcb8b8'}}>BOE not submitted (Non Capex) & Ageing > 210 days</label>
                         <label style={{width:'360px',color:'#bcb8b8'}}>BOE not submitted (Capex 3 years) + 90 days</label>
                         <label style={{width:'320px',color:'#bcb8b8'}}>BOE not settled & Ageing > 360 days</label>
                         <label style={{width:'320px',color:'#bcb8b8'}}>BOE not settled & Ageing > 210 days</label>
                     </div>
                     <div className="row" style={{height:'80px',padding:' 5px 20px',display:'flex',width:'1500px'}}>
                        <label style={{width:'420px',color:'#bcb8b8'}}>
                            <center>
                                {this.props.importflag.boe_not_submitted_age_g_210d === true ?
                                <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                :
                                <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                }
                            </center>
                        </label>
                        <label style={{width:'360px',color:'#bcb8b8'}}>
                            <center>
                                {this.props.importflag.boe_not_submitted_3yrs_90d === true ?
                                <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                :
                                <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                }
                            </center>
                        </label>
                        <label style={{width:'320px',color:'#bcb8b8'}}>
                            <center>
                                {this.props.importflag.boe_not_settled_g_360d === true ?
                                <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                :
                                <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                }
                            </center>
                        </label>
                        <label style={{width:'320px',color:'#bcb8b8'}}>
                            <center>
                                {this.props.importflag.boe_not_settled_g_210d === true ?
                                <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                :
                                <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                }
                            </center>
                        </label>
                     </div>
                </div>
                {this.state.view === true &&
                <div>
                    <div id="overflow" style={{overflow:'scroll',overflowY:'hidden'}}>
                        <div className="row" style={{height:'34px',padding:'5px 20px',display:'flex',width:'1500px',backgroundColor:'#bcb8b8'}}>
                            <label>Export</label>
                        </div>
                        <div className="row" style={{height:'34px',padding:' 5px 20px',display:'flex',width:'1500px',backgroundColor:'#f0f0f0'}}>
                             <label style={{width:'420px',color:'#bcb8b8'}}>BOE not submitted (Non Capex) & Ageing > 210 days</label>
                            <label style={{width:'360px',color:'#bcb8b8'}}>BOE not submitted (Capex 3 years) + 90 days</label>
                             <label style={{width:'320px',color:'#bcb8b8'}}>BOE not settled & Ageing > 360 days</label>
                             <label style={{width:'320px',color:'#bcb8b8'}}>BOE not settled & Ageing > 210 days</label>
                        </div>
                        <div className="row" style={{height:'80px',padding:' 5px 20px',display:'flex',width:'1500px'}}>
                            <label style={{width:'420px',color:'#bcb8b8'}}>
                                <center>
                                    {this.props.exportflag.export_advance_not_regualrised_g_1y === true ?
                                    <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                    :
                                    <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                    }
                                </center>
                            </label>
                             <label style={{width:'360px',color:'#bcb8b8'}}>
                                <center>
                                    {this.props.exportflag.export_not_advance_not_regualrised_g_2y === true ?
                                    <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                    :
                                    <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                    }
                                </center>
                            </label>
                             <label style={{width:'320px',color:'#bcb8b8'}}>
                                <center>
                                    {this.props.exportflag.bill_overdue_pending_lodgement_g_480d === true ?
                                    <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                    :
                                    <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                    }
                                </center>
                            </label>
                             <label style={{width:'320px',color:'#bcb8b8'}}>
                                <center>
                                    {this.props.exportflag.bill_lodged_overdue_g_480d === true ?
                                    <img src={green} style={{width:'22px',marginTop:'20px'}}/>
                                    :
                                    <img src={red} style={{width:'22px',marginTop:'20px'}}/>
                                    }
                                </center>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                            <SliderFema {...this.props} />
                        </div>
                </div>
                }
                <div style={{textAlign:'right'}}>
                    {this.state.view === false ?
                    <a onClick={this.handleVeiw} style={{color:'#9b2829', fontWeight:'bold'}}>View all <AiOutlineArrowDown style={{marginTop:'-5px',color:'#9b2829',fontWeight:'bold'}} /></a>
                    :
                    <a onClick={this.handleVeiw} style={{color:'#9b2829',fontWeight:'bolds'}} >View all <AiOutlineArrowUp style={{marginTop:'-5px',color:'#9b2829',fontWeight:'bold'}}/></a>
                    }
                </div>
            </div>
        )
    }

}

export default FunctionData