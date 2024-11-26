const CustomButton = ({text , onclick}) => {
    return (
        <button onClick={onclick} className="w-[363px] h-[65px] bg-secondary rounded-[20px] mx-auto text-primary font-black text-[40px]">{text}</button>
    )
}

export default CustomButton