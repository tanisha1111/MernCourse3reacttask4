import {useEffect, useState} from "react";
import UserData from "./components/UserData.jsx";
import "./App.css";
const API = "https://dummyjson.com/users";

const App = () => {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        const fetchUsers = async (url) => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                
                setUsers(data.users);
                
            } catch (e) {
                console.error(e)
            }
        }
        fetchUsers(API);
    }, [])
    console.log(users);
    return ( 
        <table>
            <thead>
            <tr>
                <th>Sno</th>
                <th>Profile Pic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>E-mail</th>
                <th>Username</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
            </tr>
            </thead>
            <tbody>
           {users && <UserData users={users}/>}
            </tbody>
        </table>
    );
}

export default App;

