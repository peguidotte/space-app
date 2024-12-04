import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import imagemBanner from "./assets/banner.png";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import Footer from "./componentes/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 96%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria] = useState(fotos);

  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <AppContainer>
          <Cabecalho />
          <MainContainer>
            <BarraLateral />
            <ConteudoGaleria>
              <Banner
                backgroundImage={imagemBanner}
                texto="A galeria mais completa de fotos do espaço"
              />
              <Galeria fotos={fotosDaGaleria} />
            </ConteudoGaleria>
          </MainContainer>
        </AppContainer>
        <Footer />
      </FundoGradiente>
      
    </>
  );
};

export default App;
