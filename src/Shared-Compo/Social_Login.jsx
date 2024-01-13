import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Social_Login = () => {

    let { googleSignIn, setLoading } = useContext(AuthContext);
    let navigate = useNavigate();

    let handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                setLoading(false)
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <p className="mt-3">Or Sign up using</p>
            <div className="flex gap-3 justify-center my-3">
                <img onClick={handleGoogleLogin} className="w-8 cursor-pointer" src="/google.jpg" alt="" />
            </div>
        </div>
    )
}
export default Social_Login;