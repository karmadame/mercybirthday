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
      <audio controls id="indigo" src="/indigo_c.mp3" autoPlay ref={audioRef} style={{ display: 'none' }} loop />
      <div className={styles.card}>
        <div className={styles.principal}>
          <p className={styles.dulce}>LA DULCE</p>
          <p className={styles.espera}>Espera</p>
          <Image
            src="/elephantp2.png"
            alt="Mercy Arelyz"
            width={250}
            height={240}
            className={styles.sleepBaby}
            priority
          />
          <p className={styles.estaPor}>ESTÁ POR</p>
          <p className={styles.terminar}>Terminar</p>
        </div>
        <div className={styles.info}>
          <Image
            className={styles.ribbon}
            src="/ribbon2.png"
            alt="Mercy Arelyz"
            width={350}
            height={120}
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
            <p className={styles.parentsName}>Rosilda & Miguel</p>
            <p className={styles.sumary}>
              Tenemos el agrado de invitarte a celebrar la llegada
              de nuestra amada bebé
            </p>
            <p className={styles.babyName}>
              Mercy Arelyz
            </p>
            <table className={styles.eventInfo}>
              <tbody>
                <tr>
                  <td className={styles.eventDate}>27 <br />Enero</td>
                  <td className={styles.eventLocation}>Complejo Quinto <br /> Balon, <br /> Ref. a cuadras del <br /> Zool. de Huachipa</td>
                  <td className={styles.eventDate}>5:00 <br /> pm</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.actionButtons}>
              <a href='https://maps.app.goo.gl/w9PMFVDskbMhNmcT7?g_st=iw' target='_blank'><i className="fa fa-map" /> Ver <br />  Ubicación</a>
              <a href='https://api.whatsapp.com/send?phone=+51915141101&text=Hola%20Rosilda%20y%20Miguel%20%F0%9F%8C%9F,%20confirmo%20mi%20asistencia%20al%20Baby%20Shower%20de%20Mercy%20Arelyz,%20nos%20vemos%20el%2027%20de%20enero%20%E2%9D%A4%EF%B8%8F%F0%9F%92%9A' target='_blank'><i className="fa fa-phone" /> Confirmar <br /> Asistencia </a>
            </div>
            <div className={styles.actionButtons}>
              <a href='https://docs.google.com/spreadsheets/d/1VNqAXdCpd5F65Boi3FHW3yTS8C-hKR2rTmw5OExVhFc/edit#gid=0' target='_blank'><i className="fa fa-box-open" /> Lista de regalos</a>
            </div>
          </div>
          <Image
            className={styles.imageOne}
            src="/elephant3.png"
            alt="Mercy Arelyz"
            width={90}
            height={90}
            priority
          />
          <Image
            className={styles.imageTwo}
            src="/elephant2.png"
            alt="Mercy Arelyz"
            width={110}
            height={110}
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
