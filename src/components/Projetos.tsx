import {
  ProjectorScreenChart,
  CaretCircleDoubleDown,
  GithubLogo
} from 'phosphor-react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import CardProjeto from './CardProjeto';

import { useState } from 'react';
import ProjetoContent from './ProjetoContent';
import MouseWheel from './MouseWheel';

export default function Projetos() {
  const [alturaY, setAlturaY] = useState<Boolean>(false);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -80) {
      setAlturaY(true);
    }
  });

  return (
    <>
      <div
        id="projetosRef"
        className="sm:m-auto sm:bg-slate-100 sm:py-2 text-[#2F2F2F] "
      >
        <div className="mt-3">
          <div className={`mb-2 ${!alturaY ? 'fade-in ' : ' fade-out'}`}>
            <MouseWheel />
          </div>
          <div className={` ${alturaY ? 'fade-in' : 'invisible'}`}>
            <ProjetoContent />
          </div>
        </div>
      </div>
    </>
  );
}
