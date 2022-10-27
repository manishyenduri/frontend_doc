// import { devUrl, devURLTnega } from '../../utilities/config'
import {LOGIN_DATA_ERR,LOGIN_DATA,GET_FEMA_ERR,GET_FEMA,GET_DPD_ERR,GET_DPD,GET_CPDD_ERR,GET_CPDD,GET_ALL_AUDIT_LOG,GET_ALL_AUDIT_LOG_ERR,
  CREATE_AUDIT_LOG,CREATE_AUDIT_LOG_ERR,CREATE_AUDIT_LOG2,CREATE_AUDIT_LOG2_ERR,ADD_COMMENT,ADD_COMMENT_ERR,UPDATE_ACTION_ERR,UPDATE_ACTION} from './types'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
// import { dispatch } from 'd3'
const MySwal = withReactContent(Swal)


const devURLTnega = "http://3.110.180.81:5001/";


export const LoginApi = (data) => (dispatch) => {
  axios.post('https://ps-trade.invoizo.com/user/login',data)
  .then((res) => {
    console.log(res)
    dispatch({type:LOGIN_DATA,payload:res});
  })
  .catch((err) => {
    console.log(err)
    dispatch({type:LOGIN_DATA_ERR,payload:err});
  })
}

export const getByUcic = (data) => (dispatch) => {
  axios.get('http://159.65.157.216:5000/api/fema/getbyucic?ucic=' + data )
  .then((res) => {
    console.log(res)
    dispatch({type:GET_FEMA,payload:res});
  })
  .catch((err) => {
    console.log(err)
    dispatch({type:GET_FEMA_ERR,payload:err});
  })
}

export const getByDpd = (data) => (dispatch) => {
  axios.get('http://159.65.157.216:5000/api/dpd/getbyucic?ucic=' + data )
  .then((res) => {
    console.log(res)
    dispatch({type:GET_DPD,payload:res});
  })
  .catch((err) => {
    console.log(err)
    dispatch({type:GET_DPD_ERR,payload:err});
  })
}

export const getByCpdd = (data) => (dispatch) => {
  axios.get('http://159.65.157.216:5000/api/cpdd/getbyucic?ucic=' + data )
  .then((res) => {
    console.log(res)
    dispatch({type:GET_CPDD,payload:res});
  })
  .catch((err) => {
    console.log(err)
    dispatch({type:GET_CPDD_ERR,payload:err});
  })
}

export const getAllAuditog = (data) => (dispatch) => {
  axios.get('http://159.65.157.216:5000/api/auditlog/getalllogs?ucic=' + localStorage.getItem('ucic') )
  .then((res) => {
    console.log(res)
    dispatch({type:GET_ALL_AUDIT_LOG,payload:res});
  })
  .catch((err) => {
    console.log(err)
    dispatch({type:GET_ALL_AUDIT_LOG_ERR,payload:err});
  })
}

export const createAuditLog = (data,data1) => (dispatch) => {

  const body={
    ucic: localStorage.getItem('ucic'),
    user_name: localStorage.getItem('Username'),
    checkpoint: data,
    action: data1
  }
  axios.post('http://159.65.157.216:5000/api/auditlog/create',body )
  .then((res) => {
    console.log(res)
    dispatch({type:CREATE_AUDIT_LOG,payload:res});
  })
  .catch((err) => {
    console.log(err)
    dispatch({type:CREATE_AUDIT_LOG_ERR,payload:err});
  })
}

export const createAuditLog2 = (data,data1) => (dispatch) => {

  const body={
    ucic: localStorage.getItem('ucic'),
    user_name: localStorage.getItem('Username'),
    checkpoint: data,
    action: data1
  }
  axios.post('http://159.65.157.216:5000/api/auditlog/create',body )
  .then((res) => {
    console.log(res)
    dispatch({type:CREATE_AUDIT_LOG2,payload:res});
  })
  .catch((err) => {
    console.log(err)
    dispatch({type:CREATE_AUDIT_LOG2_ERR,payload:err});
  })
}

export const addCommentApi = (data) => (dispatch) => {
  
  axios.put('http://159.65.157.216:5000/api/auditlog/addcomment',data )
  .then((res) => {
    console.log(res)
    dispatch({type:ADD_COMMENT,payload:res});
  })
  .catch((err) => {
    console.log(err)
    dispatch({type:ADD_COMMENT_ERR,payload:err});
  })
}

export const updateAction = (data) => (dispatch) => {
  
  axios.put('http://159.65.157.216:5000/api/auditlog/updateaction',data )
  .then((res) => {
    console.log(res)
    dispatch({type:UPDATE_ACTION,payload:res});
  })
  .catch((err) => {
    console.log(err)
    dispatch({type:UPDATE_ACTION_ERR,payload:err});
  })
}