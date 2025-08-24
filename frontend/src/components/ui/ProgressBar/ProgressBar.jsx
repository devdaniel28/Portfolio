const styles = require('./ProgressBar.module.css')

export function ProgressBar({valuebar}) {
    const valueBar = valuebar
    const Percentage = `${valueBar}%`

    return (
        <span className={styles.progress}>
            <p>{Percentage}</p>
                <div style={{
                    width: `${valueBar}0px`,
                    height: '15px',
                    background: '#e0ecf0',
                    borderRadius: '12px',
                }} />
        </span>
    )
}