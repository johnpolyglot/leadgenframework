import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Login from "../Screns/Login/Login";
import Signup from "../Screns/Signup/Signup";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/router";


export default function Home() {

  const router = useRouter()

  const handlesignup = () => {
    router.push("./Login")
  }
  const handleCreateCampaigns = () => {
    router.push("./Dashboard")
  }
  
  return (
      <div className={styles.main_container_dashboard}>
        {/* <Navbar />

        <div className={styles.main_campaigns}>
          <Sidebar />
          <EditCampaigns />

        </div> */}
        <Signup handleCreateCampaigns={handleCreateCampaigns} handlesignup={handlesignup}   />
    </div>
  );
}
