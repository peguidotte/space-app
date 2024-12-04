/* eslint-disable react/prop-types */
import { useState } from "react";
import styled, { css } from "styled-components";

const Figure = styled.figure`
  width: 448px;
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    position: relative;
    h3 {
      font-family: "GandhiSansBold";
      margin: 0;
      font-size: 16px;
    }
    div {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
    button {
      background-color: transparent;
      border: none;
      color: white;
      font-size: 16px;
      cursor: pointer;
      img {
        margin-right: 8px;
      }
    }
  }

  ${(props) =>
    props.isExpanded &&
    css`
      width: 45%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
    `}
`;

const Overlay = styled.dialog`
  ${(props) =>
    props.isExpanded &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      z-index: 999;
    `}
`;

const Imagem = ({ foto }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Overlay isExpanded={isExpanded} />
      <Figure isExpanded={isExpanded}>
        <img src={foto.path} alt={foto.titulo} />
        <figcaption>
          <h3>{foto.titulo}</h3>
          <footer>
            <p>Fonte/fotógrafo/satélite</p>
            <div>
              <button onClick={handleFavorite}>
                <img
                  src={
                    isFavorite
                      ? "/icones/favorito-ativo.png"
                      : "/icones/favorito.png"
                  }
                  alt="Favoritar"
                />
              </button>
              <button onClick={handleExpanded}>
                <img
                  src={
                    isExpanded 
                    ? "/icones/fechar.png" 
                    : "/icones/expandir.png"
                  }
                  alt="Expandir"
                />
              </button>
            </div>
          </footer>
        </figcaption>
      </Figure>
    </>
  );
};

export default Imagem;
