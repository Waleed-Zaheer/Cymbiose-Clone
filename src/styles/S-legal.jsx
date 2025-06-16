import styled from 'styled-components';

export const LNwrapper = styled.div`
  margin-bottom: 3rem !important;
  margin-top: 1.5rem !important;

  @media (min-width: 768px) {
    margin-top: 3rem !important;
  }
`;

export const LNContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  margin: 0 auto;
  width: 100%;

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

export const LNContainerMain = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 48px;
  padding: 1.5rem !important;
  box-sizing: border-box;
  display: block;

  @media (min-width: 768px) {
    padding: 2rem !important;
  }
`;
export const LNHeading = styled.h3`
  color: #8054e0;
  font-size: 24px;
  font-weight: bold;
  line-height: normal;

  @media (min-width: 1200px) {
    font-size: 1.875rem;
  }
`;

export const LNInnerCont1 = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  padding: 1rem;
`;

export const LNInnerCont1Top = styled.div`
  span {
    color: var(--darkClr);
    font-size: 24px;
    font-weight: 700;
    line-height: normal;

  }
  p {
    margin-top: .5rem;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

`;
export const LNInnerCont1Bottom = styled.div`
  span {
    color: var(--darkClr);
    font-size: 17px;
    font-weight: 700;
    line-height: normal;
    text-align: start;

  }
  ul {
    list-style-type: disc;
    margin-left: 1.25rem;
    margin-bottom: 1.25rem;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  p {
    margin-top: .5rem;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: start;
  }
  a {
    color: #007bff;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: start;
  }
`;