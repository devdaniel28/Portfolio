const styles = require('./Nav.module.css')

export default function Nav({link, text}) {
  const vrlink = `/${link}`

    return (
        <a href={vrlink} className={styles.navlink}>
            {text}
        </a>
    )
}