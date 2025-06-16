import React from 'react';
import {
  HWrapper,
  HContainer,
  HContainerMain,
  HHeading,
  HInnerCont1,
  AccordionContainer,
  AccordionItem,
  AccordionButton,
  AccordionTitle,
  AccordionIcon,
  AccordionContent
} from '../styles/S-help';

const helpItems = [
  {
    id: 1,
    title: "What is Cymbiose AI?",
    content: "Cymbiose AI is an innovative mental health AI platform designed to empower clinicians, enhance cultural competency, prioritize wellness, and improve patient experiences through data-driven insights and automation."
  },
  {
    id: 2,
    title: "How does Cymbiose AI enhance mental healthcare?",
    content: "Cymbiose AI enhances mental healthcare by automating documentation, providing cultural insights, and offering real-time support to therapists, allowing them to focus more on patient care and less on administrative tasks."
  },
  {
    id: 3,
    title: "Who can use Cymbiose AI?",
    content: "Cymbiose AI is designed for licensed mental health professionals, including therapists, counselors, psychologists, and other qualified mental healthcare providers."
  },
  {
    id: 4,
    title: "How do I tell my client about Cymbiose AI?",
    content: "You can inform your clients that Cymbiose AI is a secure, HIPAA-compliant tool that helps you provide better care by streamlining documentation and enhancing cultural competency in your practice."
  },
  {
    id: 5,
    title: "What are the key features of Cymbiose AI?",
    content: "Key features include automated note-taking, cultural competency insights, treatment planning tools, session transcription, and secure documentation management."
  },
  {
    id: 6,
    title: "Is Cymbiose AI secure and HIPAA-compliant?",
    content: "Yes, Cymbiose AI is built with security at its core and is fully HIPAA-compliant, ensuring all patient data is protected and encrypted."
  },
  {
    id: 7,
    title: "Does Cymbiose AI replace human therapists?",
    content: "No, Cymbiose AI is designed to support and enhance the work of human therapists, not replace them. It's a tool to help therapists be more efficient and effective in their practice."
  },
  {
    id: 8,
    title: "How can I access Cymbiose AI?",
    content: "You can access Cymbiose AI by joining our waitlist and completing the onboarding process once you receive your invitation."
  },
  {
    id: 9,
    title: "What devices and platforms does Cymbiose AI support?",
    content: "Cymbiose AI is accessible through web browsers on desktop and mobile devices, ensuring flexibility in how and where you use our platform."
  },
  {
    id: 10,
    title: "Is there a cost to use Cymbiose AI?",
    content: "Please contact our sales team for current pricing information and available subscription plans."
  },
  {
    id: 11,
    title: "How can I get support or ask questions?",
    content: "You can reach our support team through our help center, email support, or by scheduling a consultation with our team."
  },
  {
    id: 12,
    title: "How can I stay updated on Cymbiose AI's launch?",
    content: "Sign up for our newsletter and follow us on social media to receive the latest updates about Cymbiose AI's launch and developments."
  },
  {
    id: 13,
    title: "How do I join the waitlist?",
    content: "You can join our waitlist by filling out the registration form on our website and providing your professional credentials."
  }
];

const Accordion = ({ title, content, isOpen, onToggle }) => {
  return (
    <AccordionItem>
      <AccordionButton onClick={onToggle}>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon $isOpen={isOpen}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </AccordionIcon>
      </AccordionButton>
      <AccordionContent $isOpen={isOpen}>
        <p className="text-gray-600">{content}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default function Help() {

  const [openItem, setOpenItem] = React.useState(0);

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <HWrapper>
      <HContainer>
        <HContainerMain>
          <HHeading>Welcome to our Help Center</HHeading>
          <HInnerCont1>
            <AccordionContainer>
              {helpItems.map((item, index) => (
                <Accordion
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  isOpen={openItem === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </AccordionContainer>
          </HInnerCont1>
        </HContainerMain>
      </HContainer>
    </HWrapper>
  )
};

