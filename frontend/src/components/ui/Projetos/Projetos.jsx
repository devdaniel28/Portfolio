const styles = require('./Projetos.module.css')
import Image from 'next/image'

export default function Projetos({title, desq, img, link, children}) {

    const variableTitle = title
    const variableDesq = desq //* desq == Description
    const variableImage = `/${img}`
    const variableLink =   `${link}`  

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
        </article>
    )
}