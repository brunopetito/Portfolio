import styles from "./Card.module.css"
import euURL from "../assets/eu.png"
import githubURL from "../assets/github.png"
import htmlURL from "../assets/html.svg"
import jsURL from "../assets/js.svg"
import cssURL from "../assets/css.svg"
import reactURL from "../assets/react.svg"
import tailwindURL from "../assets/tailwind.svg"
import gitURL from "../assets/git.svg"





function Card(){
  return(
    <>
      <div className={`${styles.card} slide-in-blurred-bottom text-[#2F2F2F]`} >
        <div className=" w-full flex flex-col align-center">
         <p className="text-xl font-display p-7 text-center ">Desenvolvedor front-end</p>
         <div className=" flex justify-center">
          <img src={euURL} alt="foto bruno petito (muito bonito)" />
         </div>
         <div className="flex justify-center mt-1">
          
            <a href="https://github.com/brunopetito"
            className="flex justify-center align-middle"
            >
              <div className="m-auto ">
              <img src={githubURL} alt=" " />
              </div>
              <p className="pl-[0.1rem] text-sm">brunopetito</p>
              

            </a>
         </div>
         
         <div className="grid grid-cols-3 gap-y-4  m-auto items-center ">
          <div className="flex align-center justify-center">
          <img src={htmlURL} alt="" />

          </div>
          <div className="flex align-center justify-center">
          <img src={jsURL} alt="" />

          </div>
          <div className="flex align-center justify-center">
          <img src={cssURL} alt="" />

          </div>
          <div className="flex align-center justify-center">
         
          <img src={reactURL} alt="" />
          </div>
          <div className="flex align-center justify-center">
          <img src={tailwindURL} alt="" />

          </div>
          <div className="flex align-center justify-center">
          <img src={gitURL} alt="" />

          </div>
          
        
         
         
        


         </div>
         

        </div>
      </div>

    </>
  )
}

export default Card
