import { GoHome } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import {
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
  MdOutlineFeedback,
} from "react-icons/md";
import { BiLike, BiVideo } from "react-icons/bi";
import { FaChevronRight, FaRegNewspaper } from "react-icons/fa";
import { HiOutlineFire } from "react-icons/hi";
import { FaYoutube, FaRegFlag } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { PiMusicNoteLight } from "react-icons/pi";
import { TfiCup } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbHelp } from "react-icons/tb";
import { GoHistory } from "react-icons/go";

function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "History",
      icon: <GoHistory />,
    },
    {
      id: 2,
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 3,
      name: "Your Video",
      icon: <BiVideo />,
    },
    {
      id: 4,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 5,
      name: "Liked videos",
      icon: <BiLike />,
    },
  ];
  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <HiOutlineFire />,
    },
    {
      id: 2,
      name: "Music",
      icon: <PiMusicNoteLight />,
    },
    {
      id: 3,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 4,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 5,
      name: "Sports",
      icon: <TfiCup />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "YouTube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "YouTube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 3,
      name: "YouTube Kids",
      icon: <SiYoutubekids />,
    },
  ];
  const sidebarItems5 = [
    {
      id: 1,
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      id: 2,
      name: "Report history",
      icon: <FaRegFlag />,
    },
    {
      id: 3,
      name: "Help",
      icon: <TbHelp />,
    },
    {
      id: 4,
      name: "Send feedback",
      icon: <MdOutlineFeedback />,
    },
  ];

  return (
    <div className="px-6 w-[17%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
      {/* Home */}
      <div className="space-y-3 items-center">
        {sidebarItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />

      {/* You */}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2 hover:bg-gray-200 duration-300 rounded-xl p-1">
          <h1 className="font-semibold">You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />

      {/* Explore */}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold">Explore</h1>
        </div>
        {sidebarItems3.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />

      {/* More from YouTube */}
      <div className="mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold">More from YouTube</h1>
        </div>
        {sidebarItems4.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer text-red-500">
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />

      {/* Setting */}
      <div className="mt-4 space-y-3 items-center">
        {sidebarItems5.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <div>
        <br />
        <span className="text-xs font-semibold text-gray-400">
          About Press Copyright <br />
          Contact us Creators <br />
          Advertise Developers <br />
        </span>
        <br />
        <span className="text-xs font-semibold text-gray-400">
          Terms Privacy Policy & Safety <br />
          How Youtube works <br />
          Test new features <br />
        </span>
        <br />
        <p className="text-xs text-gray-800 mt-1">© 2025 Google LLC</p>
      </div>
    </div>
  );
}

export default Sidebar;
