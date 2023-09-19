import { useEffect, useState } from 'react'
import styles from '../jogos/jogos.css'

function Jogos({ fase, data }) {

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

    var jogosFiltrados = jogos.filter( jogo => jogo.data == data )

    return (
        <section className={styles.jogos}>
            {
                (jogosFiltrados.length > 0) ?
                jogosFiltrados.map( jogo =>( 
                    <div
                        key={jogo.jogo}
                        className={styles.jogo} >
                        <h2 className={styles.titulo2}>
                            { jogo.tipo == "mata-mata" ? jogo.fase : fase } {jogo.jogo} - chave {jogo.chave}
                        </h2>
                        <h3>
                            <span className={styles.data}>{jogo.data}</span>
                            <span className={styles.jogo}>{jogo.jogo}</span>
                            <span className={styles.fase}>{jogo.fase}</span>
                        </h3>
                        <h3 className={styles.placar}>
                            <div className={styles.mandante_box}>
                                {jogo.mandante}
                                <img src={`/imagem/${jogo.mandante.toLowerCase()}.png`} alt={jogo.mandante} />
                            </div>
                            <div className={styles.placar_box}>
                                <span className={styles.gols}>{jogo.gols_mandante}</span>
                                x
                                <span className={styles.gols}>{jogo.gols_visitante}</span>
                            </div>
                            <div className={styles.visitante_box}>
                                <img src={`/imagem1/${jogo.visitante.toLowerCase()}.png`} alt={jogo.visitante} />
                                {jogo.visitante}
                            </div>
                        </h3>
                        <h4>Vencedor: {jogo.vencedor}</h4>
                        <h4>perdedor: {jogo.perdedor}</h4>
                    </div>
                    

                    ))
                    : <h4>Sem jogos no dia </h4>
                } 
            </section>
        )
    }

export default Jogos