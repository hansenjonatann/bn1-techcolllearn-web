import { Link } from "react-router"
import Sidebar from "../../components/Sidebar"
import avatar from '../assets/avatar-rect.png'
const CourseTeamPage = () => {

    const cardList = [
        {
            id: 1,
            name: 'Rusel Hutajulu',
            position: 'UI/UX Designer'
        },
        {
            id: 2,
            name: 'Rubin',
            position: 'UI/UX Designer'
        },
        {
            id: 3,
            name: 'Stanley',
            position: 'UI/UX Designer'
        },
        {
            id: 4,
            name: 'Selina',
            position: 'Programmer'
        },
        {
            id: 5,
            name: 'Wesly',
            position: 'Programmer'
        },
        {
            id: 6,
            name: 'Hansen Jonatan',
            position: 'Programmer'
        },
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <Sidebar/>
            <div className="col-span-3 pt-[68px] pl-[69px] bg-secondary ">
                <h1 className="text-[40px] text-[#151D48] font-bold">Course Team </h1>
                <div className="flex justify-center">
                <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-3 mt-[68px] gap-x-[84px] gap-y-[43px]">
                   {cardList.map((item , index) => (
                         <div key={index} className="h-[281px] w-[215px] bg-white rounded-[25px]">
                        <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="w-[191px] h-[170px]">
                                <img src={avatar} alt="" className="mx-auto mt-3" />
                                <h1 className="mt-[12px] text-center font-bold">{item.name}</h1>
                                <p className="text-[#9AA2B5] text-[14px] text-center mt-4 font-medium">{item.position}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                   ))}
                </div>
                <h1 className="text-[#151D48] font-bold text-center text-[50px] mt-[69px]">We share knowledge with the world</h1>
                <p className="text-center font-medium text-[20px] text-[#9AA2B5]">We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.</p>
                </div>
                </div>
            </div>
        </div>
    )
}


export default CourseTeamPage