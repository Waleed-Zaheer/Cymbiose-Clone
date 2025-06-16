import styled from 'styled-components';

export const StoryWrapper = styled.div`
  margin-bottom: 3rem !important;
  margin-top: 1.5rem !important;

  @media (min-width: 768px) {
    margin-top: 3rem !important;
  }
`;
export const StoryContainer = styled.div`
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
export const StoryContainerMain = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 48px;
  padding: 1.5rem !important;
  box-sizing: border-box;
  display: block;

  @media (min-width: 768px) {
    padding: 3rem !important;
  }
`;
export const StoryHeading = styled.h3`
  color: var(--darkClr);
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  margin-block-end: 1rem;

  @media (min-width: 1200px) {
    font-size: 1.875rem;
  }
`;
export const StoryInnerCont1 = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
`;
export const ProfileImg = styled.img`
    border-radius: 50% !important;
    box-sizing: border-box;
    overflow-clip-margin: content-box;
    overflow: clip;
    height: 8rem;
    width: fit-content;
    margin: 0 auto;
    display: block;

    @media (max-width: 576px) {
      height: 6rem;
    }
`;
export const StoryInnerCont2 = styled.div`
  box-sizing: border-box;
  display: block;
`;

export const InnerContHeading = styled.h3`
  color: var(--darkClr);
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
`;

export const InnerContSpan = styled.span`
color:#e299fb;
font-size: 18px;
font-weight: 600;
border: none;
`;

export const InnerContPara = styled.p`
  display: block;
  box-sizing: border-box;
  color: rgb(16, 24, 40);
  text-align: left;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 16px;
  cursor: inherit;
  border: none;
  line-height: normal;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-size-adjust: 100%;
`;