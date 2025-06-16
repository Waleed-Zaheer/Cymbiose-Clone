import React from 'react'
import '../styles/S-home.jsx'
import heroBg from '../assets/hero-img-bg.png';
import {
  HomeWrapper,
  TopHomeSection,
  OuterCont,
  HomeContainer,
  LeftSecContainer,
  LeftSectionHeading,
  LeftSectionPara,
  RightSectionCont,
  MiddleHomeSection,
  MiddleOuterCont,
  MiddleHomeContainer,
  MiddleSectionHeading,
  MiddleSectionCardCont,
  MiddleSectionCard,
  MiddleSectionCardInner,
  MiddleSectionCardImg,
  MiddleSectionCardDesc,
  MiddleSectionCardTitle,
  MiddleSectionCardPara,
  LowerSecContainer,
  LowerSecInnerCont,
  LowerSecSpan,
  LowerSecHeading,
  LowerSecHeadSpan,
  LowerSecLowerCont,
  LowerSecLowerContLeft,
  LowerSecLowerContLeftInner,
  Btn,
  LowerSecLowerContRight,
  LowerCarouselCard,
  LowerCarouselCardCont,
  LowerCarouselCardContHeader,
  LowerCarouselCardContHeaderSpan,
  LowerCarouselCardContHeaderTitle,
  CarouselSlider,
  Track,
  Slide,
  SliderP,
  Dots,
  Dot,
  BottomSec,
  BottomSecHeading,
  BottomSecSpan,


} from '../styles/S-home.jsx';

const testimonials = [
  {
    text: "As a clinician, I am looking forward to seeing the development and our role of Cymbiose. I believe it will help many clinicians to prevent burnout and provide more effective therapy services!",
    author: "Kyle H., Marriage and Family Counselor"
  },
  {
    text: "As someone from a diverse background, it's important to me that my therapist understands my cultural values and experiences. I have had too many experiences where that hasn’t been the case. Knowing that my therapist could use Cymbiose AI to enhance their cultural understanding of my experience would make me feel more comfortable and confident in our relationship. It’s also very settling to know my therapist has everything they need all in one space. Seeing that there are clear action and treatment plan sections in Cymbiose AI is reassuring for me as a client to know I’d have a therapist that is holistically focused.",
    author: "Kelly G. Consenting Client"
  },
  {
    text: "As a practicing mental health counselor for over 10 years, a product like this can truly help me save time after sessions. I love the idea of having insights along with the generated notes and hope to see them one day tailored to specific insurance companies. I look forward to integrating this into my practice!",
    author: "Dr. Gabrielle C., Gabby Cares of South Florida"
  },
  {
    text: "After reviewing the demo for Cymbiose AI, I am very interested. I love the cultural consideration area. As a therapist, that is incredibly useful and a good reminder. I would love to try this product once it comes out. Also, the option of being able to choose which note type is amazing!!",
    author: "Alexis S., Licensed Mental Health Counselor"
  },
  {
    text: "Cymbiose AI was demoed to me and I found it extremely amazing! Cymbiose is an innovative app that streamlines note taking for therapists while integrating cultural competence into their documentation. As demand for mental health services continue to grow, I find this solution only boosts therapist efficiency but also improves care for diverse populations. I would be extremely interested in a platform like this for not only therapists but all health care professionals.",
    author: "Chelsea B., Licensed Mental Health Counselor"
  },
  {
    text: "Cymbiose AI is a groundbreaking tool that seamlessly merges innovation and clinical precision, revolutionizing the creation of SOAP notes for therapists. With an intuitive interface and thoughtful curation, it transforms documentation into a swift, effortless process while preserving the nuanced details vital to effective client care. This clinician-crafted software not only enhances efficiency, but also empowers clinicians to gain deeper insight of themselves and their clients, setting a new gold standard in therapeutic documentation practices.",
    author: "Amber J., registered Mental Health Counselor In Training"
  },
  {
    text: "The aspects and features of Cymbiose Ai I find most helpful is transcribing the session and creating a detailed note for me. The cultural competency part is really important to me as well since most of my clients are Black women and couples. Cymbiose Ai would benefit my practice because it would lessen how much time I spend on writing notes, to allow me more time to do other aspects needed to run my business like making content or planning activities for sessions. I think this is a great idea and wishing you all the best of luck, opportunities and opened doors. I think grad school therapy training programs could really benefit from this as well. Or practices with a lot of therapists within.",
    author: "Jordan M., LCMFT"
  },
  {
    text: "I like that the platform offered many different types of notes as well as the option to record sessions. I think it’s a good platform that can help clinicians regain some of their time in order to be able to really focus on the client.",
    author: "Teresa H., Licensed Mental Health Counselor"
  },
  {
    text: "I had the pleasure of receiving a demo and briefly utilizing Cymbiose AI Beta, and I’m genuinely impressed by its potential. This tool is designed to enhance clinical workflows, making documentation and decision-making more efficient while prioritizing ethics and privacy. For fellow clinicians interested in responsibly integrating AI into their practice, Cymbiose AI Beta is definitely worth exploring!",
    author: "Ashley B., MSW, LICSW, LCSW"
  },
  {
    text: "I think Cymbiose is what practioners and their clients need without even knowing it will allow a health culture where both sides can feel the affects of providers having more time back, reducing burnout rates from overwhelm of note taking and documentation etc and ultimately clients/patients will receive care from more grounded, present minded providers. It’s a win win on both sides!",
    author: "Morgan K., Integrative Mental Health Counselor"
  }



];

export default function Home() {

  const [selectedItem, setSelectedItem] = React.useState(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleHeadingClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);  // Reset if clicked again
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <HomeWrapper>

      <TopHomeSection>
        <OuterCont>
          <HomeContainer>
            <div className="mb-5 lg:mb-0 w-full lg:w-5/12">
              <LeftSecContainer>
                <LeftSectionHeading>
                  Free your mind for what matters most: your clients, your care, and yourself.
                </LeftSectionHeading>
                <LeftSectionPara>
                  Culturally informed AI that saves you 16+ hours a month on documentation, that embeds culturally
                  attuned clinical insights, and professional development tools into your everyday practice. Made
                  for therapists by therapists.
                </LeftSectionPara>
                <Btn href="https://cymbiose.ai/join-community" target="_blank" rel="noopener">
                  Join the Community
                </Btn>
              </LeftSecContainer>
            </div>

            <div>
              <RightSectionCont style={{ background: `url(${heroBg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <img
                  alt="Therapist working on laptop"
                  src={("/src/assets/hero-img.gif")}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </RightSectionCont>
            </div>
          </HomeContainer>
        </OuterCont>
      </TopHomeSection>

      <MiddleHomeSection>
        <MiddleOuterCont>
          <MiddleHomeContainer>
            <MiddleSectionHeading>
              Reducing burnout, not your
              <br />
              presence with our key solutions.
            </MiddleSectionHeading>
            <MiddleSectionCardCont >

              <MiddleSectionCard id='card-1'>
                <MiddleSectionCardInner>
                  <MiddleSectionCardImg>
                    <img className="img-fluid" alt="Save 16+ hours per month" src="/src/assets/focus-note.png" />
                  </MiddleSectionCardImg>
                  <MiddleSectionCardDesc>
                    <MiddleSectionCardTitle>
                      Save 16+ hours per month
                    </MiddleSectionCardTitle>
                    <MiddleSectionCardPara>
                      Instantly capture clinical notes using one of our SOAP, DAP, Treatment Plans or Intake templates.Quickly review, session summaries share with supervisors, or send homework directly to clients.
                    </MiddleSectionCardPara>
                  </MiddleSectionCardDesc>
                </MiddleSectionCardInner>
              </MiddleSectionCard>

              <MiddleSectionCard id='card-2'>
                <MiddleSectionCardInner>
                  <MiddleSectionCardImg>
                    <img className="img-fluid" alt="Clinical and cultural insights" src="/src/assets/focus-insights.png" />
                  </MiddleSectionCardImg>
                  <MiddleSectionCardDesc>
                    <MiddleSectionCardTitle>
                      Clinical and cultural insights
                    </MiddleSectionCardTitle>
                    <MiddleSectionCardPara>
                      Whether you're unpacking family dynamics or identity exploration, Cymbiose supports your work with real-time, culturally informed insights  with tailored clinical intervention suggestions gaining valuable insights through our flexible opt-in tools.
                    </MiddleSectionCardPara>
                  </MiddleSectionCardDesc>
                </MiddleSectionCardInner>
              </MiddleSectionCard>

              <MiddleSectionCard id='card-3'>
                <MiddleSectionCardInner>
                  <MiddleSectionCardImg>
                    <img className="img-fluid" alt="Team collaboration" src="/src/assets/focus-team.png" />
                  </MiddleSectionCardImg>
                  <MiddleSectionCardDesc>
                    <MiddleSectionCardTitle>
                      Team collaboration
                    </MiddleSectionCardTitle>
                    <MiddleSectionCardPara>
                      Instantly recap key session insights with AI-generated summaries. Quickly review highlights, share with supervisors, or send to clients for collaborative care.
                    </MiddleSectionCardPara>
                  </MiddleSectionCardDesc>
                </MiddleSectionCardInner>
              </MiddleSectionCard>

            </MiddleSectionCardCont >
          </MiddleHomeContainer>
        </MiddleOuterCont>
      </MiddleHomeSection>

      <LowerSecContainer>
        <LowerSecInnerCont>

          <LowerSecSpan>
            How it works
          </LowerSecSpan>
          <LowerSecHeading>
            <LowerSecHeadSpan>More Time </LowerSecHeadSpan>
            for clients.
            <br />
            More space for you.
          </LowerSecHeading>

          <LowerSecLowerCont>
            <LowerSecLowerContLeft>
              <LowerSecLowerContLeftInner>
                {['Set Up with Ease', 'Focus on the Session', 'Get Clear, Insightful Notes in Seconds'].map((title, index) => (
                  <li
                    key={index}
                    className="text-decoration-none cursor-pointer mb-12"
                    onClick={() => handleHeadingClick(index)} // Pass the index of the clicked item
                  >
                    <div className="box-border">
                      <h3
                        className='mb-2 text-start'
                        style={{
                          fontWeight: selectedItem === index ? 700 : 500, // Apply bold if selected
                          lineHeight: '34px',
                          fontSize: '18px'
                        }}
                      >
                        {title}
                      </h3>
                      <p className='text-gray-500 mb-4 text-start font-sans' style={{ lineHeight: 'normal', fontSize: '14px' }}>
                        {/* Add custom descriptions for each item */}
                        {index === 0 && 'Quickly add a new client or select one you’re already working with. Choose your preferred note template and input method — type, talk, or upload.'}
                        {index === 1 && 'As you show up for your client, Cymbiose captures the details, so you can focus on what matters most- your client.'}
                        {index === 2 && 'Receive a ready-to-review session summary, clinical insights, your formatted note, and an optional action plan to share — all in one place.'}
                      </p>
                    </div>
                  </li>
                ))}
                <Btn className='text-left' href="https://cymbiose.ai/join-community" target="_blank" rel="noopener">
                  Join the Community
                </Btn>
              </LowerSecLowerContLeftInner>
            </LowerSecLowerContLeft>

            <LowerSecLowerContRight>
              <img className="img-fluid mx-auto" alt="work-frame" src="/src/assets/work-frame.png" />
            </LowerSecLowerContRight>

          </LowerSecLowerCont>

        </LowerSecInnerCont>
      </LowerSecContainer>

      <LowerCarouselCard>
        <LowerCarouselCardCont>
          <LowerCarouselCardContHeader>
            <LowerCarouselCardContHeaderSpan>
              Testimonials
            </LowerCarouselCardContHeaderSpan>
            <LowerCarouselCardContHeaderTitle className="text-white text-center my-2 pt-1">
              Hear it from our community
            </LowerCarouselCardContHeaderTitle>
          </LowerCarouselCardContHeader>

          <CarouselSlider>
            {testimonials.length > 0 && (
              <Slide key={currentSlide}>
                <SliderP>{testimonials[currentSlide].text}</SliderP>
                <span className="text-white block mt-2">{testimonials[currentSlide].author}</span>
              </Slide>
            )}
          </CarouselSlider>

          <Dots>
            {testimonials.map((_, i) => (
              <li key={i}>
                <Dot
                  active={i === currentSlide}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              </li>
            ))}
          </Dots>

        </LowerCarouselCardCont>
      </LowerCarouselCard>

      <BottomSec>
        <BottomSecHeading>
          <BottomSecSpan>Automated</BottomSecSpan>
          healthcare tailored to
          <br />
          your patient's needs
        </BottomSecHeading>
        <p className="text-center text-gray-500 text-sm mt-4 mb-4 font-sans font-normal">Capture patient progress, treatment plans, and insights through intelligent, automated systems.</p>
        <Btn href="https://cymbiose.ai/join-community" className='mt-4'>
          Join the Community
        </Btn>
      </BottomSec>

    </HomeWrapper >
  )
};
