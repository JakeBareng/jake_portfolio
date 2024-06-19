import headshot1 from '../../assets/headshot_1.png';
import headshot2 from '../../assets/headshot_2.png';
import headshot3 from '../../assets/headshot_3.png';
import styles from "./headshot_styles.module.css" 

export default function Headshot() {
    const images = [
        headshot1,
        headshot2,
        headshot3,
    ]

    return (
        <div className={styles.container}>
            <img src={images[1]} alt="headshot" className={styles.image}/>
        </div>
    )
}
