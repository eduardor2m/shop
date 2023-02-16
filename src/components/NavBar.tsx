import styles from "@/styles/components/navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
         
              <h1>Ignite Shop</h1>
       
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/products">
            <h3>Produtos</h3>

          </Link>
          <Link href="/collections">
            <h3>Coleções</h3>
          </Link>
          <Link href="/about">
            <h3>Sobre</h3>
          </Link>
          <Link href="/contact">
            <h3>Contato</h3>
          </Link>
          
          </div>
        </div>
        <div className={styles.user}>
          
          <Link href="/cart">
            <div className={styles.user_cart}>
              <h3>Cart</h3>
            </div>
          </Link>
          
          <Link href="/user">
            <div className={styles.user_profile}>
              <Image src="/favicon.ico" alt="User" width={24} height={24} />
            </div>
          </Link>

        </div>
      </div>
  
    </nav>
  );
};

export default NavBar;