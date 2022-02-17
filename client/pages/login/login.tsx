import type { NextPage } from "next";
import CustomButton from "./CustomButton";
import { FaKey, FaMailBulk, FaUserAlt } from "react-icons/fa";
import axios from "axios";

const Login: NextPage = () => {
  const handleAPI = () => {
    axios.get("http://localhost:8080/").then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="right-0 absolute w-5/12 flex flex-col justify-center h-full">
      <h1 className="text-white text-6xl mb-4">
        Create an account<span className="text-[#296AC3]">.</span>
      </h1>
      <span className="text-white mb-24">
        Already a member{" "}
        <a href="#" className="text-[#296AC3]">
          Login Here
        </a>
      </span>

      <div className="pr-44 gap-4 flex flex-col ">
        <div className="flex gap-4">
          <CustomButton width="1/2" text="Vorname" icon={<FaUserAlt />} />
          <CustomButton width="1/2" text="Nachname" icon={<FaUserAlt />} />
        </div>
        <CustomButton width="full" text="Email" icon={<FaMailBulk />} />
        <CustomButton width="full" text="Passwort" icon={<FaKey />} />
        <div className="flex gap-4">
          <button
            className="rounded-md border-2 border-stone-400 bg-[#323645]
						text-white w-1/2 py-2"
            onClick={() => handleAPI()}
          >
            Google
          </button>
          <button
            className="rounded-md border-2 border-stone-400 bg-[#296AC3]
						text-white w-1/2"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
