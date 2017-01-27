// 动态数据
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded, refreshData } from '../actions/count'
class Bar extends Component {
    rendData(){
        const {data1} =this.props;
        let lists = data1.lists;
        if("undefined" != typeof lists)
        return(
                lists.map(
                    (e, index) =>
                    <div className="well well-sm" >{e.title}</div>
                )

        )
    }
    render() {
        const {  fetchPostsIfNeeded } = this.props;
        
        return (
            <div>
                <div className="btn-group">
                    <button type="button" className="btn btn-default" onClick={ ()=>fetchPostsIfNeeded()}>加载数据</button>
                </div>
                <p></p>
                {this.rendData()}
            </div>
        )
    }
}

const  getList= state => {
    return {
        data1: state.update.data
    }
};

export default connect(
    getList,
    { fetchPostsIfNeeded }
)(Bar)
