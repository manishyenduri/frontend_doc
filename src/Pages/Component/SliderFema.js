import { height } from "@mui/system";
import React from "react";

class SlideFema extends React.Component {

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
        return(
            <div>
                <div class="container" >
                  <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{borderRadius:'10px',height:'200px',backgroundColor:'white',marginTop: '20px',width: '103%',marginLeft: '-1.5%'}}>
                    {this.props.data.length !== 0 ?
                    <div>
                        <ol class="carousel-indicators" id="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                        <li data-target="#myCarousel" data-slide-to="5"></li>
                        <li data-target="#myCarousel" data-slide-to="6"></li>
                        </ol>

                        <div class="carousel-inner"  >
                        <div class="item active" style={{marginTop:'10px'}}>
                            <div className="row" style={{height:'30px',background:'#bcb8b8'}}>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2"></div>
                            </div>
                            <div className="row" style={{height:'40px',background:'#f0f0f0'}}>
                                <div className="col-md-2">
                                    <center><label >UCIC</label></center>
                                </div>
                                <div className="col-md-2">
                                    <center><label >PC Code</label></center>
                                </div>
                                <div className="col-md-2">
                                    <center><label >Segment</label></center>
                                </div>
                                <div className="col-md-2">
                                    <center><label >Bussiness Segment</label></center>
                                </div>
                                <div className="col-md-2">
                                    <center><label >Customer Name</label></center>
                                </div>
                                <div className="col-md-2">
                                    <center><label >IE code/PAN</label></center>
                                </div>
                            </div>
                            <div className="row" style={{height:'30px',background:'white'}}>
                                <div className="col-md-2">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.ucic}</p>}   </center>
                                </div>
                                <div className="col-md-2">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.pc_code}</p>}   </center>
                                </div>
                                <div className="col-md-2">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.segment}</p>}   </center>
                                </div>
                                <div className="col-md-2">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.business_segment}</p>}   </center>
                                </div>
                                <div className="col-md-2">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.customer_name}</p>}   </center>
                                </div>
                                <div className="col-md-2">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.ie_code}</p>}   </center>
                                </div>
                            </div>
                        </div>

                        <div class="item" style={{marginTop:'10px'}}>
                            <div className="row" style={{height:'30px',background:'#bcb8b8'}}>
                                <div className="col-md-3"></div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="row" style={{height:'40px',background:'#f0f0f0'}}>
                                <div className="col-md-3">
                                    <center><label >RM Name</label></center>
                                </div>
                                <div className="col-md-3">
                                    <center><label >Approval to be provided</label></center>
                                </div>
                                <div className="col-md-3">
                                    <center><label >BYSRM/Regional/Zonal Head</label></center>
                                </div>
                                <div className="col-md-3">
                                    <center><label >Approval to be sought from</label></center>
                                </div>
                            </div>
                            <div className="row" style={{height:'30px',background:'white'}}>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.rm_name}</p>}   </center>
                                </div>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.approval_to_be_provided_by}</p>}   </center>
                                </div>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p></p>}   </center>
                                </div>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.approval_to_be_sought_from}</p>}   </center>
                            </div>
                            </div>
                        </div>
                        
                        <div class="item" style={{marginTop:'10px'}}>
                            <div className="row" style={{height:'30px',background:'#bcb8b8'}}>
                                <div className="col-md-4"></div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4"></div>
                            </div>
                            <div className="row" style={{height:'40px',background:'#f0f0f0'}}>
                                <div className="col-md-4">
                                    <center><label >BOE not submitted (Non Capex) & Ageing > 210 days</label></center>
                                </div>
                                <div className="col-md-4">
                                    <center><label >BOE not submitted (Capex 3 years) + 90 days</label></center>
                                </div>
                                <div className="col-md-4">
                                    <center><label >BOE not settled & Ageing > 360 days</label></center>
                                </div>
                            </div>
                            <div className="row" style={{height:'30px',background:'white'}}>
                                <div className="col-md-4">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.boe_not_submitted_age_g_210d}</p>}   </center>
                                </div>
                                <div className="col-md-4">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.boe_not_submitted_3yrs_90d}</p>}   </center>
                                </div>
                                <div className="col-md-4">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.boe_not_settled_g_360d}</p>}   </center>
                                </div>
                                
                            </div>
                        </div>

                        <div class="item" style={{marginTop:'10px'}}>
                            <div className="row" style={{height:'30px',background:'#bcb8b8'}}>
                                <div className="col-md-4"></div>
                                <div className="col-md-4">Export</div>
                                <div className="col-md-4"></div>
                            </div>
                            <div className="row" style={{height:'40px',background:'#f0f0f0'}}>
                                <div className="col-md-4">
                                    <center><label >BOE not settled & Ageing > 210 days</label></center>
                                </div>
                                <div className="col-md-4">
                                    <center><label >Export advance not regularised & ageing > 1 year</label></center>
                                </div>
                                <div className="col-md-4">
                                    <center><label >Export non-advance not regularised & ageing > 2 year</label></center>
                                </div>
                            </div>
                            <div className="row" style={{height:'30px',background:'white'}}>
                                <div className="col-md-4">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.boe_not_settled_g_210d}</p>}   </center>
                                </div>
                                <div className="col-md-4">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.export_advance_not_regualrised_g_1y}</p>}   </center>
                                </div>
                                <div className="col-md-4">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.export_not_advance_not_regualrised_g_2y}</p>}   </center>
                                </div>
                                
                            </div>                            
                        </div>

                        <div class="item" style={{marginTop:'10px'}}>
                            <div className="row" style={{height:'30px',background:'#bcb8b8'}}>
                                <div className="col-md-4"></div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4">Merchanting Trade</div>
                            </div>
                            <div className="row" style={{height:'40px',background:'#f0f0f0'}}>
                                <div className="col-md-4">
                                    <center><label >Bill overdue pending lodgement & ageing > 480 days</label></center>
                                </div>
                                <div className="col-md-4">
                                    <center><label >Bill lodged and overdue & ageing > 480 days</label></center>
                                </div>
                                <div className="col-md-4">
                                    <center><label >MTT default overall breached & ageing > 270 days (Less 30 days grace period)</label></center>
                                </div>
                            </div>
                            <div className="row" style={{height:'30px',background:'white'}}>
                                <div className="col-md-4">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.bill_overdue_pending_lodgement_g_480d}</p>}   </center>
                                </div>
                                <div className="col-md-4">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.bill_lodged_overdue_g_480d}</p>}   </center>
                                </div>
                                <div className="col-md-4">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.mtt_default_overall_breached_g_270d_l30d_gp}</p>}   </center>
                                </div>
                                
                            </div>                            
                        </div>

                        <div class="item" style={{marginTop:'10px'}}>
                            <div className="row" style={{height:'30px',background:'#bcb8b8'}}>
                                <div className="col-md-3"></div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3">Deferrals</div>
                                <div className="col-md-3">Business</div>
                            </div>
                            <div className="row" style={{height:'40px',background:'#f0f0f0'}}>
                                <div className="col-md-3">
                                    <center><label >MTT payment outlay breached & ageing > 270 days (Less 30 days grace period)</label></center>
                                </div>
                                <div className="col-md-3">
                                    <center><label >Undelivered Tracers</label></center>
                                </div>
                                <div className="col-md-3">
                                    <center><label >Trade Deferrals & ageing > 15 days</label></center>
                                </div>
                                <div className="col-md-3">
                                    <center><label >Exception ,approve or decline</label></center>
                                </div>
                            </div>
                            <div className="row" style={{height:'30px',background:'white'}}>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.mtt_payment_outlay_breached_g_120d_l30d_gp}</p>}   </center>
                                </div>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.undelivered_tracers}</p>}   </center>
                                </div>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.trade_differals_age_g_15d}</p>}   </center>
                                </div>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.mtt_default_overall_breached_g_270d_l30d_gp}</p>}   </center>
                                </div>
                                
                            </div>                             
                        </div>

                        <div class="item" style={{marginTop:'10px'}}>
                        <div className="row" style={{height:'30px',background:'#bcb8b8'}}>
                                <div className="col-md-3">Compliance</div>
                                <div className="col-md-3">Final</div>
                                <div className="col-md-3">Business</div>
                                <div className="col-md-3">Compliance</div>
                            </div>
                            <div className="row" style={{height:'40px',background:'#f0f0f0'}}>
                                <div className="col-md-3">
                                    <center><label >Exception ,approve or decline</label></center>
                                </div>
                                <div className="col-md-3">
                                    <center><label >Approve when both are approve else decline</label></center>
                                </div>
                                <div className="col-md-3">
                                    <center><label >Supporting notes</label></center>
                                </div>
                                <div className="col-md-3">
                                    <center><label >Supporting notes</label></center>
                                </div>
                            </div>
                            <div className="row" style={{height:'30px',background:'white'}}>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.mtt_payment_outlay_breached_g_120d_l30d_gp}</p>}   </center>
                                </div>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.undelivered_tracers}</p>}   </center>
                                </div>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.trade_differals_age_g_15d}</p>}   </center>
                                </div>
                                <div className="col-md-3">
                                    <center> {this.props.data !== '' && <p>{this.props.userData.mtt_default_overall_breached_g_270d_l30d_gp}</p>}   </center>
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
                  
                </div>

            </div>
        )
    }

}
 export default SlideFema