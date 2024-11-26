import { Link } from "react-router";
import avatar from "../assets/avatar.png";
import logoWithText from '../assets/logo_with_text.png';
import InputField from "../../components/InputField";
const EditProfilePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2 flex items-center justify-center ">
        <img src={logoWithText} alt="" />
      </div>
      <div className="bg-primary  h-screen ">
        <div className="mt-[2px]">
          <h1 className="text-white font-bold text-[50px] text-center">
            Profile
          </h1>

          <div className="w-[150px] h-[145px] rounded-full mx-auto mt-[10px] bg-[#393939]">
            <img src={avatar} alt="" />
          </div>
          <h1 className="text-center text-black text-[30px] mt-[10px] font-bold">
            Rubin{" "}
          </h1>

          <div className="flex flex-col mx-[42px]">
            <form action="">
                <div className="">
                    <label htmlFor="" className="text-black">Username</label>
                    <input type="text" placeholder="Rubin Erika" className="w-full bg-transparent border border-black rounded-[10px] focus:outline-none mt-[4px] placeholder:text-black text-black py-2 px-4" />
                </div>
                <div className="mt-[20px]">
                    <label htmlFor="" className="text-black">Email I'd </label>
                    <input type="email" placeholder="rubinerika01@gmail.com" className="w-full bg-transparent border border-black rounded-[10px] focus:outline-none mt-[4px] placeholder:text-black text-black py-2 px-4" />
                </div>
                <div className="mt-[20px]">
                    <label htmlFor="" className="text-black">Phone Number </label>
                    <input type="tel" placeholder="+62890284372" className="w-full bg-transparent border border-black rounded-[10px] focus:outline-none mt-[4px] placeholder:text-black text-black py-2 px-4" />
                </div>
                <div className="mt-[20px]">
                    <label htmlFor="" className="text-black">Password </label>
                    <input type="password" placeholder="*******" className="w-full bg-transparent border border-black rounded-[10px] focus:outline-none mt-[4px] placeholder:text-black text-black py-2 px-4" />
                </div>

                <div className="mt-[44px] flex ">
                    <button className="bg-blue-800 mx-auto w-[221px] h-[45px] rounded-[10px] text-white text-center">Save changes</button>
                </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
