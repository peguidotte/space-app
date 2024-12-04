import styled from "styled-components";
import tags from "./tags.json";

const TagsContainerStyled = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 40px;
  p {
    font-size: 1.5rem;
    color: #d9d9d9;
  }
`;

const TagItemListStyled = styled.li`
  display: inline-block;
  button {
    background: rgba(217, 217, 217, 0.3);
    border: none; 
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    padding: 8px 16px;
    margin: 4px;
    position: relative; 
}

button:hover::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 10px;
    padding: 1px;
    background: linear-gradient( #c98cf1 0%, #7b78e5 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
}
`;

const Tags = () => {
  return (
    <>
      <TagsContainerStyled>
        <p>Busque por tags:</p>
        {tags.length > 0 ? (
          <ul>
            {tags.map((tag, index) => (
              <TagItemListStyled key={index}>
                <button >{tag.titulo}</button>
              </TagItemListStyled>
            ))}
          </ul>
        ) : (
          <p>Nenhuma tag encontrada</p>
        )}
      </TagsContainerStyled>
    </>
  );
};

export default Tags;
