'use client';

import Image from "next/image"

import styles from "@/styles/pages/home.module.scss"
import NavBar from "@/components/NavBar"
import { useState } from "react"
import Head from "./head";


export default function Home() {
  const [amount, setAmount] = useState(1)


  return (
    <>
      
      <Head />
      <main className={styles.main}>
        <NavBar />
        <div className={styles.content}>
        <div className={styles.product}>
            <div className={styles.product_image}>
              <div className={styles.product_image_wrapper}>
              <Image src="/coldplay.jpeg" alt="Product" width={450} height={300} className={styles.img} style={{
              borderRadius: '10px'
                }} />
              </div>
              <div className={styles.product_image_gallery}>
                <div className={styles.product_image_gallery_wrapper}>
                  <div className={styles.product_image_gallery_item}>
                  <Image src="/coldplay.jpeg" alt="Product" width={100} height={100} className={styles.img} style={{
                    borderRadius: '10px'
                    }} />
                  </div>
                  <div className={styles.product_image_gallery_item}>
                  <Image src="/coldplay.jpeg" alt="Product" width={100} height={100} className={styles.img} style={{
                    borderRadius: '10px'
                    }} />
                  </div>
                  <div className={styles.product_image_gallery_item}>
                  <Image src="/coldplay.jpeg" alt="Product" width={100} height={100} className={styles.img} style={{
                    borderRadius: '10px'
                    }} />
                  </div>
                  <div className={styles.product_image_gallery_item}>
                  <Image src="/coldplay.jpeg" alt="Product" width={100} height={100} className={styles.img} style={{
                    borderRadius: '10px'
                    }} />
                    </div>

                </div>
                </div>
          </div>
          
            <div className={styles.product_info}>
              <h3 className={styles.product_brand}>ColdPlay</h3>
              <h1 className={styles.product_name}>
                Viva La Vida
            </h1>
              <p className={styles.product_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.
              </p>
              <div className={styles.product_price}>
                <div className={styles.product_price_wrapper}>
                <span className={styles.product_price_value}>R$ 1.199,90</span>
                <div className={styles.product_price_percentage_descount}>
                  <span className={styles.product_price_percentage_descount_value}>-10%</span>
                  </div>
                  </div>
                <span className={styles.product_price_value_old}>1.499,90</span>

              </div>
            <div className={styles.product_buy}>
              <div className={styles.product_buy_quantity}>
                  <button type="button" onClick={
                    () => amount === 1 ? setAmount(amount) : setAmount(amount - 1)
                }>-</button>
                  <section className={styles.quantity}>{ amount}</section>
                  <button type="button" onClick={
                    () => setAmount(amount + 1)
                }>+</button>
              </div>
              <button type="button">Comprar</button>
            </div>

            </div>
            </div>
        </div>
      </main>
    </>
  )
}
