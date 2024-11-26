import Sidebar from "../../components/Sidebar"
import text from '../assets/text.png'

const AboutPage = () => {
    return (
        <div className="grid grid-cols-3">
            <Sidebar/>
            <div className="col-span-2">
                <div className="mt-[178px] flex justify-center">
                   <div className="flex flex-col">
                   <img src={text} alt="" width={502} height={153} className="mx-auto" />
                    <p className="mt-[42px] w-[480px] text-[#9AA2B5] mx-auto">
                    TECHCOLLLEARN is a platform dedicated to fostering innovation, collaboration, and continuous learning in the ever-evolving world of technology. We bring together passionate individuals, aspiring learners, and industry professionals to share knowledge, develop skills, and create impactful solutions.
                    </p>
                    <h1 className="mt-[167px] text-[56px] font-bold mx-auto ">
                    Improving lives through learning
                    </h1>
                    <p className="text-[#9AA2B5] text-center">
                    Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.
                    </p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage