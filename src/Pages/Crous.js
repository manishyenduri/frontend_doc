import React from "react";

class Crous extends React.Component {

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
                  <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{borderRadius:'10px',height:'200px',backgroundColor:'white',marginTop: '40px',width: '103%',marginLeft: '-1.5%'}}>
                    {this.props.data.length !== 0 ?
                    <div>
                        <ol class="carousel-indicators" id="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                        </ol>

                        <div class="carousel-inner"  >
                        <div class="item active" style={{marginTop:'40px'}}>
                            <div className="row">
                                <div className="col-md-2">
                                    <center>
                                    <label>UCIC</label>
                                    {this.props.data !== '' && <p>{this.props.data.ucic}</p>}              
                                    </center>
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Name of the customer</label> 
                                    {this.props.data !== '' && <p>{this.props.data.customer_name}</p>}
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Profit center</label> 
                                    {this.props.data !== '' && <p>{this.props.data.profit_center}</p>}               
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Land id</label>  
                                    {this.props.data !== '' && <p>{this.props.data.load_id}</p>}   
                                    
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Product</label>  
                                    {this.props.data !== '' && <p>{this.props.data.product}</p>}  
                                    
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Product code</label> 
                                    {this.props.data !== '' && <p>{this.props.data.product_code}</p>}
                                    
                                    </center>               
                                </div>
                            </div>
                        </div>

                        <div class="item" style={{marginTop:'40px'}}>
                            <div className="row">
                                <div className="col-md-2">
                                    <center>
                                    <label>Currency</label>
                                    {this.props.data !== '' && <p>{this.props.data.currency}</p>}             
                                    </center>
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Loan booking date</label>  
                                    {this.props.data !== '' && <p>{this.props.data.loan_booking_date}</p>}   
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>maturity date</label> 
                                    {this.props.data !== '' && <p>{this.props.data.maturity_date}</p>}               
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Interest rate</label>  
                                    {this.props.data !== '' && <p>{this.props.data.interest_rate}</p>}
                                    
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Origin value of loan</label>  
                                    {this.props.data !== '' && <p>{this.props.data.original_value_loan}</p>}
                                    
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>O/S Amount(Loan INR)</label> 
                                    {this.props.data !== '' && <p>{this.props.data.outstanding_loan_amount}</p>}
                                    
                                    </center>               
                                </div>
                            </div>
                        </div>
                        
                        <div class="item" style={{marginTop:'40px'}}>
                            <div className="row">
                                <div className="col-md-2">
                                    <center>
                                    <label>DPD</label>
                                    {this.props.data !== '' && <p>{this.props.data.dpd}</p>}                
                                    </center>
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Charges overdue</label>  
                                    {this.props.data !== '' && <p>{this.props.data.charges_overdue}</p>} 
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Panel interest overdue</label> 
                                    {this.props.data !== '' && <p>{this.props.data.penal_interest_overdue}</p>}               
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Interest rate</label>  
                                    {this.props.data !== '' && <p>{this.props.data.interest_rate}</p>}
                                    
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Interest_amt_os_INR</label> 
                                    {this.props.data !== '' && <p>{this.props.data.interest_amt_os_inr}</p>}
                                    
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Interest_amt_os</label> 
                                    {this.props.data !== '' && <p>{this.props.data.interest_amt_os}</p>}
                                    
                                    </center>               
                                </div>
                            </div>
                        </div>
                        <div class="item" style={{marginTop:'40px'}}>
                            <div className="row">
                                <div className="col-md-2">
                                    <center>
                                    <label>Principal_overdue_days</label> 
                                    {this.props.data !== '' && <p>{this.props.data.principal_overdue_days}</p>}              
                                    </center>
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Principal_overdue_amt</label>  
                                    {this.props.data !== '' && <p>{this.props.data.principal_overdue_amt}</p>}   
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Principal interest overdue</label>
                                    {/* {this.props.data !== '' && <p>{this.props.data.principal_overdue_amt}</p>}                  */}
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Interest_overdue_days</label>  
                                    {this.props.data !== '' && <p>{this.props.data.interest_overdue_days}</p>} 
                                    
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>RM_Code</label>  
                                    {this.props.data !== '' && <p>{this.props.data.rm_code}</p>} 
                                    
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>RM_Name</label> 
                                    {this.props.data !== '' && <p>{this.props.data.rm_name}</p>} 
                                    
                                    </center>               
                                </div>
                            </div>
                        </div>
                        <div class="item" style={{marginTop:'40px'}}>
                        <div className="row">
                                <div className="col-md-2">
                                    <center>
                                    <label>SRM_NO</label>  
                                    {this.props.data !== '' && <p>{this.props.data.srm_no}</p>}              
                                    </center>
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>SRM_NAME</label>  
                                    {this.props.data !== '' && <p>{this.props.data.srm_name}</p>}  
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Branch code</label> 
                                    {this.props.data !== '' && <p>{this.props.data.branch_code}</p>}                
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Branch Name</label>  
                                    {this.props.data !== '' && <p>{this.props.data.branch_name}</p>}
                                    
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Branch state</label>  
                                    {this.props.data !== '' && <p>{this.props.data.branch_state}</p>}
                                    
                                    </center>              
                                </div>
                                <div className="col-md-2">
                                    <center>
                                    <label>Source</label> 
                                    {this.props.data !== '' && <p>{this.props.data.source_}</p>}
                                    
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
                  
                </div>

            </div>
        )
    }

}
 export default Crous