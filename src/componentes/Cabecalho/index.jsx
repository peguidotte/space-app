import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = () => {
  return (
    <HeaderStyled>
      <img src="\imagens\logo.png" alt="Logo da Alura" />
      <CampoTexto />
    </HeaderStyled>
  );
}

export default Cabecalho;