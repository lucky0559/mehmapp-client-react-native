import createDataContext from "./createDataContext";
import axios from '../api/axios'
import AsyncStorage from "@react-native-async-storage/async-storage";

const authReducer = (state, action) => {
    switch(action.type) {
        case 'set_token':
            return {token: action.payload.token, error: '', email: action.payload.email,firstName: action.payload.firstName, user_id: action.payload.user_id, lastName: action.payload.lastName, student_number: action.payload.student_number, phone_number: action.payload.phone_number}
        case 'add_error':
            return {...state, error: action.payload}
        case 'clear_error':
            return { ...state, error: ''}
        case 'sign_out':
            return { token: null, errorMessage: '', firstName: null, user_id: null, lastName: null, student_number: null, phone_number: null }
        default:
            return state;
    }
}

const signUp = dispatch => async({firstName, lastName, email, phone_number, student_number, password}) => {

    

    try {

    const response = await axios.post('/signup', {firstName, lastName, email, password, phoneNumber:phone_number, studentNumber:student_number});

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
        await AsyncStorage.setItem('email', response.data.email)
        await AsyncStorage.setItem('firstName', response.data.firstName)
        await AsyncStorage.setItem('lastName', response.data.lastName)
        await AsyncStorage.setItem('user_id', response.data.user_id.toString())
        await AsyncStorage.setItem('student_number', response.data.student_number)
        await AsyncStorage.setItem('phone_number', response.data.phone_number)


        console.log(response.data.token)
        dispatch({
            type: 'set_token',
            payload: {
                token: response.data.token,
                email: response.data.email,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                user_id: response.data.user_id,
                student_number: response.data.student_number,
                phone_number: response.data.phone_number,
            }
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

const signOut = dispatch => async() => {
    await AsyncStorage.clear();
    dispatch({
        type: 'sign_out'
    })
}


const localSignIn = dispatch => async() => {
    const token = await AsyncStorage.getItem('token');
    const firstName = await AsyncStorage.getItem('firstName')
    const user_id = await AsyncStorage.getItem('user_id')
    const lastName = await AsyncStorage.getItem('lastName')
    const student_number = await AsyncStorage.getItem('student_number')
    const phone_number = await AsyncStorage.getItem('phone_number')


    if(token && firstName) {
        dispatch({
            type: 'set_token',
            payload: {token, firstName, user_id, lastName, student_number, phone_number}
        })
    }
}

const clearError = dispatch => () => {
    dispatch({
        type: 'clear_error'
    })
}

const check_sendToken = dispatch => async({email}) => {

    try {
        const response = await axios.post('/sendConfirmationToken', {email})
        return response
    }
    catch(err) {
        if(err.response && err.response.data) {
            dispatch({
                type: 'add_error',
                payload: err.response.data.msg
            })
        }
        
    }

}


const reset_Password = dispatch => async({email, new_password, password_token}) => {
    try {
        const response = await axios.put('/changePassword',
        {
            email,
            new_password,
            password_token
        })

        return response
    }
    catch(err) {
        if(err.response && err.response.data) {
            dispatch({
                type: 'add_error',
                payload: err.response.data.msg
            })
        }
    }
}


export const { Context, Provider } = createDataContext(
    authReducer,
    {
        signUp,
        signIn,
        signOut,
        localSignIn,
        clearError,
        check_sendToken,
        reset_Password,
    },
    {
        token: null, error: '' , email: null,firstName: null, user_id: null, lastName: null, student_number: null, phone_number: null
    }
)