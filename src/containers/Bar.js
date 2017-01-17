// 动态数据
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchPostsIfNeeded, refreshData } from '../actions/count'
import {fetchJsonList} from '../actions/jsonAction'
class Bar extends Component {
    render() {
        const { lists, fetchJsonList } = this.props;
        
        return (
            <div>
                <div className="btn-group">
                    <button type="button" className="btn btn-default" onClick={ ()=>fetchJsonList()}>加载数据</button>
                </div>
                <p></p>
                {lists.map(
                    (e, index) =>
                    <div className="well well-sm" >{e.id}</div>
                )}
            </div>
        )
    }
}

const getBarState = state => {
    return {
        lists: state.updateJson.jsonList
    }
};

export default connect(
    getBarState,
    { fetchJsonList }
)(Bar)
