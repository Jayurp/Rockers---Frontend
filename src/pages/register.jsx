import { useForm } from "react-hook-form";
import authServices from "../services/auth.services";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Call your registration API here with the form data
    const userData = {
      userName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
    };

    const response = await authServices.Register(userData);
    if (response.success) navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded w-125"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}

          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded w-125"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span>This field is required</span>}

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

          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 rounded w-125"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && <span>This field is required</span>}

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
