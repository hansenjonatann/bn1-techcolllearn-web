import InputField from "../../components/InputField";
import CustomButton from "../../components/Button";
import logoWithText from '../assets/logo_with_text.png'

const LoginPage = () => {
  return (
    <div className="bg-secondary w-full h-screen grid grid-cols-1 md:grid-cols-3 ">
      <div className="col-span-2 flex justify-center items-center ">
        <img src={logoWithText} alt="" />
      </div>
      <div className="bg-primary  ">
        <div className="flex flex-col">
          <h1 className="uppercase pt-[80px] text-secondary font-black text-center text-[70px] ">
            Login
          </h1>
          <form action="" className="mx-[39px]">
            <InputField
              name={"username"}
              label={"Username"}
              placeholder={"rubinerika"}
              type={"text"}
            />
            <InputField
              name={"password"}
              label={"Password"}
              placeholder={"*******"}
              type={"password"}
            />
            <div className="flex mt-[39px]">
              <CustomButton text={"Login"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
