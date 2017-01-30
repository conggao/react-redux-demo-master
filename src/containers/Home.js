// 计数器
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class Home extends Component {
    render() {
        const { number } = this.props

        return (
            <div>
                <p>这里显示的是当前值: <span className="badge">{number}</span></p>
                <br />
                <button type="button" className="btn btn-default" onClick={() => browserHistory.push('/foo')}>跳转到 /foo</button>
            </div>
        )
    }
}

const getNumber = state => {
    return {
        number:"hello world"
    }
}

export default connect(
    getNumber
)(Home)