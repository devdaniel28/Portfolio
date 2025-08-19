const styles = require('./Projetos.module.css')
import Image from 'next/image'

export default function Projetos({title, desq, img, link, children, codegh}) {

    const variableTitle = title
    const variableDesq = desq //* desq == Description
    const variableImage = `/${img}`
    const variableLink =   `${link}`
    const codeGitHub = `${codegh}`

    return (
        <article className={styles.projetos}>
          <a href={variableLink} target='_blank'>
            <Image
                src={variableImage}
                alt='Imagem do projeto'
                width={0}
                height={0}
                className={styles.projectimg}
            />
            <h2>{variableTitle}</h2>
                <p>{variableDesq}</p>
            <section>
                {children}
            </section>
          </a>
          <a href={codeGitHub} className={styles.code} target='_blank'>
            <img src="/githubsvg.svg" alt="Logo do Github" />
                <p>Codigo</p>
          </a>
        </article>
    )
}