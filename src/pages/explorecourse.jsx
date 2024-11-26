
import ExploreSidebar from '../../components/ExploreSidebar';
import search from '../assets/searchnormal1.png'
import image from '../assets/image.png'
import courserect from '../assets/course-rect.png'
import star from '../assets/star.png'

const ExploreCoursePage = () => {

    const courseList = [
        {
            id: 1,
            label: 'Pemograman Python',
            description: 'Dasar - dasar instalasi ke PC & Pembuatan Aplikasi',
            video: 7
        },
        {
            id: 2,
            label: 'C Programming',
            description: 'bahasa , Konsep & Struktur C Program',
            video: 5,
        },
        {
            id: 3,
            label: 'Coding For Beginner',
            description: 'Bahasa pemogramnan  , konsep dasar & Sintaks',
            video: 6,
        },
        {
            id: 4,
            label: 'Basic Coding Js',
            descripiton: 'Javascript , Pemograman & Kemampuan masalah',
            video: 3
        },
        {
            id: 5,
            label: 'C++ Programming ',
            description: 'Pengembangan & Pelaksanaan Project',
            video: 5
        }
    ]
   

    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
           <ExploreSidebar/>
            <div className='col-span-2 bg-secondary'>
                <div className="mt-[145px] ml-[19px]">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <div className="flex flex-col">
                            <div className='w-[372px] h-[49px] rounded-[25px] border border-primary'>
                                <div className="flex items-center ">
                                    <img src={search} alt="" className='mt-[10px] ml-[21px]' width={24} height={24} />
                                    <input type="text" className='border-none bg-transparent mt-[10px] ml-[20px]  ' placeholder='Search Course' />
                                </div>

                            </div>
                          {courseList.map((course , index) => (
                              <div  key={index} className="w-[500px] h-[124px] mt-[26px] bg-white rounded-[30px]">
                              <div className="flex items-center ">
                                      <img src={image} alt="" className="mt-[12px] ml-[14px]" />
                                      <div className="flex flex-col mt-[10px] ml-[21px]">
                                          <h1 className="font-bold text-[27px] text-black">{course.title}</h1>
                                          <p className="mt-1 font-medium text-[#9AA2B5] text-[11px]">{course.description} </p>
                                          <p className="text-primary  mt-2 font-medium">{course.video} Videos</p>
                                      </div>
                          
  
                              </div>
                              </div>
                          ))}
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col ml-[250px]">
                                <img src={courserect} alt="" width={531} height={485} className=' rounded-xl'  />
                                <div className="flex mt-[38px]">
                                    <img src={star} alt="" />
                                    <h1 className='ml-[16px]'>5.0</h1>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreCoursePage