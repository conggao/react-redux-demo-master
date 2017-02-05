import React from 'react'
import styles from './AddJson.css'
import {fetchAddJson} from '../../actions/JsonAction'
import {changeState} from '../../actions/FormDataAction'
import {connect} from 'react-redux'
class AddJson extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "AddJson";
    }
    render() {
        const {formData,fetchAddJson,changeState} = this.props;
        return (
            <div className={styles.container}>
                <from id="JsonData">
                    <div>
                        <label>title</label>
                        <input name="title" onChange={(e)=>changeState(e.target.value,"title")}/>
                    </div>
                    <div>
                        <label>json</label>
                        <textarea name="json" onChange={(e)=>changeState(e.target.value,"json")}/>
                    </div>
                    <div>
                        <input type="submit"
                               onClick={() => fetchAddJson(formData)}/>
                    </div>
                </from>
            </div>
        );
    }
}
const getFormData = state => {
    return {
        formData: state.updateFormData
    }
};
export default connect(
    getFormData,
    {fetchAddJson,changeState}
)(AddJson)