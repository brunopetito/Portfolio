import { ProjectorScreenChart } from 'phosphor-react';
import projeto2Url from '../assets/diary.jpg';
import diaryLogo from '../assets/Dlogo.svg';
import montyFoto from '../assets/monty.jpg';
import velhaFoto from '../assets/velha.jpg';
import CardProjeto from './CardProjeto';
import gitLogo from '../assets/githubz.svg';

export default function ProjetoContent() {
  return (
    <>
      <div className="flex justify-center content-center align-center gap-2 ">
        <span className="text-2xl font-display sm:text-4xl">Projetos</span>
        <ProjectorScreenChart
          size={28}
          color="#2F2F2F"
          className="self-center "
        />
      </div>

      <section className="mb-12 font-content flex flex-col  ">
        <div className="sm:flex sm:gap-4 sm:m-auto sm:max-w-7xl  sm:px-20 ">
          <div className=" h-full w-full">
            <CardProjeto
              tittle={'Paradoxo de Monty Hall'}
              urlVercel={'https://monty-hall-chi.vercel.app/'}
              description="Esse projeto foi criado a partir de dificuldade de vizualiação dos meus alunos."
              tecnologies={'React e TailwindCSS'}
              url={montyFoto}
            />
          </div>
          <div className=" h-full w-full">
            <CardProjeto
              url={projeto2Url}
              tittle={'Di4ry'}
              urlVercel={'https://di4ry.vercel.app/'}
              description={
                'O  Di4ry foi criado com objetivo de consolidar meus estudos em UI/UX Design,React e TailwindCSS.'
              }
              tecnologies={'React,TailwindCSS e Hygraph'}
            />
          </div>

          <div className=" h-full w-full">
            <CardProjeto
              tittle={'Jogo da Velha'}
              urlVercel={'https://jogo-da-velha-six-pi.vercel.app/'}
              description="Clássico jogo de velha um projeto simples inspirado em layouts de jogo da velha da internet porém responsivo."
              tecnologies={'React e TailwindCSS'}
              url={velhaFoto}
            />
          </div>
        </div>

        <a
          href="https://github.com/brunopetito?tab=repositories"
          target="blank"
          className="flex gap-2 align-middle justify-center mt-6 bg-[#B6B0FF] w-fit m-auto p-3 rounded sm:hover:bg-[#9790E5]"
        >
          <span className="text-[#27217A] font-bold">Mais projetos </span>

          <img src={gitLogo} alt="logo github clicavel" />
        </a>
      </section>
    </>
  );
}
