import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../../styles/editCamp.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const inter = Inter({ subsets: ["latin"] });

export default function EditCampaigns() {
  const [open, setOpen] = useState(false);
  const [triggerName, setTriggerName] = useState("");
  const [addNewRule, setAddNewRule] = useState(false);
  const [dropdownValues, setDropdownValues] = useState([
    "Fields",
    "Day Time",
    "Supplier",
    "Sell Price",
    "Lead Status",
    "Buyer",
  ]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.main_editcampaigns}>
      <div className={styles.main_editcampaignsbasicInfoDiv}>
        <div className={styles.editcampaignallBasicInfo}>
          <div className={styles.campaignsId}>
            <p className={styles.editCampaigns_text}>Edit campaign</p>
            <p className={styles.editCampaigns_idtext}>ID 11360, abc</p>
          </div>
          <div className={styles.allcampaigns_btn_div}>
            <button className={styles.allcampaigns_btn}>All campaigns</button>
          </div>
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
                className={styles.inputCampaignName}
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

        <div className={styles.campaigns_triggers}>
          <div>
            <p>Campaigns trigger</p>
          </div>
          <Button onClick={handleOpen}>+ NEW</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className={styles.modalNewCampaign}>
              <div className={styles.campaignTriggerHeader}>
                <p className={styles.campaignTriggerText}>
                  Configure Campaign Trigger
                </p>
                <div className={styles.campaignTriggerButtons}>
                  <button className={styles.cancelButton}>Cancel</button>
                  <button className={styles.finishButton}>Finish</button>
                </div>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.inputDiv}>
                  <input
                    className={styles.input}
                    placeholder="Name your trigger"
                    value={triggerName}
                    onChange={(e) => setTriggerName(e.target.value)}
                  />
                </div>

                <div className={styles.ifdiv}>
                  <div className={styles.ifDiv2}>IF</div>

                  <div className={styles.buttonDiv}>
                    <button
                      className={
                        triggerName === ""
                          ? styles.addNewRuleDisable
                          : styles.addNewRule
                      }
                      onClick={() => setAddNewRule(!addNewRule)}
                    >
                      + Add new rule
                    </button>
                    {addNewRule ? (
                      <div className={styles.addNewRuleDropdown}>
                        <span className={styles.dropdownNames}>Fields</span>
                        <span className={styles.dropdownNames}>Day Time</span>
                        <span className={styles.dropdownNames}>Supplier</span>
                        <span className={styles.dropdownNames}>Sell Price</span>
                        <span className={styles.dropdownNames}>
                          Lead Status
                        </span>
                        <span className={styles.dropdownNames}>Buyer</span>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className={styles.ifdiv}>
                  <div className={styles.ifDiv2}>THEN</div>

                  <div className={styles.buttonDiv}>
                    <button className={styles.addNewRuleDisable}>
                      + Add new actions
                    </button>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
