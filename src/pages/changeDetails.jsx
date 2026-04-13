import { useState } from "react";
import userServices from "../services/user.services";

const UserUpdatePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [userName, setUserName] = useState(user?.userName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

      console.log(userName, email, password);
      const response = await userServices.updateUserDetails({ userName, email, password, id: user._id });

      if (response.success) { 
        alert("User details updated successfully!");
        const updatedUser = { ...user, userName, email };
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }
  };

  return (
    <div>
      <h1>Update User Details</h1>

      <form className="w-full flex flex-col gap-4" onSubmit={handleUpdate}>
        <input type="text" onChange={(e) => setUserName(e.target.value)} className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="New Username" />
        <input type="email" onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="New Email" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="New Password" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Update Details
        </button>
      </form>
    </div>
  );
};

export default UserUpdatePage;
