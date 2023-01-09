import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import logo from "../../public/logo.png";
import campaignsIcon from "../../public/campaigns.png";

import profile from "../../public/profile.png";

import styles from "../../styles/Dashboard.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard(props) {
  return (
    <div className={styles.side_menu}>
      <p onClick={props.handleCreateCampaigns} className={styles.courser}>Dashboard</p>
      <p className={styles.courser}>Clients</p>
      <p onClick={ props.handleYourCampaigns}  className={styles.courser}>Campaigns</p>
      <p>Analytics</p>
      <p>Leads</p>
      <p>Logs</p>
      <p>Monitoring</p>
      <p>Exports</p>
      <p>Support Docs</p>
    </div>
  );
}
