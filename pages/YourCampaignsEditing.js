import styles from "../styles/Home.module.css";
import YourCampaigns from "../Screns/YourCampaigns/YourCampaigns";
import Navbar from "../Screns/Navbar/Navbar";
import Sidebar from "../Screns/Sidebar/Sidebar";
import { useRouter } from "next/router";

const YourCampaignsEditing = () => {
  const router = useRouter();

  const handleCreateCampaigns = () => {
    router.push("./Dashboard");
  };

  const handleEditCampaigns = () => {
    router.push("./EditCampign");
  };

  return (
    <div className={styles.main_container_dashboard}>
      <Navbar />

      <div className={styles.main_campaigns}>
        <Sidebar handleCreateCampaigns={handleCreateCampaigns} />
        <YourCampaigns handleEditCampaigns={handleEditCampaigns}/>
      </div>
    </div>
  );
};

export default YourCampaignsEditing;
