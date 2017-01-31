/**
 * Created by yons on 2017/1/30.
 */
import {GETFORMDATA} from '../constants'
import 'whatwg-fetch'
export const addFormData=formData=>{
    return{
        type:GETFORMDATA,
        formData
    }
};
function fetchJsonData(data) {
    return fetch('')

}
export function fetchAddJsonData(data) {


}
