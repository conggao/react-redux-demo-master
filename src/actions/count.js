import {INCREASE, DECREASE, GETSUCCESS, REFRESHDATA} from '../constants'  // 引入action类型名常量
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax
/*import 'fetch-jsonp'*/

// 这里的方法返回一个action对象
export const increase = n => {
    return {
        type: INCREASE,
        amount: n
    }
}

export const decrease = n => {
    return {
        type: DECREASE,
        amount: n
    }
}

export const refreshData = () => {
    return {
        type: REFRESHDATA
    }
}

export const getSuccess = (json) => {
    return {
        type: GETSUCCESS,
        json
    }
}

function fetchPosts() {
    return dispatch => {
        return fetch('data.json')
            .then((res) => {
                console.log(res.status);
                return res.json()
            })
            .then((data) => {
                console.log(data);
                dispatch(getSuccess(data));
            })
            .catch((e) => {
                console.log(e.message);
            })
    }
}
        /* return fetch('http://192.168.5.142:8080/fsc/manage/storageManage/GetListItemsByAjax.action?parentId=' + param, {
         method: "post",
         mode: "no-cors",
         headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
         body: 'jsonString=' + JSON.stringify({
         parentId: 22001,
         })
         }
         )*/
        //get网盘数据
        /*   return fetch('http://192.168.5.142:8080/fsc/manage/storageManage/GetListItemsByAjax.action?parentId=' + param, {
         method: "get",
         mode: "no-cors",
         }
         )
         .then((res) => {
         console.log(res.status);
         return res.json()
         })
         .then((data) => {
         console.log(JSON.stringify({parentId: 2201}));
         dispatch(getSuccess(data))
         })
         .catch((e) => {
         console.log(e.message)
         })*/


// 这里的方法返回一个函数进行异步操作
export function fetchPostsIfNeeded() {

    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么
    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}
