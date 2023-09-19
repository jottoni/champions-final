/* eslint-disable react/prop-types */
import styles from './pagina.css'

function Cabecalho ({ jogo }) {
    return (
        <h2 className={styles.titulo2}>
            { jogo.fase } {jogo.jogo} - chave {jogo.chave}
        </h2>
    )
}

export default Cabecalho