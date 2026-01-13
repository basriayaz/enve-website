import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppPopup() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
      <a
        href="https://wa.me/905399227667?text=Merhaba%2C%20ENVE%20Yap%C4%B1%20Proje%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="WhatsApp ile iletişime geç"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
