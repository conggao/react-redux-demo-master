/**
 * Created by pc on 2017/1/17.
 */
import { GETFORMDATA} from '../constants';
const jsonState = {
    formData: []
};
export function updateFormData(state = jsonState, action) {
    switch (action.type) {
        case GETFORMDATA:
            return Object.assign({}, state, {formData: action.formData});
            break;
        default:
            return state;
    }
}

