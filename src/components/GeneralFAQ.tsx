import { type ReactElement, useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'What is a teleprompter, and how does it work?',
    answer: 'A teleprompter is a device that displays a script on reflective glass positioned in front of a camera. The speaker can read the text while maintaining direct eye contact with the audience or camera, ensuring a smooth and natural delivery.'
  },
  {
    question: 'Can the audience see the text on the teleprompter?',
    answer: 'No, the reflective glass is designed to project the script only toward the speaker. The audience or camera cannot see the text, maintaining a professional and distraction-free presentation.'
  },
  {
    question: 'What kinds of scripts can I use with a teleprompter?',
    answer: 'Teleprompters can display various types of scripts, including speeches, news bulletins, interviews, or any prepared text. Scripts are typically loaded into teleprompter software, which allows adjustments like font size, scrolling speed, and formatting.'
  },
  {
    question: 'How do I control the speed of the text?',
    answer: 'The speed of the text is managed by a trained operator using an operating system. The operator is skilled in adjusting the scroll speed to match the speaker\'s natural speaking pace, ensuring a seamless and comfortable delivery.'
  },
  {
    question: 'Does using a teleprompter make my presentation less authentic?',
    answer: 'Not at all! When used correctly, a teleprompter helps you deliver your message smoothly while maintaining eye contact with the audience, making your presentation appear polished and professional.'
  },
  {
    question: 'What are the advantages of using a teleprompter?',
    answer: 'A teleprompter helps speakers stay on script, reduces the need for memorization, maintains a natural delivery, and improves audience engagement by ensuring consistent eye contact.'
  },
  {
    question: 'Can teleprompters be used outdoors?',
    answer: 'Yes, many teleprompters can be used outdoors, though visibility may be affected by bright sunlight. Some models offer anti-glare screens or hoods to improve readability in outdoor settings.'
  }
];

export default function GeneralFAQ(): ReactElement {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">General FAQs</h2>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <Plus className={`h-5 w-5 transform transition-transform ${
                    expandedFaq === index ? 'rotate-45' : ''
                  }`} />
                </button>
                {expandedFaq === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}