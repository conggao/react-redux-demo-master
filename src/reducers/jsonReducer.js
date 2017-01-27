/**
 * Created by pc on 2017/1/17.
 */
import {ADDJSON, GETJSONLIST} from '../constants';
const jsonState = {
    jsonList: []
};
export function updateJson(state = jsonState, action) {
    switch (action.type) {
        case GETJSONLIST:
            return Object.assign({}, state, {jsonList: action.jsonList});
            break;
        default:
            return state;
    }
}

