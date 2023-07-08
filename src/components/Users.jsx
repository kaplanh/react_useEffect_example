import { useState, useEffect } from "react";


const getData = () => {
    fetch("api.github.com/users");
}

const Users = () => {
    useEffect(() => {
        getData()
    }, [])
    





    return <div>Users</div>;
};

export default Users;
