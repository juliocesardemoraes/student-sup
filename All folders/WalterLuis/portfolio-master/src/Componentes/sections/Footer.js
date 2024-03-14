import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer(){
    return(
        <div className={styles.footer}>
             <ul>
                <li> <a a href='https://www.instagram.com/zeeeck_' > <FaInstagram size={40} /> </a></li>
                <li> <a a href='https://github.com/Wallterr' ><FaGithub size={40} /> </a></li>
                <li> <a a href='https://www.linkedin.com/in/wallterluiz/' ><FaLinkedin size={40} /> </a></li>
            </ul>
            <p>wallter.luiz@hotmail.com</p>
            <p>Walter Luiz 2023</p>
        </div>
    )
}

export default Footer