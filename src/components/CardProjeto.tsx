interface Props {
  url?: string;
  description: string;
  tecnologies: string;
  urlVercel: string;
  tittle?: string;
}

export default function CardProjeto({
  url,

  description,
  tecnologies,
  urlVercel,
  tittle
}: Props) {
  return (
    <a href={urlVercel} target="blank">
      <div
        className="sm:max-w-sm bg-white border border-gray-200   shadow-md mt-8 dark:bg-gray-800 dark:border-gray-700 m-auto
          w-11/12 rounded 
        "
      >
        <img className="rounded-t-sm " src={url} alt="" />

        <div className="p-5 flex-col flex  justify-between  h-full ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {tittle}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            {description}
          </p>
          <div className="inline-flex items-center  text-sm font-medium text-center   rounded-lg ">
            <span className="self-end">
              Tecnologias: <span className="font-bold">{tecnologies}</span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
