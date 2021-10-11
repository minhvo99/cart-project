//import * as types from './../constans/index'
import * as Message from './../constans/Message'
import * as types from './../constans/index'



var initialState = Message.MSG_WELCOME


const message = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_MSG:
            return action.message 
        default : return [...state]
    }
}
 

export default message;