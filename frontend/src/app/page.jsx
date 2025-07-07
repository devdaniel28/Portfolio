import Image from "next/image";

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
          <Projetos title='Projeto 01' desq='Blablablablablabla' img='/dvcDaniel.png'>
            <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="28" height="28" fill="#FFCA28"/>
                  <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E"/>
                    <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E"/>
            </svg>

            <svg height="800px" width="800px" xmlns="http://www.w3.org/2000/svg"
                aria-label="CSS3" role="img"
                viewBox="0 0 512 512"><path fill="#264de4"
                d="M72 460L30 0h451l-41 460-184 52"/><path fill="#2965f1"
                d="M256 37V472l149-41 35-394"/><path fill="#ebebeb"
                d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"/><path fill="#ffffff"
                d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"/>
            </svg>
          </Projetos>
      </section>
    </>
  );
}
