import React from 'react'
import ProfilePic from '../assets/profile.png';
import {
  StoryWrapper,
  StoryContainer,
  StoryContainerMain,
  StoryHeading,
  StoryInnerCont1,
  ProfileImg,
  StoryInnerCont2,
  InnerContHeading,
  InnerContSpan,
  InnerContPara
} from '../styles/S-story.jsx';

export default function Story() {
  return (
    <StoryWrapper>
      <StoryContainer>
        <StoryContainerMain>
          <StoryHeading className='mb-3 text-center'>
            Our Story
          </StoryHeading>
          <StoryInnerCont1>
            <ProfileImg alt='Owner' src={ProfilePic} />
            <StoryInnerCont2 className='mt-3'>
              <InnerContHeading className='mb-1 text-center'>
                Brandi Herring
              </InnerContHeading>
              <InnerContSpan className='text-pink-400'>
                CEO & Co-founder
              </InnerContSpan>
              <InnerContPara>
                As both a therapist and a client, I’ve lived the very challenges Cymbiose AI seeks to solve. I know the exhaustion of endless documentation, the frustration of lock of culturally informed care in therapy, and the burnout that drives too many clinicians out of the field. I’ve felt the weight of trying to provide quality care while navigating an inefficient system.
                <br /><br /><br />
                But this isn’t just my story-it’s the reality for countless clinicians and clients. The health care system has long overlooked the impact culture, making it harder for clients to feed truly seen for clinicians to deliver care that resonates
                <br /><br />
                That’s why I co-founded Cymbiose AI. More than just a tool, Cymbiose AI is a culturally informed, AI-powered platform designed to streamline documentation, reduce clinician burnout, and provide insights that enhance therapy across diverse backgrounds. By lifting the administration burden, we empower therapists to focus on what truly matters: their clients.
              </InnerContPara>
            </StoryInnerCont2>
          </StoryInnerCont1>
        </StoryContainerMain>
      </StoryContainer>
    </StoryWrapper>
  )
};
