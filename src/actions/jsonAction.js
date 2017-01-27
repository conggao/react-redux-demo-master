/**
 * Created by pc on 2017/1/17.
 */
import {ADDJSON, GETJSONLIST} from '../constants';
import 'whatwg-fetch';
export const addJson = json=> {
    return {
        type: ADDJSON,
        json
    }
};
export const getJsonList = jsonList => {
    return {
        type: GETJSONLIST,
        jsonList
    }
};
function fetchList() {
    return function(dispatch){
        return fetch('http://localhost:8085/Json/getJsonList', {
            method:"GET",
            headers: { "charset":"utf-8"},
        }).then(
            (res)=> {
                return res.json();
            }
        ).then(
            (data)=> {
                console.log(data);
                return dispatch(getJsonList(data));
            }
        ).catch(e=> {
            console.log(e.message);
        })
    }

}
export function fetchJsonList() {
    return (dispatch, getState)=> {
        return dispatch(fetchList());
    }
}


