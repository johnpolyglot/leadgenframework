import styles from "../styles/Home.module.css";
import YourCampaigns from "../Screns/YourCampaigns/YourCampaigns";
import EditCampaign from "../Screns/EditCampaigns/EditCampaigns"
import Navbar from "../Screns/Navbar/Navbar";
import Sidebar from "../Screns/Sidebar/Sidebar";
import { useRouter } from "next/router";

const YourCampaignsEditing = () => {
  const router = useRouter();

  const handleCreateCampaigns = () => {
    router.push("./Dashboard");
  };

  return (
    <div className={styles.main_container_dashboard}>
      <Navbar />

      <div className={styles.main_campaigns}>
        <Sidebar handleCreateCampaigns={handleCreateCampaigns} />
        <EditCampaign />
      </div>
    </div>
  );
};

export default YourCampaignsEditing;
