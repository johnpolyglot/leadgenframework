import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import logo from "../../public/logo.png";
import campaignsIcon from "../../public/campaigns.png";
import profile from "../../public/profile.png";
import styles from "../../styles/CreateCampaigns.module.css";
import Navbar from "../Navbar/Navbar"

const inter = Inter({ subsets: ["latin"] });

export default function CreateCampaigns() {
  return (
    

      <div className={styles.main_campaigns}>
        <div className={styles.campaigns_page}>
          <Image src={campaignsIcon} />

          <div className={styles.campaigns_page_paragraph}>
            <p>
              Campaigns are super easy to set up! To help you get started,
              please check out the following articles:
            </p>
            <ul>
              <li className={styles.ul_text_paragraph}>Lead Prosper Quick Demo</li>
              <li className={styles.ul_text_paragraph}>Lead Prosper New Campaign Checklist</li>
              <li className={styles.ul_text_paragraph}>
                How to get the best support when building your first campaign
              </li>
            </ul>

            <p className={styles.campaigns_page_bottom_paragraph}>
              Need more help, advice or a second look at your campaigns? Please
              read this article to learn more about how to get the best support.
            </p>
          </div>
          <div>
            <button className={styles.campaigns_btn}>+ Create your first campaign</button>
          </div>
        </div>
      </div>
  );
}
