import Login from "../component/Login";
import { useAuth } from "../context/AuthContext";
const login = () => {
    const currentUser = useAuth()
    
    return (  
        <Login/>
    );
}
 
export default login;