import axios from "axios";

export const getUsers =()=>{
    return axios.get('/users'
    // ,{
    //     params:{
    //         limit:1000
    //     }
    // }
    )
};

export const createUser = ({firstName, lastName, address, email,contact, photo, CV})=>{
    return axios.post('/users',{
        firstName,
        lastName,
        address,
        email,
        contact,
        photo,
        CV
    });
}

export const deleteUser = (userId)=> {
    return axios.delete('/users/${userId}');
}