"use client"

// components/Chatbot.js
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'messenger-widget-b';
    script.src = 'https://cdn.botpenguin.com/website-bot.js';
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.BotPenguin = window.BotPenguin || function () {
        (window.BotPenguin.q = window.BotPenguin.q || []).push(arguments);
      };
      window.BotPenguin('load', '66619e5023e068a72d7bcd89,66619dcd4d3e52a5a04294c7');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chatbot;
