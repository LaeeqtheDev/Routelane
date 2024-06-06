import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RouteLane',
  description: 'RouteLane LLC - Professional truck dispatching services tailored for efficiency and reliability. We ensure timely deliveries and optimized routes, providing exceptional support for your logistics needs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Chatbot /> {/* Add the Chatbot component here */}
      </body>
    </html>
  );
}
