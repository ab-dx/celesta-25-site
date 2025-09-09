"use client";

import { useState, useEffect } from 'react';

// A list of "Celesta" transliterated into various languages.
const celestaTranslations = [
  "CELESTA", "селеста", "塞莱斯塔", "سيليستا", "Селеста", "セレスタ", "셀레스타", "เซเลสต้า",
  "Celesta", "Σελέστα", "צ'לסטה", "セเลสตา", "செலஸ்டா", "సెలెస్టా", "ಸೆಲೆಸ್ಟಾ",
  "സെലസ്റ്റ", "સેલેસ્ટા", "ਸੇਲੇਸਟਾ", "ସେଲେଷ୍ଟା", "সেলেস্টা", "Céleste", "செலெஸ்டா",
  "Цэлеста", "Целеста", "ჩელესტਾ", "Չելեստਾ", "Целеста", "სელესტა", "Целеста", "Челэста",
  "Селеста", "Σελέστη", "செலஸ்டா", "సెలెస్టా", "ಸೆಲೆಸ್ಟಾ", "സെലസ്റ്റ", "સેલેસ્ટા", "ਸੇਲੇਸਟਾ",
  "ସେଲେଷ୍ଟା", "সেলেস্টা", "စီလီစတာ", "ເຊເລສຕາ", "សេឡេស្ដា", "සෙලෙස්ටා", "赛莱斯塔",
  "Caelesta", "Tselesta", "Селесте", "סלסטה", "سيليستيا", "케레스타", "セレスティア", "सैलेस्टਾ",
  "塞莱斯塔", "塞萊斯塔", "Zéleste", "Szeleszta", "Селеста", "Çelesta", "Celesta", "Селеста",
  "Tselesta", "Τσελέστα", "צֶ'לֶסטָה", "செலேஸ்டா", "సెలెస్టా", "ಸೆಲೆಸ್ಟಾ", "സെലെസ്റ്റാ",
  "સેલેસ્ટા", "ਸੇਲੇਸਟਾ", "ସେଲେଷ୍ଟା", "সেলেস্টা", "Целеста", "Tselesta", "Celesta", "සෙලෙස්ටා",
  "ჩელესਟა", "Չելեստਾ", "Целеста", "სელესტਾ", "Селеста", "Челэста", "Селеста", "Σελέστη",
  "செலஸ்டா", "సెలెస్టా", "ಸೆಲೆಸ್ಟಾ", "സെലസ്റ്റ", "સેલેસ્ટા", "ਸੇਲੇਸਟਾ", "ସେଲେଷ୍ଟା", "সেলেস্টা",
  "စီလီစတာ", "ເຊເລສຕາ", "សេឡេស្ដា", "සෙලෙස්ටා", "赛莱斯塔", "Caelesta", "Селесте", "סלסטה",
  "سيليستيا", "케레스타", "セレスティア", "सैलेस्टा", "塞莱斯塔", "塞萊斯塔", "Zéleste", "Szeleszta",
  "Селеста", "Çelesta", "Celesta", "Селеста", "Tselesta", "Τσελέστα", "צֶ'לֶסטָה", "செலேஸ்டா",
  "సెలెస్టా", "ಸೆಲೆಸ್ಟಾ", "സെലെസ്റ്റാ", "સેલેસ્ટા", "ਸੇਲੇਸਟਾ"
];

// Define a type for the structure of each word object
type Word = {
  id: number;
  text: string;
  top: string;
  left: string;
  fontSize: string;
  transform: string;
};

export default function CelestaCelebration() {
  // Explicitly type the state to be an array of Word objects
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const generatedWords: Word[] = celestaTranslations.map((text, index) => ({
      id: index,
      text: text,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * (6 - 1) + 1}rem`,
      transform: `rotate(${Math.random() * 360}deg)`,
    }));
    setWords(generatedWords);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-40 overflow-hidden bg-gray-950/50 backdrop-blur-sm">
      {words.map(word => (
        <span
          key={word.id}
          className="absolute text-white/10 select-none font-orbitron"
          style={{
            top: word.top,
            left: word.left,
            fontSize: word.fontSize,
            transform: word.transform,
            whiteSpace: 'nowrap',
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
}
