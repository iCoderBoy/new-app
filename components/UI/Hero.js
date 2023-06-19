import Image from 'next/image'
import { AddAPhoto, Analytics} from '@mui/icons-material'
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import { Typewriter } from 'react-simple-typewriter'

import styles from '../../styles/hero.module.css'


export default function Hero() {
    return(
        <section className={styles.hero}>
            <div className={styles.heroBox}>
                <div className={styles.content}>
                    <h1>Hi. I am <span>
                        <Typewriter
                            words={['<Salikh/>', '<Coder/>', '<Manager/>']}
                            loop={Infinity}
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas dolore quos molestiae at sequi dicta quia hic reprehenderit sapiente quo debitis, asperiores delectus eaque!</p>
                    <a href='#'>Download CV</a>
                    <a href='#'>Contact Me</a>
                </div>
                <div className={styles.imageSide}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={styles.toogleOne}>
                        <span><Analytics fontSize='large'/></span>
                        <h3>FullStack</h3>
                    </div>
                    <div className={styles.toogleTwo}>
                        <span><DesktopMacIcon fontSize='large'/></span>
                        <h3>UI/UX</h3>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}
