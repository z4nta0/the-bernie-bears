import { BrowserRouter, Routes, Route } from 'react-router'
import { NavBarCom } from './ui/nav.tsx'
import { SitFooCom } from './ui/footer.tsx'
import { HomPagCom } from './pages/home/home.tsx'
import { AboPagCom } from './pages/about/about.tsx'
import SocialLinks from './pages/links/links.tsx'
import Contact from './pages/contact/contact.tsx'

function App() {

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        <NavBarCom />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomPagCom />} />
            <Route path="/about" element={<AboPagCom />} />
            <Route path="/links" element={<SocialLinks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <SitFooCom />
      </div>
    </BrowserRouter>
  )
}

export default App
