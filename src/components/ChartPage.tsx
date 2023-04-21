import { ApexOptions } from "apexcharts";
import React from "react";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SideBar = () => {
  const NavbarArr = [
    { icon: "dashboard_icon.svg", title: "DashBoard" },
    { icon: "transaction_icon.svg", title: "Transactions" },
    { icon: "schedule_icon.svg", title: "Schedules" },
    { icon: "user_icon.svg", title: "Users" },
    { icon: "setting_icon.svg", title: "Settings" },
  ];
  return (
    <div className="w-1/6 h-screen mb-2 sticky lg:px-6 py-12 bg-black text-white rounded-xl hidden justify-between lg:flex flex-col mx-4">
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
  const cardArray = [
    {
      icon: "revenue_icon.svg",
      bg: "bg-green-100",
      title: "Total Revenues",
      price: "$2,129,430",
    },
    {
      icon: "total_transaction_icon.svg",
      bg: "bg-yellow-100",
      title: "Total Transactions",
      price: "1,520",
    },
    {
      icon: "total_likes_icon.svg",
      bg: "bg-red-100",
      title: "Total Likes",
      price: "9,271",
    },
    {
      icon: "total_users_icon.svg",
      bg: "bg-blue-100",
      title: "Total Users",
      price: "892",
    },
  ];
  const chartData = [
    {
      name: "Guest",
      data: [
        [0, 200],
        [20, 390],
        [40, 200],
        [60, 300],
        [80, 210],
        [100, 420],
      ],
    },
    {
      name: "User",
      data: [
        [0, 100],
        [20, 405],
        [40, 150],
        [60, 450],
        [80, 190],
        [100, 250],
      ],
    },
  ];
  const optionsLineGraph: ApexOptions = {
    colors: ["#E9A0A0", "#9BDD7C"],
    fill: {
      pattern: {
        strokeWidth: 1,
      },
    },
    title: {
      text: "Activities",
      style: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#000000",
      },
    },
    chart: { toolbar: { show: false } },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      x: {
        formatter: function (val) {
          return val.toFixed(1);
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    xaxis: {
      type: "category",
      // categories: [20, 40, 60, 80],
      overwriteCategories: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
    },
  };
  const optionsBarGraph: ApexOptions = {
    labels: ["Basic Trees", "Super Hoodies", "Custom User Pants"],
    colors: ["#98D89E", "#E9A0A0", "#F6DC7D"],
    legend: {
      position: "right",
      fontSize: "24px",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: 180,
        endAngle: 540,
      },
    },
  };
  return (
    <div className="flex bg-stone-100 h-full p-1 lg:p-5">
      <SideBar />
      <div className="px-6 py-2 w-full flex flex-col gap-6">
        <Navbar />
        <div className="flex gap-x-4">
          {cardArray.map((item, idx) => (
            <div
              key={idx}
              className={`flex-1 rounded-xl ${item?.bg} text-black p-4 grid grid-cols-2 grid-rows-3`}
            >
              <img
                className="col-span-1/2 col-start-2 ml-auto "
                src={item?.icon}
                alt="icon"
              />
              <div className="col-span-2 text-lg">{item?.title}</div>
              <div className="col-span-2 text-3xl font-semibold">
                {item?.price}
              </div>
            </div>
          ))}
        </div>
        {typeof window !== "undefined" && (
          <div className="rounded-xl bg-white p-6">
            <Chart
              options={optionsLineGraph}
              series={chartData}
              type="line"
              height={250}
            />
          </div>
        )}
        <div className="flex gap-8">
          <div className="flex-[1] grid grid-cols-2 p-8 bg-white rounded-xl">
            <div className="text-black font-bold text-xl">Top Products</div>
            <div className="text-gray-300 text-right">May - June 2021</div>
            {typeof window !== "undefined" && (
              <div className="col-span-2">
                <Chart
                  type="pie"
                  series={[55, 14, 31]}
                  options={optionsBarGraph}
                />
              </div>
            )}
          </div>
          <div className="flex-[1] grid grid-cols-2 gap-y-2 bg-white rounded-xl p-8">
            <div className="text-black font-bold text-xl p-2">Top Schedule</div>
            <div className="text-gray-300 text-right">See All</div>
            <div className="flex flex-col col-span-2">
              <div className="flex text-black">
                <div className="h-full p-[2px] bg-green-300" />
                <div className="px-2 ">
                  <div className="font-semibold text-lg">
                    Meeting with Suppliers from Kuta Bill
                  </div>
                  <div className="text-gray-400">14.00- 15.00</div>
                  <div className="text-gray-400">
                    at Sunset Road, Kuta, Bali
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col col-span-2">
              <div className="flex text-black">
                <div className="h-full p-[2px] bg-purple-300" />
                <div className="px-2 ">
                  <div className="font-semibold text-lg">
                    Check operation at Giga Factory 1
                  </div>
                  <div className="text-gray-400">18.00- 20.00</div>
                  <div className="text-gray-400">at Central Jakarta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
