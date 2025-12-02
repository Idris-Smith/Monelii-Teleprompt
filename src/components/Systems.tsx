import { type ReactElement } from 'react';
import SystemCard from './SystemCard';

const systems = [
  {
    title: 'Freestanding System',
    description: 'Flexible setup with a separate tripod-mounted camera.',
    imageUrl: 'https://i.ibb.co/Y7d1VsF/Whats-App-Image-2025-01-25-at-18-51-29.jpg',
    bestFor: 'Video shoots and multi-camera productions',
    faqs: [
      {
        question: 'What type of events is this ideal for?',
        answer: 'It\'s perfect for multi-camera productions or events where flexibility in camera placement is needed.'
      },
      {
        question: 'Can this system be used outdoors?',
        answer: 'Yes, it can be used outdoors as long as the teleprompter is shielded from direct sunlight for better visibility.'
      },
      {
        question: 'How portable is it?',
        answer: 'The system is portable and easy to set up, making it ideal for locations where space is limited or changes frequently.'
      }
    ]
  },
  {
    title: 'On-Board System',
    description: 'Compact design where the camera mounts directly on to the prompter.',
    imageUrl: '/WhatsApp Image 2025-11-24 at 15.54.50_d08eb066.jpg',
    bestFor: 'On-the-go video productions',
    faqs: [
      {
        question: 'What makes this system unique?',
        answer: 'It\'s compact and the camera mounts directly onto the system, making it perfect for solo shoots or small teams.'
      },
      {
        question: 'Is it good for travel?',
        answer: 'Yes, its compact size and lightweight design make it ideal for on-the-go productions.'
      },
      {
        question: 'Which camera types work best?',
        answer: 'It\'s compatible with most DSLR and mirrorless cameras, as well as handycam and broadcast size cameras.'
      }
    ]
  },
  {
    title: 'Presidential System',
    description: 'Dual glass panels for a polished and professional speaking setup.',
    imageUrl: '/WhatsApp Image 2025-11-24 at 15.51.40_f0904213 copy.jpg',
    bestFor: 'Best for formal stage events',
    faqs: [
      {
        question: 'What events is this best suited for?',
        answer: 'It\'s ideal for formal events such as live speeches, award ceremonies, and conferences where maintaining audience connection is critical.'
      },
      {
        question: 'How does the dual glass setup work?',
        answer: 'The reflective glass projects the script, ensuring eye contact with the audience.'
      },
      {
        question: 'How far away can the speaker stand?',
        answer: 'The text is easily readable from 2–3 meters away, which is perfect for podium setups.'
      }
    ]
  },
  {
    title: '40-Inch System',
    description: 'Large screen teleprompter ideal for big audiences and presentations.',
    imageUrl: '/IMG20240829075507.jpg',
    bestFor: 'Presentations delivered into camera from a longer distance',
    faqs: [
      {
        question: 'What type of events is this best for?',
        answer: 'This system is ideal for pre-recorded presentations, virtual events, or scenarios where the presenter needs to read from a script while looking directly into the camera.'
      },
      {
        question: 'Can it display PowerPoint presentations?',
        answer: 'Yes! The large screen can display PowerPoint slides, making it perfect for presenters who want to seamlessly read their presentation while appearing natural on camera.'
      },
      {
        question: 'What are the advantages for pre-recorded events?',
        answer: 'Its large screen ensures excellent readability from a longer distance, and the camera-mounting capability allows for seamless eye contact with the audience during recordings.'
      }
    ]
  }
];

export default function Systems(): ReactElement {
  return (
    <section id="systems" className="py-24 bg-gray-50" role="main" aria-labelledby="systems-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="systems-heading" className="text-4xl font-bold text-center mb-16">Professional Teleprompter Systems for Every Need</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto" role="list">
          {systems.map((system, index) => (
            <div key={index} role="listitem">
              <SystemCard {...system} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}