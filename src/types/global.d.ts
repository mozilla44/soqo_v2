// src/weglot.d.ts

interface WeglotInterface {
  initialize: (config: { api_key: string }) => void;
  getCurrentLang: () => string;
  switchTo: (langCode: string) => void; // Add the method here
  // Add any other methods you might use
}

declare global {
  interface Window {
    Weglot: WeglotInterface;
  }
}

export {};
