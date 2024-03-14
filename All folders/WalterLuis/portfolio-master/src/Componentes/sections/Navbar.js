import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li> <Nav.Link href='#presentation' > Apresentação </Nav.Link> </li>
                <li> <Nav.Link href='#skills' > Habilidade </Nav.Link> </li>
                <li> <Nav.Link href='#projects' > Projetos </Nav.Link> </li>
            </ul>
            <ul>
                <li> <a a href='https://www.instagram.com/zeeeck_' > <FaInstagram size={40} /> </a></li>
                <li> <a a href='https://github.com/Wallterr' ><FaGithub size={40} /> </a></li>
                <li> <a a href='https://www.linkedin.com/in/wallterluiz/' ><FaLinkedin size={40} /> </a></li>
            </ul>
        </div>
    )
}

export default Navbar