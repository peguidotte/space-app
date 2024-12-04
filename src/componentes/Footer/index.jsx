import styled from "styled-components";

const FooterStyled = styled.footer`
    background-color: #041833;
    color: #d9d9d9;
    text-align: center;
    margin: 40px 0 0 0;
    padding: 6px 0;
    bottom: 0;
    width: 100%;
`;

const Footer = () => {
    return (
        <FooterStyled>
            <p>© 2023 Space App. All rights reserved.</p>
        </FooterStyled>
    );
};

export default Footer;