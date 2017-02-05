/**
 * Created by pc on 2017/1/17.
 */
import {GETFORMDATA, CHANGEFORMSTATE} from '../constants';
const formData = {
    title: null,
    json: null,
    catId: null
};
export function updateFormData(state = formData, action) {
    switch (action.type) {
        case GETFORMDATA:
            return state;
            break;
        case CHANGEFORMSTATE:
            switch (action.name) {
                case 'title':
                    return Object.assign({}, state, {"title": action.data});
                    break;
                case 'json':
                    return Object.assign({}, state, {"json": action.data});
                    break;
                default:
                    return state;
            }

        default:
            return state;
    }
}

