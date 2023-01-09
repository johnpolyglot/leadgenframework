import styles from "../styles/Home.module.css";
import SignupPage from "../Screns/Signup/Signup";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();

  const handlesignup = () => {
    router.push("./Login");
  };
  const handleCreateCampaigns = () => {
    router.push("./Dashboard");
  };
  return (
    <div className={styles.main_container_dashboard}>
      <SignupPage
        handleCreateCampaigns={handleCreateCampaigns}
        handlesignup={handlesignup}
      />
    </div>
  );
}
