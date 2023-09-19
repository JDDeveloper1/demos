import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Blog from "../components/blog";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Trusted from "../components/Trusted";
import DigitalCards from "../components/DigitalCards";
// import TrendingSlider from "../components/TrendingSlider";

const Home = () => {
  return (
    <>
      <Head>
        <title>Demo - Inmodocs - By JDDeveloper1</title>
        <meta
          name="description"
          content="landing page template"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>


      <main className="m-10">
        <div className="pt-10">
          <Hero />
        </div>


        <div className="pt-20">
          <SectionTitle
            pretitle="Inmodocs "
            title=" Generando confianza en nuestros clientes ">
            más de
            <span className="text-orange-600">1000 </span >clientes ya confian en nosotros
            al rededor del mundo
          </SectionTitle>
          <Trusted />
        </div>

        <div className="pt-20">
          <Cta />
        </div>

        <div className="pt-20">
          <SectionTitle
            pretitle="Nuestros Servicios -Inmodocs "
            title="Descubre los servicios que tenemos diseñados para ti">
            Selecciona entre los servicios que te preparamos,
            creados para que se adapte a tus necesidades y las de tu empresa
          </SectionTitle>

          <Benefits data={benefitOne} />

          <Benefits imgPos="right" data={benefitTwo} />
        </div>


        {/* 
        <SectionTitle
          pretitle="slider info"
        >Accece a nuestra exclusiva area de clientes</SectionTitle>
        <TrendingSlider /> */}

        <div className="pt-20">
          <SectionTitle className="m-15"
            pretitle="Inmodocs"
            title="¿Por qué necesitas inmodocs?">
          </SectionTitle>

          <DigitalCards />
        </div>


        <div className="pt-20">
          <SectionTitle className="m-15"
            pretitle="Mira este video - Inmodocs"
            title="¿Requieres documentos legales para tu empresa inmobiliaria?">
            En Inmodocs te brindamos cualquiera que necesites. Ofrecemos la realización y gestión de textos legales en este rubro que van
            desde los contratos de compraventa, alquiler, construcción, reclamaciones y más. No dudes en contactarnos.
          </SectionTitle>

          <Video />
        </div>

        <div className="pt-20">
          <SectionTitle className="m-15"
            pretitle="FAQ Inmodocs"
            title="Preguntas Frecuentes de nuestros clientes">
            Encuentre aquí todas las posibles preguntas de nuestros clientes,
            así como tambien las solicitudes de soporte o chat.
          </SectionTitle>
          <Faq />
        </div>


        <div className="py-20">
          <SectionTitle className="m-15"
            pretitle="Blog Inmodocs"
            title="Blog">
            Encuentra aqui todas nuestras publicaciones y actulizaciones de la comunidad
          </SectionTitle>
          <Blog />
        </div>



        <PopupWidget />
      </main>

      <footer>
        <Footer />
      </footer>

    </>
  );
}

export default Home;