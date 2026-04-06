import './theme.css';
import './App.css';

import Navbar    from './components/Navbar/Navbar';
import Hero      from './components/Hero/Hero';
import About     from './components/About/About';
import News      from './components/News/News';
import Documents from './components/Documents/Documents';
import Contact   from './components/Contact/Contact';
import Footer    from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Documents />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
