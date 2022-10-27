import { combineReducers } from 'redux';
import Admin from './Admin/reducer';
// import admin from './Admin/reducer';
// import registeruser from './Login/reducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
// import dro from './DRO/reducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist:['Admin']
}

const authPersist_Admin_Config={key:'Admin', storage: sessionStorage}
// const authPersist_login_Config={key:'login', storage: sessionStorage}
// const authPersist_dro_Config={key:'dro', storage: sessionStorage}

const rootReducer = combineReducers({
    Admin:persistReducer(authPersist_Admin_Config,Admin),
    // login:persistReducer(authPersist_login_Config,login),
    // dro:persistReducer(authPersist_dro_Config,dro)

}); 
export default persistReducer(persistConfig,rootReducer);

// export default combineReducers({
//     login,
//     admin
// });