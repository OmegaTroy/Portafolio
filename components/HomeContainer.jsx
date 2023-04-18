import BtnContact from "./BtnContact";
import BtnCv from "./BtnCv";
import Luna from "./Luna";

export const HomeContainer = () => {

  return (
    <section className="w-full h-full relative mt-12">
      <Luna/>
      <article className="absolute top-44 left-12">
        <h1 className="text-3xl text-FV m-5">
          Hola Soy 
          <spam className="text-secundario text-5xl"> Julián Iocco</spam>
        </h1>
        <h2 className="text-2xl dark:text-FL text-FO ">
          Programador web con +1 año de experiencia desarrollando productos digitales
        </h2>
      </article>
      <BtnContact/>
      <BtnCv/>
    </section>
  );
}
