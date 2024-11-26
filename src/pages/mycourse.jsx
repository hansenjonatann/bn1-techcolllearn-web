import Sidebar from "../../components/Sidebar"
import searchnormal1 from '../assets/searchnormal1.png'
import image from '../assets/image.png'
import { Link } from "react-router"

const MyCoursePage = () => {
    const courseList = [

        {
            id: 1,
            title: 'Desain Web' , 
            description :'Dasar - Dasar Penyusunan Desain untuk website',
            video: 7
        },
        {
            id: 2,
            title: 'Pemograman Python',
            description: 'Dasar - dasar , Instalasi ke PC & Pembuatan Aplikasi',
            video: 7
        },
        {
            id: 3,
            title: 'UI/UX For Beginner',
            description: 'Pembelajaran UI/UX untuk pemula',
            video: 5
        },
        {
            id: 4,
            title: 'CorelDraw',
            description: 'xx',
            video: 3
        },
        {
            id: 5,
            title: 'Photo Editing',
            description: 'Belajar edit foto untuk pemula',
            video: 6
        },
        {
            id: 6,
            title: 'Photography Essentials',
            description: 'Photography',
            video: 3
        } , 
        {
            id: 7,
            title: 'Coding for Beginner',
            description: 'Bahasa pemograman , Konsep Dasar & Sintaks',
            video: 6
        },
        {
            id: 8,
            title: 'C++ Programming',
            description: 'Pengembangan dan pelaksanaan projek',
            video: 2
        },
        {
            id: 9,
            title: 'Basic Coding JS',
            description: 'Javascript , Pemograman & Kemampuan Masalah',
            video: 3
        } , 
        {
            id: 10,
            title: 'IBM Machine Learning',
            description : "Analysis algoritma machine learning python",
            video: 5
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <Sidebar/>
            <div className="col-span-3 bg-secondary pt-[32px] pl-[42px]">

               <div className="flex flex-col">
               <div className="flex items-center space-x-[12px]"> 
                    <h1 className="text-[#151D48] font-bold text-[56px]">My Course </h1>
                    <div  className="bg-white rounded-[25px] w-[372px] h-[49px] flex items-center pl-[21px] ">
                        <img src={searchnormal1} alt="" className="w-6 h-6" />
                        <input type="text" placeholder="Search Course" className="pl-[20px] focus:border-none focus:outline-none placeholder:text-[#9AA2B5] " />
                    </div>
                </div>
                <div className="mt-[69px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                       {courseList.map((course , index) => (
                        <Link key={index} to={'/'} className="mt-[50px]">
                             <div className="w-[500px] h-[124px] bg-white rounded-[30px]">
                            <div className="flex items-center ">
                                    <img src={image} alt="" className="mt-[12px] ml-[14px]" />
                                    <div className="flex flex-col mt-[10px] ml-[21px]">
                                        <h1 className="font-bold text-[27px] text-black">{course.title}</h1>
                                        <p className="mt-1 font-medium text-[#9AA2B5] text-[11px]">{course.description} </p>
                                        <p className="text-primary  mt-2 font-medium">{course.video} Videos</p>
                                    </div>
                        

                            </div>
                        </div>
                        </Link>
                       ))}
                    </div>
                </div>
               </div>

            </div>
        </div>
    )
}

export default MyCoursePage 