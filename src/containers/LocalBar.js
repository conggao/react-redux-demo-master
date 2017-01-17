// 动态数据
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded, refreshData } from '../actions/count'
class Bar extends Component {
    render() {
        const { lists, fetchPostsIfNeeded } = this.props;
        
        return (
            <div>
                <div className="btn-group">
                    <button type="button" className="btn btn-default" onClick={ ()=>fetchPostsIfNeeded()}>加载数据</button>
                </div>
                <p></p>
                {lists.map(
                    (e, index) =>
                    <div className="well well-sm" >{e.title}</div>
                )}
            </div>
        )
    }
}

const  getList= state => {
    return {
        lists: state.update.data
    }
};

export default connect(
    getList,
    { fetchPostsIfNeeded }
)(Bar)
