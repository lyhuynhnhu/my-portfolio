// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import các file dịch
import enTranslation from './en/translation.json';
import viTranslation from './vi/translation.json';

i18n
  .use(LanguageDetector) // Phát hiện ngôn ngữ của trình duyệt
  .use(initReactI18next) // Gắn i18n vào React
  .init({
    fallbackLng: 'en', // Ngôn ngữ dự phòng nếu không tìm thấy ngôn ngữ người dùng
    debug: import.meta.env.NODE_ENV === 'development', // Bật debug trong môi trường dev

    interpolation: {
      escapeValue: false, // React đã tự động thoát HTML, không cần i18n làm thêm
    },

    resources: {
      en: {
        translation: enTranslation,
      },
      vi: {
        translation: viTranslation,
      },
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'], // Lưu ngôn ngữ đã chọn vào localStorage
    },
  });

export default i18n;