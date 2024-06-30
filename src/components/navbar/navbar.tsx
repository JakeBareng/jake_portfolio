import styles from './navbar_style.module.css';
export default function Navbar() {
    return (
        <div className={styles.container}>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#myservices">Services</a></li>
                <li><a href="#techstack">Tools</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}