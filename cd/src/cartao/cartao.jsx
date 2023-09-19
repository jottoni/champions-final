import { useEffect, useState } from 'react'
import styles from '../cartao/cartao.css'

function Cartao({fase}) {

    const [ grupos, setGrupos ] = useState([])
    const url =`https://raw.githubusercontent.com/jottoni/champions2017/main/${fase}-fasedegrupos.json`

    useEffect(() => {
        const buscarGrupos = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setGrupos(data)
        }
        buscarGrupos()
    }, [])

    return (
        grupos.map( grupo => 
            <section className={styles.card} key={grupo.grupo}>
                <div className={styles.linha} style={{'backgroundColor': grupo.cor}}></div>
                <h2>GRUPO {grupo.grupo}</h2>
                <ul>
                    {
                        grupo.Times.map( time => {
                          return (
                            <li key={time.sigla}>
                                <img src={`/imagem/${time.imagem}.png`} alt={time.Times} />
                                {pais.Times}
                            </li>
                            ) 
                        })
                    }
                </ul>
            </section>
        )
    )
}

export default Cartao