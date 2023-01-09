import styles from "../styles/Home.module.css";
import CreateCampaigns from "../Screns/CreateCampaigns/CreateCampaigns"
import Navbar from "../Screns/Navbar/Navbar"
import Sidebar from "../Screns/Sidebar/Sidebar"
import { useRouter } from "next/router";



 const Dashboard = () => {
  const router = useRouter()

  const handleCreateYourFirstCampaigns = () => {
    router.push("./BasicInfo")
  }
  const handleYourCampaigns = () => {
    router.push("./YourCampaignsEditing")
  }


  return (
      
    <div className={styles.main_container_dashboard}>
    <Navbar />

    <div className={styles.main_campaigns}>
      <Sidebar handleYourCampaigns={handleYourCampaigns} />
      <CreateCampaigns handleCreateYourFirstCampaigns={handleCreateYourFirstCampaigns} />

      

    </div>
    
    
    </div>
  );
};

export default Dashboard


