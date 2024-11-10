import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import styles from '@/styles/About.module.css';

const About = () => (
    <>
        <Navbar />
        <main className={styles.main}>
            <h1>About Us</h1>
            <p>We are a company dedicated to delivering quality and excellence.</p>
        </main>
        <Footer />
    </>
);

export default About;