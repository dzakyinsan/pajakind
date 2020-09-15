import {GET_COLOR_SUCCESS} from './../action/types'

const INITIAL_STATE={
    color:[]
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case GET_COLOR_SUCCESS:
            return{...state,color:action.payload}
        default:
            return state;
    }
}