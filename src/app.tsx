import { BrowserRouter, Routes, Route } from 'react-router'
import { NavBarCom } from './ui/nav.tsx'
import { SitFooCom } from './ui/footer.tsx'
import { HomPagCom } from './pages/home/home.tsx'
import { AboPagCom } from './pages/about/about.tsx'
import { LinPagCom } from './pages/links/links.tsx'
import { ConPagCom } from './pages/contact/contact.tsx'

function App() {

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        <NavBarCom />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomPagCom />} />
            <Route path="/about" element={<AboPagCom />} />
            <Route path="/links" element={<LinPagCom />} />
            <Route path="/contact" element={<ConPagCom />} />
          </Routes>
        </main>
        <SitFooCom />
      </div>
    </BrowserRouter>
  )
}

export default App
