import { useNavigate } from "react-router-dom";
import { useUser, UserButton, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div>
        <h1 onClick={() => navigate("/")}>LOGO</h1>
      </div>
      <div>Nav Elements</div>
      <div className="">
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="text-white bg-purple-500 px-4 py-2 rounded-full hover:bg-purple-700 transition-all duration-200 ease-in "
            type="button"
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
