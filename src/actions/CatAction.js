/**
 * Created by yons on 2017/3/13.
 */

import {ADDCAT, ADDSUBCAT} from '../constants'
import 'whatwg-fetch'
export const addCat = catData => {
    return {
        type: ADDCAT,
        catData
    }
}
export const addSubCat = subCatData => {
    return {
        type: ADDSUBCAT,
        subCatData
    }
}
function fetchAddCatData(data) {
    return (dispatch) => {
        return fetch("http://localhost:8085/Json/addJson", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json", "charset": "utf-8"}
        })
    }
}
function fetchAddSubCatData(data) {
    return (dispatch)=>{
        return fetch("http://localhost:8085/Json/add",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-type":"application/json","charset":"utf-8"}
            }
        )
    }

}
export function fetchAddCat(data) {
    return (dispatch,getState)=>{
        return fetchAddCatData(data)
    }
}
export function fetchAddSubCat(data) {
    return (dispatch,getState)=>{
        return fetchAddSubCatData(data)
    }

}
