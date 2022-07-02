import React from "react";
import { BiCheckDouble, BiPulse, BiUser } from "react-icons/bi";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <section id="about" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Llevamos la comodidad y la máxima calidad a tu escritorio
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Nuestro objetivo es convertir tu ambiente de trabajo y ocio en un
              lugar donde sientas que cada objeto que tengas contigo, te ayudará
              a lograr lo que te propongas de la mejor manera posible
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <BiCheckDouble className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  MEJORA
                </h2>
                <p className="leading-relaxed text-base">
                  Tu experienca tanto a la hora de trabajar, como al momento de
                  jugar con nuestros accesorios que haran tu experiencia lo mas
                  placentera posible.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <BiUser className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  PERSONALIZA
                </h2>
                <p className="leading-relaxed text-base">
                  Cada aspecto de tu setup, ya sea si prefieres un estilo sobrio
                  y simple, como si deseas la mejor calidad y belleza al alcance
                  de tu mano.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <BiPulse className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  DISFRUTA
                </h2>
                <p className="leading-relaxed text-base">
                  Cada momento en el que estas en tu setup, como si todo lo que
                  hay ahi son partes importantes para alcanzar lo que sea que te
                  propongas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
