import Image from "next/image";

//Todo: fazer o componentes "Projetos"

//! Components
import LinkButton from "@/components/ui/LinkButton/LinkButton";
import Projetos from "@/components/ui/Projetos/Projetos";

export default function Home() {
  return (
    <>
      <section id='topresent'>
        <Image src='/dvcDaniel.png' alt='Foto de Perfil' width={180} height={180} id='img_about'/>
        <h2>Olá, Eu sou o Lucas Daniel</h2>
          <p>Programador Full Stack apaixonado por criar soluções inovadoras e úteis, sempre com o melhor custo-benefício. Especializado em React, Next e tegnologias modernas</p>
        
        <aside>
          <LinkButton link='mailto:dvcdaniel.contato@gmail.com' text='Entre me contato'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
          </LinkButton>
            <LinkButton link='#projects' text='Ver projetos'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-240v-480 520-40Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v200h-80v-200H447l-80-80H160v480h200v80H160ZM584-56 440-200l144-144 56 57-87 87 87 87-56 57Zm192 0-56-57 87-87-87-87 56-57 144 144L776-56Z"/></svg>
            </LinkButton>
        </aside>

      </section>
      
      <section id='about'>
            <h2>Sobre Mim</h2>
              <p> Sou um desenvolvedor Full Stack apaixonado por transformar ideias em soluções criativas, funcionais e com propósito. Tenho uma abordagem prática, centrada na utilidade e na inovação, buscando sempre entregar o máximo valor com eficiência e objetividade. </p>
                <p> Gosto de explorar novas tecnologias, criar experiências marcantes para os usuários e desenvolver projetos que façam a diferença — tanto em escala técnica quanto humana. Acredito que um bom projeto nasce do equilíbrio entre lógica, criatividade e intenção. </p>
                  <p>Atualmente, estou à frente do <strong>Chikitaverso</strong>, um ecossistema digital que une desenvolvimento, diversão e comunidade — incluindo experiências no Roblox, aplicações web e bots inteligentes.</p>
                    <strong>
                      <q>A lógica é a anatomia do pensamento. -  Aristóteles</q>
                    </strong>
      </section>

      <section id='projects'>

      </section>
    </>
  );
}
