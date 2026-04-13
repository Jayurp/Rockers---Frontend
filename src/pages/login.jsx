import { useForm } from "react-hook-form";
import authServices from "../services/auth.services";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const onSubmit = async (data) => {
      console.log(data);
    const response = await authServices.Login(data);

    if (response.success) {
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/home");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded w-125"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded w-125"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
