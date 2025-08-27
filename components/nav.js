class NavigationDrawer {
    constructor() {
        this.isOpen = false;
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('/nav') || path.includes('testp.html')) return 'nav';
        if (path.includes('/nora') || path.includes('test.html')) return 'nora';
        if (path.includes('/remi') || path.includes('remi.html')) return 'remi';
        if (path.includes('/kevin') || path.includes('kevin.html')) return 'kevin';

        if (path.includes('/testo') || path.includes('speechr.html')) return 'testo';
        if (path.includes('/english')) return 'english';
        return 'home';
    }

    getDrawerHTML() {
        return `
            <!-- Menu Drawer -->
            <div id="nav-drawer-overlay" class="fixed inset-0 bg-black/50 z-40 opacity-0 pointer-events-none transition-opacity duration-300"></div>
            
            <div id="nav-drawer" class="fixed z-50 top-0 left-0 h-full w-80 bg-gradient-to-b from-[#1e3c72] to-[#2a5298] shadow-2xl transform -translate-x-full transition-transform duration-300 ease-out z-50">
                
                <!-- Header du Drawer -->
                <div class="flex items-center justify-between p-6 border-b border-white/20">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                            <span class="text-white font-bold">🎤</span>
                        </div>
                        <div>
                            <h2 class="text-white text-xl font-bold">Assistant Vocal</h2>
                            <p class="text-white/70 text-sm">Menu de navigation</p>
                        </div>
                    </div>
                    <button id="nav-drawer-close" class="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Menu Principal -->
                <div class="p-6 space-y-2">
                    <h3 class="text-white/60 text-xs uppercase tracking-wider font-semibold mb-4">Pages Principales</h3>
                    ${this.createDrawerLink('/testo', 'testo', '🧭', 'simple', 'super simple')}

                    ${this.createDrawerLink('/nav', 'nav', '🧭', 'Navigation', 'Interface de test navigation')}
                    ${this.createDrawerLink('/nora', 'nora', '🤖', 'Nora Assistant', 'Assistant vocal principal')}
                    ${this.createDrawerLink('/remi', 'remi', '🤖', 'remi Clone', 'Assistant vocal principal')}
                    ${this.createDrawerLink('/kevin', 'kevin', '🤖', 'kevin Clone', 'Assistant vocal principal')}

                    ${this.createDrawerLink('/english', 'english', '🇬🇧', 'English Version', 'Version anglaise')}
                </div>

                <!-- Section Actions -->
                <div class="p-6 border-t border-white/10">
                    <h3 class="text-white/60 text-xs uppercase tracking-wider font-semibold mb-4">Actions</h3>
                    
                    <button id="nav-settings-btn" class="w-full flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 text-white group">
                        <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div class="text-left">
                            <div class="font-semibold">Paramètres</div>
                            <div class="text-sm text-white/70">Configuration avancée</div>
                        </div>
                    </button>
                </div>

                <!-- Footer avec infos -->
                <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black/20">
                    <div class="flex items-center justify-between text-white/50 text-xs">
                        <span>Page actuelle: ${this.currentPage}</span>
                        <span>v2.0</span>
                    </div>
                </div>
            </div>
        `;
    }

    createDrawerLink(href, page, emoji, title, description) {
        const isActive = this.currentPage === page;
        const activeClasses = isActive 
            ? 'bg-green-500/20 border-green-400/30 text-white' 
            : 'bg-white/5 border-white/10 text-white/90 hover:bg-white/10 hover:border-white/20';
            
        return `
            <a href="${href}" 
               class="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${activeClasses} group"
               data-page="${page}">
                <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    ${emoji}
                </div>
                <div class="flex-1">
                    <div class="font-semibold text-base">${title}</div>
                    <div class="text-sm opacity-70">${description}</div>
                </div>
                ${isActive ? `
                    <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                ` : `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                `}
            </a>
        `;
    }

    // Fonction pour obtenir l'icône du menu (à mettre dans ta nav)
    getMenuIcon() {
        return `
            <button id="nav-menu-toggle" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        `;
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.injectDrawer();
            this.attachEventListeners();
        });

        if (document.readyState !== 'loading') {
            this.injectDrawer();
            this.attachEventListeners();
        }
    }

    injectDrawer() {
        // Injecter le drawer dans le body
        const drawerContainer = document.createElement('div');
        drawerContainer.id = 'navigation-drawer-container';
        drawerContainer.innerHTML = this.getDrawerHTML();
        document.body.appendChild(drawerContainer);
        
        console.log('🎯 Menu drawer injecté avec succès');
    }

    attachEventListeners() {
        // Bouton toggle (à ajouter dans ta nav)
        document.addEventListener('click', (e) => {
            if (e.target.closest('#nav-menu-toggle')) {
                e.preventDefault();
                this.toggleDrawer();
            }
        });

        // Bouton fermer
        const closeBtn = document.getElementById('nav-drawer-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeDrawer());
        }

        // Overlay
        const overlay = document.getElementById('nav-drawer-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.closeDrawer());
        }

        // Bouton settings
        const settingsBtn = document.getElementById('nav-settings-btn');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleSettings();
            });
        }

        // Fermer avec Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeDrawer();
            }
        });

        // Tracking des liens
        document.querySelectorAll('#nav-drawer [data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                const page = e.currentTarget.dataset.page;
                console.log(`🔗 Navigation drawer vers: ${page}`);
                // Fermer le drawer après clic
                setTimeout(() => this.closeDrawer(), 150);
            });
        });
    }

    toggleDrawer() {
        if (this.isOpen) {
            this.closeDrawer();
        } else {
            this.openDrawer();
        }
    }

    openDrawer() {
        const drawer = document.getElementById('nav-drawer');
        const overlay = document.getElementById('nav-drawer-overlay');
        
        if (drawer && overlay) {
            drawer.classList.remove('-translate-x-full');
            overlay.classList.remove('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'hidden';
            this.isOpen = true;
            console.log('📱 Menu drawer ouvert');
        }
    }

    closeDrawer() {
        const drawer = document.getElementById('nav-drawer');
        const overlay = document.getElementById('nav-drawer-overlay');
        
        if (drawer && overlay) {
            drawer.classList.add('-translate-x-full');
            overlay.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = '';
            this.isOpen = false;
            console.log('📱 Menu drawer fermé');
        }
    }

    handleSettings() {
        // Intégration avec ton drawer settings existant
        const existingDrawer = document.getElementById('drawer');
        if (existingDrawer) {
            const drawerToggle = document.getElementById('drawerToggle');
            if (drawerToggle) {
                this.closeDrawer(); // Fermer le menu nav
                setTimeout(() => drawerToggle.click(), 300); // Ouvrir settings
            }
        } else {
            alert('⚙️ Paramètres - à implémenter selon tes besoins');
        }
    }
}

// Auto-initialisation
const navigationDrawer = new NavigationDrawer();

// Export pour utilisation externe
window.NavigationDrawer = NavigationDrawer;