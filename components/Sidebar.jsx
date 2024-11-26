import logo from '../src/assets/logo.png'
import dashboard from '../src/assets/dashboard.png'
import explore from '../src/assets/explore.png';
import profile from '../src/assets/profile.png';
import courseteam from '../src/assets/course-team.png';
import book from '../src/assets/book.png';
import about from '../src/assets/about.png';
import { Link, useLocation } from 'react-router';

const  Sidebar = () => {

    const sidebarList = [
        {
            id: 1,
            label: 'Dashboard' , 
            icon: dashboard,
            path: '/'
        }, 
        {
            id: 2,
            label: 'Explore Course',
            icon: explore,
            path: '/explore'
        },
        {
            id: 3,
            label: 'Profile',
            icon: profile,
            path: '/profile'
        }, 
        {
            id: 4,
            label: 'Course Team' , 
            icon: courseteam,
            path: '/courseteam'

        },
        {
            id: 5,
            label: 'My Course',
            icon: book,
            path: '/course'
        },
        {
            id: 6,
            label: 'About',
            icon: about,
            path: '/about'
        }
    ]

    const route = useLocation()
    return (
        <div className="h-full bg-primary w-[415px]">
            <div className="flex flex-col ">
                <img src={logo} alt="" width={189} height={158} className='mx-auto mt-[30px]' />

                <div className="flex w-full justify-center mt-[110px]  ">
                    <div className="flex flex-col">
                        {sidebarList.map((item , index) => (
                            <Link to={item.path} key={item.index} className={location.pathname == item.path ? 'flex w-[200px] mt-[120px] bg-blue-800 items-center' : 'flex  items-center'} >

                                <img src={item.icon} alt="" />
                                <h1>{item.label}</h1>
                            
                            </Link>
                        ))}
                    </div>
                </div>
            </div>   
        </div>
    )


}


export default Sidebar 