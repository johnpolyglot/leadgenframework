import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import styles from "../../styles/CampaignBasicInfo.module.css";

const steps = ["Basic info", "Fields", "Integrations", "Settings"];

const inter = Inter({ subsets: ["latin"] });

export default function CampaignBasicInfo(props) {
  return (
    <div className={styles.main_campaigns}>
      <div className={styles.main_campaignsbasicInfoDiv}>
        <div className={styles.campaignBasicInfo}>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          <button className={styles.back_btn}>Back</button>
        </div>
        <div className={styles.campaignBasicInfoTwo}>
          <p className={styles.paragraph_campaignBasicInfo}>
            Campaign basic info
          </p>
          <div className={styles.underline_campaignBasicInfo}></div>

          <div className={styles.inputs}>
            <div className={styles.email_input_div}>
              <p className={styles.email_text}>Name</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter campaign name"
              />
              <p className={styles.email_text_public}>Public name</p>
              <input
                className={styles.inputPublic}
                type="text"
                placeholder="Public name"
              />
            </div>
            <div className={styles.email_input_div}>
              <p className={styles.email_text}>Distribution type</p>
              {/* <input className={styles.input} type="" /> */}

              <select
                name="cars"
                id="cars"
                className={styles.dropdown_campaignBasicInfo}
              >
                <option
                  value="volvo"
                  className={styles.dropdown_campaignBasicInfo}
                >
                  Volvo
                </option>
                <option
                  value="saab"
                  className={styles.dropdown_campaignBasicInfo}
                >
                  Saab
                </option>
                <option
                  value="mercedes"
                  className={styles.dropdown_campaignBasicInfo}
                >
                  Mercedes
                </option>
                <option
                  value="audi"
                  className={styles.dropdown_campaignBasicInfo}
                >
                  Audi
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.prev_next_btn_div}>
          <button className={styles.prev_btn}>PREV</button>
          <button onClick={props.handleEditCampaign} className={styles.next_btn}>NEXT</button>
        </div>
      </div>
    </div>
  );
}
