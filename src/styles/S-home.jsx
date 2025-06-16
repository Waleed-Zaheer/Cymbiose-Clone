import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: block;
  min-height: 100vh;
  width: 100%;

`;
export const TopHomeSection = styled.section`
  width: 100%;
  display: block;
  text-align: start;
  padding: 80px 0;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;
export const OuterCont = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 12px;

  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { 
    max-width: 720px; 
    padding-top: 1.5rem;
  }
  @media (min-width: 992px)  { max-width: 960px; }
  @media (min-width: 1200px) { max-width: 1140px; }
  @media (min-width: 1400px) { max-width: 1320px; }
`;
export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: rgb(16,24,40);
`;
export const LeftSecContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 540px;
  text-align: start;
`;
export const LeftSectionHeading = styled.h1`
  font-size: 42px;
  font-weight: 600;
  line-height: 1.2;
  color: rgb(39,39,39);
  margin-bottom: 24px;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 1200px) {
    font-size: 2.8rem;
  }
`;
export const LeftSectionPara = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: rgb(74,74,74);
  margin: 0 0 32px;
`;
export const Btn = styled.a`
  background-color: rgb(151, 71, 255);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-weight: 500;
  display: inline-block;
  font-size: 16px;
  transition: 0.3s;
  width:fit-content;
  text-decoration: none;
`;
export const RightSectionCont = styled.div`
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MiddleHomeSection = styled.section`
  width: 100%;
  height: auto;
  display: block;
  text-align: start;
  padding: 48px 0;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: rgb(255,255,255);
  background-color: #3b2767;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px 0;
  }
  @media (min-width: 768px) {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
`;
export const MiddleOuterCont = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 12px;

  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { 
    max-width: 720px; 
    padding-top: 3rem !important;
  }
  @media (min-width: 992px)  { max-width: 960px; }
  @media (min-width: 1200px) { max-width: 1140px; }
  @media (min-width: 1400px) { max-width: 1320px; }
`;
export const MiddleHomeContainer = styled.div`
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(360deg, rgba(255, 255, 255, 0) 9.17%, rgba(253, 252, 251, 0.05) 45.98%,rgba(249, 248, 248, 0.1)100%);
  background-origin: padding-box;
  background-position: 0 0;
  background-repeat: repeat;
  background-size: auto;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
  box-sizing: border-box;
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: rgb(255,255,255);
  padding-bottom: 48px;
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 48px;
  text-align: start;
  text-size-adjust: 100%;


  @media (min-width: 768px) {  
    border-radius: 48px;
  }
  @media (max-width: 768px) {
    padding:24px;
  }

`;
export const MiddleSectionHeading = styled.h3`
  font-size: 23px;
  font-weight: 600;
  line-height: 30px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: block;
  font-family: Poppins, sans-serif;
  font-size: 23px;
  font-weight: 600;
  height: 60px;
  line-height: 30px;
  margin-block-end: 48px;
  margin-block-start: 0px;
  margin-bottom: 48px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  margin-top: 0px;
  text-align: center;
  text-size-adjust: 100%;

  @media (min-width: 768px) {
    margin-bottom: 3rem !important;
  }
  
  @media (max-width: 767px) {
    font-size: 20px;
  }
  


`;
export const MiddleSectionCardCont = styled.div`
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: flex;
  flex-wrap: wrap;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin-top: 0px;
  text-align: start;
  text-size-adjust: 100%;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
  
`;
export const MiddleSectionCard = styled.div`
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: block;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin-top: 0px;
  flex: 0 0 auto;
  max-width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  text-align: start;
  text-size-adjust: 100%;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;
export const MiddleSectionCardInner = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(244, 239, 254, 0.05);
  background-image: none;
  background-origin: padding-box;
  background-repeat: repeat;
  background-size: auto;
  border-width: 0.8px;
  box-sizing: border-box;
  margin-bottom: 24px;
  padding:24px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
`;
export const MiddleSectionCardImg = styled.div`
  align-items:center;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  line-height: 21px;
  overflow-x: hidden;
  overflow-y: hidden;
  text-align: center;
  text-size-adjust: 100%;
`;
export const MiddleSectionCardDesc = styled.div`
  display: block;
  box-sizing: border-box;
`;
export const MiddleSectionCardTitle = styled.h3`
  text-align: inherit;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  margin-block: 16px;
  margin-bottom: 16px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
`;
export const MiddleSectionCardPara = styled.p`
  text-align: inherit;
  font-weight: 400;
  font-size: 13px;
  cursor: inherit;
  border: none;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 1rem;
`;
export const LowerSecContainer = styled.div`

  @media (min-width: 768px) {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  @media (max-width: 767px) {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

`;
export const LowerSecInnerCont = styled.div`
  margin:0 auto;
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
export const LowerSecSpan = styled.span`
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  border: none;
  display: block !important;
  text-transform: uppercase !important;
  margin-bottom: 1rem !important;
`;
export const LowerSecHeading = styled.h3`
  color:rgb(16,24,40);
  text-align: start;
  font-size: 30px;
  font-weight: 600;
  line-height: 34px;
`;
export const LowerSecHeadSpan = styled.span`
  text-align: left;
  font-weight: 600;
  font-size: 30px;
  border: none;
  color:#8054e0;
  box-sizing: border-box;
`;
export const LowerSecLowerCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: -12px;
  margin-left: -12px;
`;
export const LowerSecLowerContLeft = styled.div`
  padding-top: 4px !important;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 1.5rem !important;
  flex: 0 0 auto;
  width: 100%;
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
`;
export const LowerSecLowerContLeftInner = styled.ul`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;
export const LowerSecLowerContRight = styled.div`
  box-sizing: border-box;
  display: block;
  text-align: center !important;
  padding-top: .25rem !important;
  margin-top: 1.5rem !important;
  padding-left: 12px;
  padding-right: 12px;

  @media (min-width: 992px) {
    margin-left: 8.33333333%;
    flex: 0 0 auto;
    width: 50%;
  }
`;
export const LowerCarouselCard = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 3rem !important;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    margin-top: 3rem !important;
    max-width: 720px;
  }
  @media (min-width: 992px) {
    margin-top: 3rem !important;
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    margin-top: 3rem !important;
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    margin-top: 3rem !important;
    max-width: 1320px;
  }


`;
export const LowerCarouselCardCont = styled.div`
  background: #2b2f38;
  border-radius: 40px;
  padding-top: 3rem !important;
  padding-bottom: 28px !important;
  margin-bottom: 3rem !important;

  @media (min-width: 992px) {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  @media (max-width: 991px) {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

`;
export const LowerCarouselCardContHeader = styled.div`
  text-align: center !important;
  margin-bottom: 3rem !important;
  font-size: 14px;
  font-weight: 400;
`;
export const LowerCarouselCardContHeaderSpan = styled.span`
  color:#8054e0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  padding: 4px 8px;
  border:1px solid rgb(222, 226, 230);
  border-radius: 50rem !important;
`;
export const LowerCarouselCardContHeaderTitle = styled.h3`
  font-size: 41px;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 767px) {
    font-size: 22px;
  }

  @media (max-width: 1200px) {
    font-size: 1.75rem;
  }
`;
export const CarouselSlider = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;
export const Track = styled.div.attrs({
  className: 'flex transition-transform duration-500 ease-in-out'
})`
  min-height: 100px;
`;
export const Slide = styled.div`
  width: 100%;
  flex: 0 0 auto;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0;
    padding-bottom: 40px;
  }
  @media (min-width: 768px) {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  @media (min-width: 992px) {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
`;
export const SliderP = styled.p`
  color: white;
  margin-bottom: 1rem;
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  // Use padding instead of margin for better spacing control
  padding: 10px 0;
  // Allow the paragraph to grow with content
  min-height: auto;
  
  @media (min-width: 576px) {
    max-width: 540px;
    margin: 0 auto;
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
export const Dots = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  padding-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  gap: 12px; 
  background: rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 8px 10px inset;
  border-radius: 72px;
  width: fit-content;
`;
export const Dot = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active'
}).attrs(props => ({
  className: [
    'transition-colors duration-300',
    props.active ? 'bg-purple' : 'bg-gray-500'
  ].join(' ')
}))`
    height: 7px;
    width: 7px;
    border-radius: 50%;
    outline: none;
    border: none;
    cursor: pointer;
`;

export const BottomSec = styled.div`
  padding-top: 0px !important;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem !important;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
    padding-bottom: 1.5rem !important;
    padding-top: 1.5rem !important;
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

export const BottomSecHeading = styled.h3`
  display:flex;
  flex-direction: column;
  color: #101828;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  margin-bottom: 8px;

  @media (max-width: 1200px) {
    font-size: 1.75rem;
  }
`;

export const BottomSecSpan = styled.span`
  color: #8054e0;
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  border: none;

`;
export const BottomSecPara = styled.p``;