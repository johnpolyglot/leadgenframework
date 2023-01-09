import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import LoginPage from "../Screns/Login/Login";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("./Signup");
  };
  const handleCreateCampaigns = () => {
    router.push("./Dashboard");
  };
  return (
    <div className={styles.main_container_dashboard}>
      <LoginPage handleCreateCampaigns={handleCreateCampaigns} handleLogin={handleLogin} />
    </div>
  );
}
