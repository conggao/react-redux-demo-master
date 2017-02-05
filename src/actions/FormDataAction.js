/**
 * Created by yons on 2017/1/30.
 */
import {GETFORMDATA,CHANGEFORMSTATE} from '../constants'
import 'whatwg-fetch'
export const addFormData=formData=>{
    return{
        type:GETFORMDATA,
        formData
    }
};
export const changeFormState=(data,name)=>{
    return{
        type:CHANGEFORMSTATE,
        name,
        data,
    }
};
export function changeState(data,name) {
    return(dispatch,getState)=>{
        return dispatch(changeFormState(data,name));
    }
}