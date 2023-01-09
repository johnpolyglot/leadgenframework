import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import logo from "../../public/logo.png";
import styles from "../../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Login(props) {
  return (
    <div className={styles.maincontainer}>
    <div className={styles.main_login}>
      <div className={styles.logo_image}>
        <Image src={logo} />
      </div>

      <div className={styles.login_border}>
        <div className={styles.login_heading}>
          <h3 className={styles.login_text}>Login</h3>
        </div>
        <hr />

        <div className={styles.input_fields}>
          <div className={styles.inputs}>
            <div className={styles.email_input_div}>
              <p className={styles.email_text}>E-Mail Address</p>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.email_input_div}>
              <p className={styles.email_text}>Password</p>
              <input className={styles.input} type="password" />
            </div>
          </div>

          <div className={styles.remember}>
            <div className={styles.left_div} />
            <div className={styles.right_div}>
              <div className={styles.remember_input}>
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>
              <button onClick={props.handleCreateCampaigns} className={styles.login_btn}>Login</button>
              <span className={styles.forgotpassword}>
                Forgot Your Password?
              </span>
              <p onClick={props.handleLogin}>Don't have an account? Sign up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
