import React, { useState } from 'react';
import { 
  HelpCircle, Clock, Video, Users, 
  CreditCard, Award, ChevronDown 
} from 'lucide-react';

const FAQ_ITEMS = [
  {
    icon: <HelpCircle size={22} />,
    question: "What is Code Boomz Academy?",
    answer: "Code Boomz Academy is a premium learning ecosystem designed to bridge the gap between academic knowledge and industry expectations. We provide mentors from top tier companies, project-based learning, and a community of high-achievers. Our mission is to accelerate your career growth with industry-vetted curriculums."
  },
  {
    icon: <Clock size={22} />,
    question: "When are the live classes held?",
    answer: "We understand you are busy. Classes are typically held in late evenings (8 PM onwards) or weekends. This ensures working professionals and students can attend without disrupting their daily commitments. All sessions are recorded for later viewing."
  },
  {
    icon: <Video size={22} />,
    question: "What if I miss a Live lecture?",
    answer: "Life happens! Every live session is recorded in high definition and uploaded to your dashboard within 2 hours. You'll have lifetime access to these recordings, including all updated versions for future batches."
  },
  {
    icon: <Users size={22} />,
    question: "What is the role of the Mentor?",
    answer: "Your mentor is your career architect. Beyond teaching, they provide 1:1 resume reviews, mock interviews, and direct referrals to top tech firms. They help you navigate complex technical challenges and career crossroads."
  },
  {
    icon: <CreditCard size={22} />,
    question: "What are the Code Boomz Academy fees?",
    answer: "We offer competitive pricing with scholarship options and interest-free EMI plans. Since fees vary by specialization and duration, we recommend booking a free career counseling call to get a personalized quote."
  },
  {
    icon: <Award size={22} />,
    question: "Is the certification industry-recognized?",
    answer: "Absolutely. Our certificates are co-branded with industry partners and come with a unique verification ID. Our alumni are currently working at companies like Google, Microsoft, and Amazon, which stands as a testament to our value."
  }
];

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-bg-glow"></div>
      <div className="faq-header text-center mb-8">
        <span className="faq-badge">Find Answers</span>
        <h2 className="faq-title">
          Got <span className="highlight-text">Questions?</span> We have Answers
        </h2>
        <p className="faq-subtitle">
          Everything you need to know about starting your journey with Code Boomz.
        </p>
      </div>

      <div className="faq-grid">
        {FAQ_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`faq-card ${activeFaq === index ? "active" : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <div className="question-left">
                <span className="question-icon">{item.icon}</span>
                <h3>{item.question}</h3>
              </div>
              <span className={`faq-arrow ${activeFaq === index ? "rotate" : ""}`}>
                <ChevronDown size={20} />
              </span>
            </div>
            {activeFaq === index && (
              <div className="faq-answer">
                <div className="answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
