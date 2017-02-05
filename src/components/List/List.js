import React,{Component,propTypes} from 'react'
import styles from './List.css'

class List extends React.Component {
    render() {
        return(
            <li className="list-group-item">{this.props.text}</li>
        )
    }
}
List.propTypes = {
    text: PropTypes.string.isRequired
};
export default List