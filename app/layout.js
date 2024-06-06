
import { Inter } from 'next/font/google';
import Header from './components/header';
import Footer from './components/Footer';


import "./globals.css"


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RouteLane',
  description: 'RouteLane LLC - Professional truck dispatching services tailored for efficiency and reliability. We ensure timely deliveries and optimized routes, providing exceptional support for your logistics needs.',
};

// Rest of your component code...

export default function RootLayout({ children }) {
 // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        {/* Insert chatbot script here */}
        <script id="messenger-widget-b" src="https://cdn.botpenguin.com/website-bot.js" defer>66619e5023e068a72d7bcd89,66619dcd4d3e52a5a04294c7</script>
      </body>
    </html>
  );
}
