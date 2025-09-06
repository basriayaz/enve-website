'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppPopup() {

  const handleWhatsAppClick = () => {
    const phoneNumber = '+905321234567'; // Buraya gerçek telefon numarası gelecek
    const message = 'Merhaba, ENVE Yapı Proje hakkında bilgi almak istiyorum.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp size={28} />
        </motion.button>
      </motion.div>
    </>
  );
}
