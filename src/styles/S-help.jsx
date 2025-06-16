import styled from 'styled-components';

export const HWrapper = styled.div`
  margin-bottom: 3rem !important;
  margin-top: 1.5rem !important;

  @media (min-width: 768px) {
    margin-top: 3rem !important;
  }
`;

export const HContainer = styled.div`
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

export const HContainerMain = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 48px;
  padding: 1.5rem !important;
  box-sizing: border-box;
  display: block;

  @media (min-width: 768px) {
    padding: 2rem !important;
  }
`;
export const HHeading = styled.h3`
  color: #8054e0;
  font-size: 34px;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 3rem!important;

  @media (min-width: 1200px) {
    font-size: 1.875rem;
  }
`;
export const HInnerCont1 = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  padding: 1rem;
`;

export const AccordionContainer = styled.div.attrs({
  className: 'space-y-4'
})``;

export const AccordionItem = styled.div.attrs({
  className: 'bg-white rounded-lg shadow-sm'
})`
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const AccordionButton = styled.button.attrs({
  className: 'w-full px-6 py-4 text-left flex justify-between items-center'
})``;

export const AccordionTitle = styled.span.attrs({
  className: 'text-base md:text-lg font-medium text-gray-900'
})``;


export const AccordionIcon = styled.span`
  display: inline-flex;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
  transition: transform 0.2s ease-in-out;
`;

export const AccordionContent = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  padding: 1rem 1.5rem;
  color: #4B5563;
  text-align: start;
`;