// src/globals.d.ts
import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'; // Tên namespace mặc định
    resources: {
      translation: typeof import('./i18n/en/translation.json');
    };
  }
}