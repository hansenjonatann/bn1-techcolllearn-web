const InputField = ({name , label , type    , placeholder}) => {
    return (
        <div className="mt-[48px]">
        <label htmlFor={name} className="text-white font-black text-[30px] pl-[10px]">{label}</label>
        <input type={type} className="w-full rounded-[20px] bg-secondary h-14 pl-[15px]" placeholder={placeholder}>

        </input>
    </div>
    )
}

export default InputField  