import { useAuth } from "src/store/authContext/authContext";
import { FcGoogle } from "react-icons/fc";
const LoginForm = ({ register }) => {
  const { login } = useAuth();

  return (
    <div>
      <button
        onClick={login()}
        className="flex space-x-5 p-2 items-center border border-gray-400 rounded-md px-5 hover:bg-blue-primary/20"
      >
        {/* <img src="/google-icon.png" alt="google-logg" className="h-12" /> */}
        <FcGoogle size={30} />
        {register ? (
          <div>Register with Google </div>
        ) : (
          <div>Sign in with Google </div>
        )}
      </button>
    </div>
  );
};

export default LoginForm;
