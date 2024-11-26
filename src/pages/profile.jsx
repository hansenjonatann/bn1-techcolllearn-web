import { Link } from "react-router";
import avatar from "../assets/avatar.png";
import logoWithText from '../assets/logo_with_text.png';
const ProfilePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2 flex items-center justify-center ">
        <img src={logoWithText} alt="" />
      </div>
      <div className="bg-primary h-screen ">
        <div className="mt-[30px]">
          <h1 className="text-white font-bold text-[50px] text-center">
            Profile
          </h1>

          <div className="w-[166px] h-[162px] rounded-full mx-auto mt-[20px] bg-[#393939]">
            <img src={avatar} alt="" />
          </div>
          <h1 className="text-center text-black text-[30px] mt-[26px] font-bold">
            Rubin{" "}
          </h1>
          <div className="mx-[75px]">
            <div className="flex flex-col">
              <div className="flex  mt-[20px]  justify-between">
                <h1 className="text-[23px] font-bold ">Edit Profile</h1>
                <Link to={"/editprofile"} className="font-extrabold">
                  {">"}
                </Link>
              </div>
              <hr className="border-2 border-black w-[400px] mt-[15px] " />
              <div className="flex  mt-[20px]  justify-between">
                <h1 className="text-[23px] font-bold ">My Course</h1>
                <Link to={"/"} className="font-extrabold">
                  {">"}
                </Link>
              </div>
              <hr className="border-2 border-black w-[400px] mt-[15px] " />
              <div className="flex  mt-[20px]  justify-between">
                <h1 className="text-[23px] font-bold ">Rate Us</h1>
                <Link to={"/"} className="font-extrabold">
                  {">"}
                </Link>
              </div>
              <hr className="border-2 border-black w-[400px] mt-[15px] " />
              <div className="flex  mt-[20px]  justify-between">
                <h1 className="text-[23px] font-bold ">Log out</h1>
                <Link to={"/"} className="font-extrabold">
                  {">"}
                </Link>
              </div>
              <hr className="border-2 border-black w-[400px] mt-[15px] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
