import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HomePage } from "./HomePage";
import { ChartPage } from "./ChartPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <HomePage /> */}
      <ChartPage />
    </div>
  );
}
