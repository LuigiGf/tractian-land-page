import Head from "next/head";
import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";

import styles from './styles.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>TRACTIAN | Landpage</title>
      </Head>
      <Header />

      <section className={styles.carousel}>
        <h1>Algumas empresas que são nossos clientes</h1>
        <Carousel />
      </section>
      <div className={styles.container}>
        <section className={styles.cardList}>
          <Card title='Software de Manutenção TracOS' imageURL='./images/manutencao.png' bodyContent='O CMMS revolucionário para planejar, acompanhar métricas e conectar-se com sua equipe.'></Card>
          <Card title='Monitoramento Online Smart Trac' imageURL='./images/monitoramento.png' bodyContent='O sistema preditivo mais completo do mercado. Monitore vibração, temperatura e horímetro dos seus ativos.'></Card>
          <Card title='Produto Inovador' imageURL='./images/manufatura.jpg' bodyContent='Este produto irá revolucionar o mercado de monitoramento e manutenção, dando assim mais qualidade para o trabalhador de chão de fábrica.'></Card>
        </section>
      </div>
    </>
  )
}
