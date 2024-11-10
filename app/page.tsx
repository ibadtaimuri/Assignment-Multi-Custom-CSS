import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import styles from "@/styles/Home.module.css"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to My Company</h1>
        <p>We provide top-notch services for our clients.</p>
      </main>
      <Footer />
    </>

  );
}
