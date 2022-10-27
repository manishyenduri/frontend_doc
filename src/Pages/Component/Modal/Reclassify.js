import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-responsive-modal';
import { useSelector, useDispatch } from 'react-redux'
import ModalData from './Modal'

const AddressPopUp = (props) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch()

  
//   cos
console.log(props)

  return (
    <div>
      <ModalData open={open} onClick={() => props.onCloseModal()} center>
      
        <div style={{display:'flex'}}>          
          <p style={{color:'white',fontSize:'20px',fontWeight:'300',marginTop:'20px',marginLeft:'33%'}}></p> 
            
          <a onClick={props.handleActivity} style={{color:'black',fontWeight:'bold',marginLeft:'60%',marginTop:'1%',fontSize:'20px',cursor:'pointer'}}>X</a>
        </div> 
        <div style={{backgroundColor:'',height:'91%'}}>
          <center>
            <h1 style={{marginTop:'30px'}}>Document Classified as: Letter of credit</h1>
            <div style={{fontSize:'15px',marginTop:'30px'}}>Re-classify the document as: &nbsp;
                <span>
                    <select style={{border:'none',outline:'none',backgroundColor:'white',width:'75px'}}>
                        <option>Select</option>
                        <option>Select</option>
                        <option>Select</option>
                        <option>Select</option>
                    </select>
                </span>
            </div>
            <div className="row" style={{marginTop:'50px',marginLeft:'2%'}}>
                <div className="col-md-2 offset-md-4">
                    <button style={{padding:'10px 20px',border:'none',borderRadius:'10px',backgroundColor:'#21740D',color:'white',fontSize:'15px'}}>Accept</button>
                </div>
                <div className="col-md-2">
                    <button style={{padding:'10px 20px',border:'1px solid red ',borderRadius:'10px',backgroundColor:'white',color:'red',fontSize:'15px'}} >Cancel</button>
                </div>
            </div>
          </center>
        </div>
       
        
      </ModalData>
    </div>
  );
};
export default AddressPopUp