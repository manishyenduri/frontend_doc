import {LOGIN_DATA, LOGIN_DATA_ERR,GET_FEMA_ERR,GET_FEMA,GET_DPD_ERR,GET_DPD,GET_CPDD_ERR,GET_CPDD,GET_ALL_AUDIT_LOG,GET_ALL_AUDIT_LOG_ERR,
    CREATE_AUDIT_LOG,CREATE_AUDIT_LOG_ERR,CREATE_AUDIT_LOG2,CREATE_AUDIT_LOG2_ERR,ADD_COMMENT,ADD_COMMENT_ERR,UPDATE_ACTION_ERR,UPDATE_ACTION} from './types';
const initialState = {
    loginDataValue:'',
    loginDataValue_err:'',
    GetFemaData: '',
    GetFemaDataErr: '',
    GetDpdData:'',
    GetDpdDataErr:'',
    GetCpddData:'',
    GetCpddDataErr:'',
    getAllAudit:'',
    getAllAudit_err:'',
    createAuditdata:'',
    createAuditdata_err:'',
    createAuditdata2:'',
    createAuditdata2_err:'',
    addCommentData:'',
    addCommentData_err:'',
    updateActionData:'',
    updateActionData_err:'',
    }

export default function reducer(state=initialState,{type,payload}){
    switch(type){
        case UPDATE_ACTION:
            return{
                ...state,
                updateActionData:payload
            }
        case UPDATE_ACTION_ERR:
            return{
                ...state,
                updateActionData_err:payload
            } 
        case ADD_COMMENT:
            return{
                ...state,
                addCommentData:payload
            }
        case ADD_COMMENT_ERR:
            return{
                ...state,
                addCommentData_err:payload
            }        
        case LOGIN_DATA:
            return{
                ...state,
                loginDataValue:payload
            }
        case LOGIN_DATA_ERR:
            return{
                ...state,
                loginDataValue_err:payload
            }
        case GET_FEMA:
            return{
                ...state,
                GetFemaData:payload
            }
        case GET_FEMA_ERR:
            return{
                ...state,
                GetFemaDataErr:payload
            }

            case GET_DPD:
                return{
                    ...state,
                    GetDpdData:payload
                }
            case GET_DPD_ERR:
                return{
                    ...state,
                    GetDpdDataErr:payload
                }

            case GET_CPDD:
                return{
                    ...state,
                    GetCpddData:payload
                }
            case GET_CPDD_ERR:
                return{
                    ...state,
                    GetCpddDataErr:payload
                }


            case GET_ALL_AUDIT_LOG:
                return{
                    ...state,
                    getAllAudit:payload
                }
            case GET_ALL_AUDIT_LOG_ERR:
                return{
                    ...state,
                    getAllAudit_err:payload
                }
            case CREATE_AUDIT_LOG:
                return{
                    ...state,
                    createAuditdata:payload
                }
            case CREATE_AUDIT_LOG_ERR:
                return{
                    ...state,
                    createAuditdata_err:payload
                }
            case CREATE_AUDIT_LOG2:
                return{
                    ...state,
                    createAuditdata2:payload
                }
            case CREATE_AUDIT_LOG2_ERR:
                return{
                    ...state,
                    createAuditdata2_err:payload
                }

        default:
            return{
                ...state
            }
    }
}