import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import logo from "../../public/logo.png";
import styles from "../../styles/signup.module.css";
import { useRouter } from 'next/navigation';
import Link from 'next/link';



 
const inter = Inter({ subsets: ["latin"] });

export default function Signup() {
  const router = useRouter()


  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <div className={styles.maincontainer}>
    <div className={styles.main_login}>
      <div className={styles.logo_image}>
        <Image src={logo} />
      </div>

      <div className={styles.login_border}>
        <div className={styles.login_heading}>
          <h3 className={styles.login_text}>Create Your Account</h3>
        </div>
        <hr />

        <div className={styles.input_fields}>
          <div className={styles.inputs}>
            <div className={styles.email_input_div}>
              <p className={styles.email_text}>First name</p>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.email_input_div}>
              <p className={styles.email_text}>Last name</p>
              <input className={styles.input} type="text" />
            </div>

            <div className={styles.email_input_div}>
              <p className={styles.email_text}>Company</p>
              <input className={styles.input} type="text" />
            </div>

            <div className={styles.email_input_div}>
              <p className={styles.email_text}>E-mail</p>
              <input className={styles.input} type="email" />
            </div>

            <div className={styles.email_input_div}>
              <p className={styles.email_text}>Phone</p>
              <input className={styles.input} type="number" />
            </div>

            <div className={styles.email_input_div}>
              <p className={styles.email_text}>Password</p>
              <input className={styles.input} type="password" />
            </div>
            <div>
              <p className={styles.pass_contains}>
                Password must contain at least 8 characters, one uppercase, one
                lowercase, one number and one special character
              </p>
            </div>

            <div className={styles.email_input_div}>
              <p className={styles.email_text}>Coupon code</p>
              <input className={styles.input} type="trx" />
            </div>
          </div>
          <div className={styles.remember}>
            <div className={styles.left_div} />
            <div className={styles.right_div_signup}>
              <button className={styles.login_btn}>Register</button>
              <span className={styles.alreadyhaveaccount} >
               <Link href="./Login/Login"> I already have an account </Link>
              </span>
              <p className={styles.terms_condition}>
                {" "}
                By registering you agree to our <span className={styles.termslink}>terms and conditions</span> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
