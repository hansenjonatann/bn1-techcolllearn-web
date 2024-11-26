import logo from '../src/assets/logo.png'
import programming from '../src/assets/programming.png';
import animation from '../src/assets/animation.png';
import graphic from '../src/assets/graphic.png';
import machinelearning from '../src/assets/machinelearning.png';
import photography from '../src/assets/photography.png';
import { Link, useLocation } from 'react-router';



const ExploreSidebar = () => {
    const exploreList = [
        {
            id: 1,
            label: 'Programming',
            icon: programming,
            path: '/explore'
        }, 
        {
            id: 2,
            label: 'Graphic Design',
            icon: graphic , 
            path: '/explore/graphic'

        },
        {
            id: 3,
            label: 'Photography',
            icon: photography , 
            path: '/explore/photography'
        }, 
        {
            id: 4,
            label: 'Animation',
            icon: animation,
            path: '/explore/animation'
        },
        {
            id: 5,
            label: 'Machine Learning',
            icon: machinelearning, 
            path: '/explore/machinelearning'
        }
    ]
    const location = useLocation()
  return (
    <div className=" bg-primary ">
      <div className="flex justify-center">
        <div className="flex flex-col mt-[72px]">
          <img src={logo} width={189} height={211} className="mx-auto" />
          <h1 className="text-white text-center font-bold text-[32px] mt-[33px]">
            Explore
          </h1>
          {exploreList.map((explore, index) => (
            <div
              key={index}
              className={
                explore.path === location.pathname
                  ? "flex mt-[34px] items-center bg-white rounded-[10px] h-[61px] w-[360px] pl-[34px]  "
                  : "flex mt-[34px] pl-[34px] items-center  "
              }
            >
              <img src={explore.icon} />
              <p
                className={
                  explore.path === location.pathname
                    ? "text-primary ml-[29px]"
                    : "text-white ml-[29px]"
                }
              >
                {explore.label}
              </p>
              <Link
                to={explore.path}
                className="text-primary ml-auto mr-[15px]"
              >
                {"->"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSidebar;
