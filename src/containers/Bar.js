// 动态数据
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchPostsIfNeeded, refreshData } from '../actions/count'
import {fetchJsonList} from '../actions/jsonAction'
class Bar extends Component {
    rendData(){
        const {datas} = this.props;
        let lists = datas.lists;
        if ("undefined"!=typeof lists)
           return (lists.map(
               (e,i)=>
               <div className="well well-sm">
                   {e.title}
               </div>
            )
           )
    }
    render() {
        const { fetchJsonList } = this.props;
        
        return (
            <div>
                <div className="btn-group">
                    <button type="button" className="btn btn-default" onClick={ ()=>fetchJsonList()}>加载数据</button>
                </div>
                <p></p>
                {this.rendData()}
            </div>
        )
    }
}

const getBarState = state => {
    return {
        datas: state.updateJson.jsonList
    }
};

export default connect(
    getBarState,
    { fetchJsonList }
)(Bar)
