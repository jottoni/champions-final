import { useState, useEffect } from 'react'
import styles from '../fases do torneio/fases.css'
import Cabecalho from '../cabeçalho/pagina'
import Jogos from '../jogos/jogos'
import Final from '../final/pagina'


function FasesdoTorneio({ fase }) {

    const [ jogos, setJogos ] = useState([])
    const url = `https://raw.githubusercontent.com/jottoni/champions2017/main/${fase}-fasedegrupos.json`

    useEffect(() => {
        const buscarJogos = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setJogos(data)
        }
        buscarJogos()
    }, [url])

    return (
        <section className={styles.jogos}>
            {
                jogos.map( jogo => (
                    <div key={jogo.id} className={styles.jogo}>
                        <Cabecalho jogo={jogo} />
                        <Jogos jogo={jogo} />
                        <Final jogo={jogo} />
                    </div>
                ))
            }
        </section>
    )
}

export default FasesdoTorneio