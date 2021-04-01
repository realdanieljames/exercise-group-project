const initialState ={
}



const RegisterReducer = (state = initialState, action) => {

    console.log(state)
    switch (action.type) {

        default:
            console.log("Hey we got to the default");
            return state
    }
}

export default RegisterReducer;