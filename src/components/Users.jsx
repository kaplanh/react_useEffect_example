import { useState, useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [first, setfirst] = useState(second)

    const getData = () => {
        const url = "https://api.github.com/users";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    };
    // console.log(users);
    
    useEffect(() => {
        getData();
        
    }, []);

    return (
        <div>
            <button  className="btn btn-danger">
                Click
            </button>
            <h1>Users</h1>
            <div className="row gap-3 mx-auto">
                {users.map((user) => {
                    // console.log(user);
                    const { id, login, avatar_url } = user;
                    return (
                        <div key={id} className="col">
                            <div className="card" style={{ width: "18rem" }}>
                                <img
                                    src={avatar_url}
                                    className="card-img-top rounded-circle"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{login}</h5>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;
