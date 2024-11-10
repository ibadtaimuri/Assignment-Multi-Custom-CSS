import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/styles/Contact.module.css"
const Contact = () => (
    <>
        <Navbar />
        <main className={styles.main}>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us!</p>
            <div className={styles.contactInfo}>
                <h2>Contact Information</h2>
                <p><strong>Phone (Landline):</strong> +92 (000) 000-00000</p>
                <p><strong>Phone (Mobile):</strong> +92 (000) 000-0000</p>
                <p><strong>Email:</strong> <a href="mailto:contact@mycompany.com">info@company.com</a></p>
            </div>
        </main>
        <Footer />
    </>
);

export default Contact;