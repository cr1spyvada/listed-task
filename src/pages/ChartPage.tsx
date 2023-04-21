import React from "react";

const SideBar = () => {
  const NavbarArr = [
    { icon: "dashboard_icon.svg", title: "DashBoard" },
    { icon: "transaction_icon.svg", title: "Transactions" },
    { icon: "schedule_icon.svg", title: "Schedules" },
    { icon: "user_icon.svg", title: "Users" },
    { icon: "setting_icon.svg", title: "Settings" },
  ];
  return (
    <div className="w-1/6 h-full lg:px-6 py-12 bg-black text-white rounded-xl hidden justify-between lg:flex flex-col mx-4">
      <div className="flex-[1] text-3xl font-bold">Board.</div>
      <div className="flex-[8] flex flex-col gap-y-4 py-4 justify-start">
        {NavbarArr.map((item, idx) => (
          <button
            key={idx}
            className="font-medium text-lg flex items-center gap-x-5"
          >
            <img src={item?.icon} alt="icon" />
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex-[1]">
        <div className="text-stone-300">Help</div>
        <div className="text-stone-300">Contact Us</div>
      </div>
    </div>
  );
};
const Navbar = () => {
  return (
    <div className="text-black w-full flex justify-between">
      <div className="text-3xl font-bold">Dashboard</div>
      <div className="flex gap-x-8">
        <input className="rounded-xl p-2" type="text" placeholder="Search..." />
        <img src="notification_icon.svg" alt="notifications" />
        <img src="user_profile.svg" alt="user" />
      </div>
    </div>
  );
};
export const ChartPage = () => {
  return (
    <div className="flex bg-stone-100 h-full p-1 lg:p-5">
      <SideBar />
      <div className="px-6 py-4 w-full">
        <Navbar />
      </div>
    </div>
  );
};
