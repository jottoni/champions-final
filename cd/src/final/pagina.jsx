import styles from '../final/pagina.css';

function Final({ jogo }) {
    return (
        <div className={styles.placar}>
            <div className={styles.mandante_box}>
                {jogo.mandante}
                <img src={`/imagem/${jogo.sigla_mandante.toLowerCase()}.png`} alt={jogo.mandante} />
            </div>
            <div className={styles.placar_box}>
                <span className={styles.gols}>{jogo.gols_mandante}</span>
                x
                <span className={styles.gols}>{jogo.gols_visitante}</span>
            </div>
            <div className={styles.visitante_box}>
                <img src={`/imagem1/${jogo.sigla_visitante.toLowerCase()}.png`} alt={jogo.visitante} />
                {jogo.visitante}
            </div>

            <div className={`${styles.tempo_extra} ${styles.centralizar}`}>
                {jogo.expulsoes === "Sim" && (
                    <div>
                        expulsoes? {jogo.expulsoes} 
                    </div>
                )}
            </div>
        </div>
    );
}

export default Final