import { useNavigate } from "react-router-dom";
import authServices from "../services/auth.services";

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logOut = async () => {

    await authServices.Logout(user._id);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="logOutDiv w-full flex justify-end">
        {" "}
        <button onClick={logOut} className="bg-red-500 text-white p-2 rounded">
          Logout
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <p>Hello, {user?.userName}!</p>
    </div>
  );
};

export default HomePage;
