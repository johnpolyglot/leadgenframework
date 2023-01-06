import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import logo from "../../public/logo.png";
import campaignsIcon from "../../public/campaigns.png";

import profile from "../../public/profile.png";

import styles from "../../styles/Dashboard.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  return (
      <div className={styles.dashboard_logo_div}>
        <div>
          <Image src={logo} className={styles.dashboard_logo} />
        </div>
        <div className={styles.profile_text}>
          <p className={styles.profile_name}>Hi, John</p>
          <Image src={profile} className={styles.dashboard_profile} />
        </div>
      </div>

   
  );
}
