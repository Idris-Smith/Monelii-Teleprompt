import { type ReactElement } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface SystemCardProps {
  title: string;
  description: string;
  imageUrl: string;
  bestFor: string;
  faqs: FAQ[];
}

export default function SystemCard({ title, description, imageUrl, bestFor, faqs }: SystemCardProps): ReactElement {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="aspect-auto relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-blue-600">Best For:</h4>
          <p className="text-gray-700">{bestFor}</p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h4>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div className="text-left">
                <p className="font-medium text-gray-900 mb-2">{faq.question}</p>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}