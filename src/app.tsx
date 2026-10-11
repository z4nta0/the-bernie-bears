import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './ui/nav.tsx'
import Footer from './ui/footer.tsx'
import Home from './pages/home/home.tsx'
import About from './pages/about/about.tsx'
import SocialLinks from './pages/links/links.tsx'
import Contact from './pages/contact/contact.tsx'

function App() {

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/links" element={<SocialLinks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
