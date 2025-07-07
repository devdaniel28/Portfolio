const styles = require('./Projetos.module.css')
import Image from 'next/image'

export default function Projetos({title, desq, img, tolls}) {

    const variableTitle = title
    const variableDesq = desq //* desq == Description
    const variableImage = `${img}`
    const {
      html = false,
      css = false,
      javascript = false,
      react = false,
      next = false,
      node = false,
      express = false,
      firebase = false,
    } = tolls || {} //Todo: Terminar o componentes Projetos

    return (
        <article className={styles.projetos}>
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

            </section>
        </article>
    )
}