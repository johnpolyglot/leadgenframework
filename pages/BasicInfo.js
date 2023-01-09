import styles from "../styles/Home.module.css";
import CampaignsBasicInfo from "../Screns/CampaignBasicInfo/CampaignBasicInfo";
import Navbar from "../Screns/Navbar/Navbar";
import Sidebar from "../Screns/Sidebar/Sidebar";
import { useRouter } from "next/router";

const BasicInfo = () => {
  const router = useRouter();

  const handleEditCampaign = () => {
    router.push("./YourCampaignsEditing");
  };
  const handleCreateCampaigns = () => {
    router.push("./Dashboard");
  };

  return (
    <div className={styles.main_container_dashboard}>
      <Navbar />

      <div className={styles.main_campaigns}>
        <Sidebar handleCreateCampaigns={handleCreateCampaigns} />
        <CampaignsBasicInfo handleEditCampaign={handleEditCampaign} />
      </div>
    </div>
  );
};

export default BasicInfo;
