import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ReactStars from "react-stars";
import styles from "../../styles/YourCampaigns.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function YourCampaigns() {
  return (
    <div className={styles.main_campaigns}>
      <div className={styles.main_campaignsbasicInfoDiv}>
        <div className={styles.campaignBasicInfoTwo}>
          <div className={styles.yourCampaigns_heading}>
            <p className={styles.yourCampaigns_heading}>Your campaigns</p>
            <div className={styles.yourcampaigns_btndiv}>
              <button className={styles.nofilters_btn}>No filters</button>
              <button className={styles.new_btn}>New</button>
            </div>
          </div>

          <div className={styles.yourCampaigns_underline}></div>

          <div className={styles.yourCampaigns_tablehd}>
            <p className={styles.tablethparagraph}>ID</p>
            <p className={styles.tablethparagraph}>NAME</p>
            <p className={styles.tablethparagraph}>TYPE</p>
            <p className={styles.tablethparagraph}>SUPPLIERS</p>
            <p className={styles.tablethparagraph}>BUYERS</p>
          </div>
          <div className={styles.yourCampaigns_underline}></div>

          <div className={styles.yourCampaigns_tabletd}>
            <div className={styles.idDiv}>
              <p className={styles.id}>11360</p>
              <div className={styles.star}>
                <ReactStars count={1} size={24} color2={"#ffd700"} />
              </div>
            </div>

            <div className={styles.nameDiv}>
              <p className={styles.name}>fdg</p>
              <p className={styles.incomplete}>INCOMPLETE</p>
            </div>
            <p className={styles.tabletdparagraph}>Direct Post</p>
            <p className={styles.tabletdparagraph}>0</p>
            <p className={styles.tabletdparagraph}>0</p>
          </div>
          <div className={styles.yourCampaigns_underline}></div>

          <div className={styles.yourCampaigns_tabletd}>
            <div className={styles.idDiv}>
              <p className={styles.id}>11360</p>
              <div className={styles.star}>
                <ReactStars count={1} size={24} color2={"#ffd700"} />
              </div>
            </div>

            <div className={styles.nameDiv}>
              <p className={styles.name}>fdg</p>
              <p className={styles.incomplete}>INCOMPLETE</p>
            </div>
            <p className={styles.tabletdparagraph}>Direct Post</p>
            <p className={styles.tabletdparagraph}>0</p>
            <p className={styles.tabletdparagraph}>0</p>
          </div>
          <div className={styles.yourCampaigns_underline}></div>

          <div className={styles.yourCampaigns_underline}></div>

          <div className={styles.results_div}>
            <p className={styles.results_paragraph}>2 results</p>
          </div>
        </div>
      </div>
    </div>
  );
}
