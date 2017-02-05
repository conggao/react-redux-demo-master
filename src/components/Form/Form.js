import React from 'react'
import styles from './Form.css'
class Form extends React.Component {
    rendData() {
        return (
            <input type=""/>
        );

    }
    render() {
        return (
            <form>
                {this.rendData()}
            </form>
        );
    }
}
export default Form