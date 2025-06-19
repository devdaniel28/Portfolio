const styles = require('./LinkButton.module.css')

export default function LinkButton({link, text, children}) {
    const vrtext = text
    const vrlink = `${link}`
    
    return (
        <button className={styles.link_button}>
            <a href={vrlink}>
                {children}
                    {vrtext}
            </a>
        </button>
    )
}