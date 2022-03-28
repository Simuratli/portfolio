import { Navbar, Footer, SocialMediaSidebar } from './components'
import { Home, About, Portfolio, Blog, BlogContent } from './view'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SocialMediaSidebar/>
        <div className="content">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Portfolio />} path="/portfolio" />
            <Route element={<Blog />} path="/blog" />
            <Route element={<BlogContent />} path="/blog/:id" />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
