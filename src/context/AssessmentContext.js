import createDataContext from "./createDataContext";
import axios from '../api/axios'


const assessmentReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}


const submitForm = dispatch => async({user_id, firstName, lastName, student_number, phone_number,presentIssues, describe, problemIssue, radio, when, duration, previousCounseling}) => {
    try {
        const response = await axios.post(`/assessment/${user_id}`, {firstName, lastName, student_number, phone_number,presentIssues, describe, problemIssue, radio, when, duration, previousCounseling})

        return response
    }
    catch(err) {
        console.log(err)
    }
}


export const { Context, Provider } = createDataContext(
    assessmentReducer,
    {
        submitForm
    },
    []
)