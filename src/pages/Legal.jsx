import React from 'react'
import {
  LNwrapper,
  LNContainer,
  LNContainerMain,
  LNHeading,
  LNInnerCont1,
  LNInnerCont1Top,
  LNInnerCont1Bottom,
} from '../styles/S-legal';


export default function Legal() {
  return (
    <LNwrapper>
      <LNContainer>
        <LNContainerMain>
          <LNHeading className='mb-7 text-start'>
            Cymbiose AI & HIPAA Compliance:
            <br />
            Your Health Information is Safe with Us
          </LNHeading>
          <LNInnerCont1>
            <LNInnerCont1Top className='text-start mb-4'>
              <span>Our Commitment to Protecting Your Privacy</span>
              <p>At Cymbiose AI, we understand the sensitivity of your health information. That's why we take HIPAA compliance very seriously. As a HIPAA Business Associate, we're committed to handling your Protected Health Information (PHI) with the utmost care and security.</p>
            </LNInnerCont1Top>
            <LNInnerCont1Bottom className='text-start'>
              <span>What This Means for You:</span>
              <ul>
                <li>
                  <p>We're a Partner in Your Care: Your therapist uses Cymbiose AI to help with their practice, and that means we sometimes handle information about you.</p>
                </li>
                <li>
                  <p>Strict Rules Apply:We follow all the rules set out by HIPAA to make sure your information stays private and secure.</p></li>
                <li>
                  <p>We Have a Contract: We have a formal agreement (called a Business Associate Agreement or BAA) with your therapist, outlining our responsibilities regarding your PHI.</p></li>
              </ul>
              <span>Key Terms:</span>
              <ul>
                <li>
                  <p>Business Associate: That's us! We help healthcare providers (like your therapist) with tasks that involve your health information</p>
                </li>
                <li>
                  <p>Covered Entity: This is your therapist or the organization they work for. They're directly responsible for your care and your PHI.</p>
                </li>
                <li>
                  <p>Protected Health Information (PHI): This is any information about your health, past, present, or future, that can identify you</p>
                </li>
              </ul>
              <span>How We Use and Protect Your Information:</span>
              <ul>
                <li>
                  <p>We only use your PHI as needed to help your therapist provide you with services.</p>
                </li>
                <li>
                  <p>We never share your PHI without your permission, except as required by law or outlined in our agreement with your therapist.</p>
                </li>
                <li>
                  <p>We have strong security measures in place to protect your information from unauthorized access or disclosure.</p>
                </li>
                <li>
                  <p>We work only with trusted partners who also follow HIPAA rules.</p>
                </li>
              </ul>
              <span>Your Rights:</span>
              <p>As a patient, you have rights under HIPAA, including the right to:</p>
              <ul>
                <li>
                  <p>Access your PHI: You can request a copy of your health information that we maintain.</p>
                </li>
                <li>
                  <p>Request corrections: If you believe your information is inaccurate, you can ask us to correct it.</p>
                </li>
                <li>
                  <p>Request restrictions: You can ask us to limit how we use or disclose your PHI.</p>
                </li>
                <li>
                  <p>Receive confidential communications: You can request that we communicate with you about your PHI in a specific way or at a certain location.</p>
                </li>
                <li>
                  <p>Get an accounting of disclosures: You can request a list of certain instances where we've shared your PHI.</p>
                </li>
                <li>
                  <p>File a complaint: If you believe your privacy rights have been violated, you can file a complaint with us or the U.S. Department of Health and Human Services.</p>
                </li>
              </ul>
              <span>Our Responsibilities:</span>
              <ul>
                <li>
                  <p>We have legal obligations to protect your PHI.</p>
                </li>
                <li>
                  <p>We're required to have a BAA with your therapist.</p>
                </li>
                <li>
                  <p>We must implement safeguards to protect your information.</p>
                </li>
                <li>
                  <p>We train our staff on HIPAA rules and respond to any security incidents promptly.</p>
                </li>
              </ul>
              <span>Questions?</span>
              <p>If you have questions about your privacy or how we handle your information, don't hesitate to reach out to us at</p>
              <a href=''>privacy@cymbiose.ai</a>
              <p>By using Cymbiose AI, you're helping to shape the future of mental healthcare. We're grateful for your trust and committed to keeping your information safe.</p>
            </LNInnerCont1Bottom>
          </LNInnerCont1>
        </LNContainerMain>
      </LNContainer>
    </LNwrapper>
  )
};









