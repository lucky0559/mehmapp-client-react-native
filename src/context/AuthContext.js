import createDataContext from "./createDataContext";
import axios from '../api/axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

const authReducer = (state, action) => {
    switch(action.type) {
        case 'set_token':
            return {token: action.payload, error: ''}
        case 'add_error':
            return {...state, error: action.payload}
        case 'clear_error':
            return { ...state, error: ''}
        default:
            return state;
    }
}

const signUp = dispatch => async({fullname, email, phone_number, student_number, password}) => {

    

    try {

    const response = await axios.post('/signup', {fullname, email, password, phoneNumber:phone_number, studentNumber:student_number});

    return response
    
}

catch(err) {
    if(err.response && err.response.data){
        dispatch({
            type: 'add_error',
            payload: err.response.data.message
        })
    }
    else {
        dispatch({
            type: 'add_error',
            payload: 'Something Went Wrong in Sign Up'
        })
    }
    
}

}

const signIn = dispatch => async({email, password}) => {
    try {
        const response = await axios.post('/signin', {email, password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({
            type: 'set_token',
            payload: response.data.token
        })
    }
    catch(err) {
        if(err.response && err.response.data) {
            dispatch({
                type: 'add_error',
                payload: err.response.data.message
            })
        }
        
    }
}

const signOut = dispatch => () => {

}


const localSignIn = dispatch => () => {

}

const clearError = dispatch => () => {
    dispatch({
        type: 'clear_error'
    })
}


export const { Context, Provider } = createDataContext(
    authReducer,
    {
        signUp,
        signIn,
        signOut,
        localSignIn,
        clearError
    },
    {
        token: null, error: ''
    }
)