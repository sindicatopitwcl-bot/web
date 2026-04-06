import './theme.css';
import './App.css';

import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import News      from './components/News';
import Documents from './components/Documents';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

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
