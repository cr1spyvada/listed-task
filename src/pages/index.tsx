import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HomePage } from "./HomePage";
import { ChartPage } from "./ChartPage";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [login, setLogin] = useState(true);
  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className="min-h-screen">
      {login === true ? <HomePage login={toggleLogin} /> : <ChartPage />}
    </div>
  );
}
