import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
  padding-right: 16px;
`;

const ListaImagensStyled = styled.ul`
  gap: 16px;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));

  li {
    padding: 0;
    list-style: none;
    margin: 0;
  }
`;

// eslint-disable-next-line react/prop-types
const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          {fotos.length > 0 ? (
          
            <ListaImagensStyled>
              {fotos.map((foto, index) => (
                <li key={index}>
                  <Imagem foto={foto}/>
                </li>
              ))}
            </ListaImagensStyled>
            
          ) : (
            <p>Nenhuma foto encontrada</p>
          )}
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
