import type { NextPage } from "next";
import Login from "./login/login";
const Home: NextPage = () => {
  return (
    <div className="bg-ppl w-screen h-screen bg-cover">
      <div className="bg-gradient-to-l from-black w-full h-full">
        <Login />
      </div>
    </div>
  );
};

export default Home;
