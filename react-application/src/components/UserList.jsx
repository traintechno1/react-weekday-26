import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { User } from "./User";
import '../css/UserList.css';

export const UserList = () =>{
    let [users, setUsers] = useState([]);
    
    const processUsers = (users) =>{
        setUsers(users);
        console.log(users);
    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((r)=> processUsers(r.data))
        .catch(e=> {
            toast.error(`${e.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"                
            });
        })
    }, [])

    return(
        <>
            <h3>List Of Users</h3>
            <div className="user-list">
                {
                    users.map((user)=>{
                        return(
                            <User 
                                key={user.id}
                                user={user}
                            />
                        )
                    })
                }
            </div>
            <ToastContainer />
        </>
    )
}