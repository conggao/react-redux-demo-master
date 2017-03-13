// 动态数据
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGetJsonList} from '../../actions/JsonAction'
class JsonList extends Component {
    rendData() {
        const {datas} = this.props;
        let lists = datas.lists;
        if ("undefined" != typeof lists)
            return (lists.map(
                    (e, i) => {
                        return (
                            <div>
                                <div className="well well-sm">
                                    {e.title}
                                </div>
                                < div >
                                    {e.json}
                                </div >
                            </div>
                        )
                    }
                )
            )
    }

    render() {
        const {fetchGetJsonList} = this.props;

        return (
            <div>
                <div className="btn-group">
                    <button type="button" className="btn btn-default" onClick={ () => fetchGetJsonList()}>加载数据</button>
                </div>
                <p></p>
                {this.rendData()}
            </div>
        )
    }
}

const getJsonList = state => {
    return {
        datas: state.updateJson.jsonList
    }
};

export default connect(
    getJsonList,
    {fetchGetJsonList}
)(JsonList)
