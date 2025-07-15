import { useNavigate } from "react-router-dom";
import { useUser, UserButton, useClerk } from "@clerk/clerk-react";

const Onboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <div className="flex flex-col justify-center items-center px-4 py-2 bg-background w-full h-full gap-6">
      <div className="flex justify-center items-center flex-col gap-3">
        <h1
          className="text-3xl text-accent text-center "
          onClick={() => navigate("/")}
        >
          Welcome
        </h1>
        <p className="text-center text-accent">
          A Habit Tracking App From The Future
        </p>
      </div>
      <div className="w-full">
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className=" w-full bg-primary text-accent p-4 rounded-full hover:bg-secondary transition-all duration-300 ease-in-out "
            type="button"
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

export default Onboard;
