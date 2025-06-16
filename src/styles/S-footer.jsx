import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 0 12px;
  width: 100%;
  margin: 0 auto;
  display: block;
`;
export const ContainerFluid = styled.div`
  margin:0 auto;
  box-sizing: border-box;
  display: block;
  padding: 0 12px;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }    
`;
export const FooterMainCont = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: rgb(16, 24, 40);
  display: flex;
  flex-wrap: wrap;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 80px;
  line-height: 21px;
  margin-left: -12px;
  margin-right: -12px;
  margin-top: 0px;
  text-align: start;
`;
export const MainLeftCont = styled.div`
  padding-left: 12px;
  padding-right: 12px;

  @media (min-width: 768px) {
    width: 50%;
    flex: 0 0 auto;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 1rem !important;
    flex-shrink: 0;
  }
`;
export const LogoCont = styled.div`
margin-bottom: 8px;
`;
export const LogoImage = styled.img`
  height: 30px;
  width: auto;
`;
export const LeftContPara = styled.p`
  color: rgb(102, 102, 102);
  font-size: 15.5px;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 0px;
  margin-top: 0;
  display:block;

`;
export const MainRightCont = styled.div`
  padding-left: 12px;
  padding-right: 12px;

  @media (min-width: 768px) {
    width: 50%;
    flex: 0 0 auto;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-shrink: 0;
  }
`;
export const MainRightInnerContTop = styled.div`
  display: flex !important;
  box-sizing: border-box;

  @media (min-width: 768px) {
    justify-content: flex-end !important;
  }
`;
export const MainRightInnerContTopInner = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  color: rgb(16, 24, 40);
  column-gap: 16px;
  line-height: 21px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }

  a {
    color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
    text-decoration: underline;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    height: 30px;
    line-height: 21px;
    text-align: start;
  }
  svg {
    color: rgb(102, 102, 102);
    font-size: 20px;
  }
`;

export const MainRightInnerContBottom = styled.div`
  display: flex !important;
  flex-wrap: wrap !important;
  margin-top: 1rem !important;
  box-sizing: border-box;
  gap: 1rem !important;

  @media (min-width: 768px) {
    justify-content: flex-end !important;
  }
`;