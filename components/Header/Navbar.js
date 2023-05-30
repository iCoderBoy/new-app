import styles from '../../styles/navbar.module.css' 

export default function Navbar() {
    return(
        <div className={styles.nav}>
            <h3>Coding<span>Hub</span></h3>
            <nav>
                <a href='#'>Home</a>    
                <a href='#'>My Work</a>
                <a href='#'>Blog</a>
                <a href='#'>AboutMe</a>
            </nav>
            <menu>
                <a href='#'>LogIn</a>
                <a href='#'>SignUp</a>
            </menu>
        </div>
    )
}