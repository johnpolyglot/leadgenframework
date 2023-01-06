import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Login from "../Screns/Login/Login";
import Signup from "../Screns/Signup/Signup";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import Dashboard from "../Screns/Dashboard/Dashboard";
import CreateCampaigns from "../Screns/CreateCampaigns/CreateCampaigns";
import Navbar from "../Screns/Navbar/Navbar";
import Sidebar from "../Screns/Sidebar/Sidebar";
import CampaignBasicInfo from "../Screns/CampaignBasicInfo/CampaignBasicInfo";
import YourCampaigns from "../Screns/YourCampaigns/YourCampaigns";
import EditCampaigns from "../Screns/EditCampaigns/EditCampaigns";

export default function Home() {
  return (
      <div className={styles.main_container_dashboard}>
        <Navbar />

        <div className={styles.main_campaigns}>
          <Sidebar />
          <EditCampaigns />

        </div>
    </div>
  );
}
