import styled from "styled-components";

const ItemListaStyled = styled.li`
font-size: 24px;
line-height: 29px;
margin-bottom: 30px;
cursor: pointer;
color: ${props => props.$ativo ? '#7b78e5' : '#D9D9D9'};
font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
display: flex;
align-items: center;
gap: 22px;
`

// eslint-disable-next-line react/prop-types
const ItemNavegacao = ({ iconeAtivo, iconeInativo, ativo = false, children }) => {
  return (
    <ItemListaStyled $ativo={ativo}>
        <img src={ativo ? iconeAtivo : iconeInativo} alt='' />
        {children}
    </ItemListaStyled>
  );
}

export default ItemNavegacao;