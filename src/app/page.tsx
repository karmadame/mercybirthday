"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useRef } from 'react'

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    mainRef.current?.parentElement?.addEventListener('click', () => {
      audioRef.current?.play();
    });
  }, []);
  return (
    <main className={styles.main} ref={mainRef}>
      <audio controls id="indigo" src="/babyshark.mp3" autoPlay ref={audioRef} style={{ display: 'none' }} loop />
      <div className={styles.card}>
        <div className={styles.principal}>
          <p className={styles.dulce}>HOLA!</p>
          <p className={styles.espera}>amig@</p>
          <Image
            src="/mercy2.png"
            alt="Mercy Arelyz"
            width={250}
            height={202}
            className={styles.sleepBaby}
            priority
          />
          <p className={styles.terminar}>Con<br/> esta <br/> sonrisa</p>
        </div>
        <div className={styles.info}>
          <Image
            className={styles.ribbon}
            src="/ribbonhb.png"
            alt="Mercy Arelyz"
            width={350}
            height={95}
            priority
          />
          <Image
            className={styles.startOne}
            src="/start.png"
            alt="Mercy Arelyz"
            width={50}
            height={50}
            priority
          />
          <div className={styles.infoBaby}>
            <p className={styles.sumary}>
              Tengo el agrado de invitarte
            </p>
            <p className={styles.sumary}>
              a celebrar mi primer cumpleaños
            </p>
            <p className={styles.babyName}>
              Mercy Arelyz
            </p>
            <table className={styles.eventInfo}>
              <tbody>
                <tr>
                  <td className={styles.eventDate}>05 <br />Abril</td>
                  <td className={styles.eventLocation}>Calle Flora <br /> Tristán 479, <br /> Magdalena del <br /> Mar</td>
                  <td className={styles.eventDate}>3:30 <br /> pm</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.actionButtons}>
              <a href='https://maps.app.goo.gl/E3YkjCHaHFY78Hqy9' target='_blank'><i className="fa fa-map" /> Ver <br />  Ubicación</a>
              <a href='https://api.whatsapp.com/send?phone=+51915141101&text=Hola%20Rosilda%20y%20Miguel%20%F0%9F%8C%9F,%20confirmo%20mi%20asistencia%20al%20cumple%20años%20de%20Mercy,%20nos%20vemos%20el%2005%20de%20abril%20%E2%9D%A4%EF%B8%8F%F0%9F%92%9A' target='_blank'><i className="fa fa-phone" /> Confirmar <br /> Asistencia </a>
            </div>
          </div>
          <Image
            className={styles.imageOne}
            src="/find.png"
            alt="Mercy Arelyz"
            width={90}
            height={112}
            priority
          />
          <Image
            className={styles.imageTwo}
            src="/shark.png"
            alt="Mercy Arelyz"
            width={110}
            height={125}
            priority
          />
          <Image
            className={styles.startTwo}
            src="/start.png"
            alt="Mercy Arelyz"
            width={50}
            height={50}
            priority
          />
        </div>
      </div >
    </main>
  )
}
