import { useState } from 'react'
import styles from './oitavas/pagina.css'
import { useEffect } from 'react'

function Oitavas( {fase} ) {

    const [ jogos, setJogos ] = useState([])
    const url =`https://raw.githubusercontent.com/jottoni/champions2017/main/${fase}-fasedegrupos.json`

    useEffect(() => {
        const buscarJogos = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setJogos(data)
        }
        buscarJogos()
    }, [])

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>fase</th>
                    <th>jogo</th>
                    <th>data</th>
                    <th>mandante</th>
                    <th>visitante</th>
                    <th>local</th>
                    <th colSpan={16}>Jogo</th>
                </tr>
            </thead>
            <tbody>
                {
                    jogos.map( jogo => (
                        <tr key={jogo.fase}>
                            <td>{jogo.jogo}</td>
                            <td>{jogo.data}</td>
                            <td>{jogo.mandante}</td>
                            <td>{jogo.visitante}</td>
                            <td>{jogo.local}</td>
                            <td>
                                <span className={styles.direita}>
                                    {jogo.mandante}
                                    <img src={`/imagem/${jogo.mandante.toLowerCase()}.png`} alt={jogo.mandante} />
                                </span>
                            </td>
                            <td className={styles.gols}>{jogo.gols_mandante}</td>
                            <td>X</td>
                            <td className={styles.gols}>{jogo.gols_visitante}</td>
                            <td>
                                <span className={styles.esquerda}>
                                    <img src={`/imagem1/${jogo.visitante.toLowerCase()}.png`} alt={jogo.visitante} />
                                    {jogo.visitante}
                                </span>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Oitavas