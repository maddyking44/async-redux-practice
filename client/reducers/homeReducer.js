import {RECEIVE_GRATS} from '../actions'

function homeReducer (state = {}, action){
    switch (action.type) {
        case RECEIVE_GRATS:
            return action.grats
    
            default: 
            return state
    }
}

export default homeReducer