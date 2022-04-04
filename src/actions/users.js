export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USERS_SUCCESS: 'users/get_users_success',
    CREATE_USER_REQUESTS: 'users/create_user_request',
    DELET_USER_REQUEST: 'user/delet_user_request'
        
};

export const getUsersRequest = () => ({
    type: Types.GET_USERS_REQUEST
});

export const getUsersSuccess = ({items})=> ({
    type: Types.GET_USERS_SUCCESS,
    payload:{
        items
    }
});

export const createUserRequest = ({firstName, lastName, address, email, contact, photo, CV })=> ({
    type: Types.CREATE_USER_REQUESTS,
    payload:{
        firstName,
        lastName,
        address,
        email,
        contact,
        photo,
        CV
    }
})


export const deleteUserRequest = (userId)=> ({
    type: Types.DELET_USER_REQUEST,
})