class Navigation {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('/nav') || path.includes('testp.html')) return 'nav';
        if (path.includes('/nora') || path.includes('test.html')) return 'nora';
        if (path.includes('/english')) return 'english';
        return 'home';
    }

    getNavigationHTML() {
        return `
            <nav class="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1e3a8a] to-[#3730a3] backdrop-blur-xl border-b border-white/10">
                <div class="flex justify-between items-center px-5 py-3 text-white">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-sm">🎤</span>
                        </div>
                        <h1 class="font-bold text-lg">Assistant Vocal Pro</h1>
                    </div>
                    
                    <div class="flex items-center gap-2">
                        ${this.createNavLink('/nav', 'nav', '🧭', 'Navigation')}
                        ${this.createNavLink('/nora', 'nora', '🤖', 'Nora')}
                        ${this.createNavLink('/english', 'english', '🇬🇧', 'English')}
                        
                        <div class="w-px h-6 bg-white/20 mx-2"></div>
                        
                        <button id="nav-settings" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        `;
    }

    createNavLink(href, page, emoji, label) {
        const isActive = this.currentPage === page;
        const activeClasses = isActive 
            ? 'bg-white/20 text-white' 
            : 'text-white/80 hover:text-white hover:bg-white/10';
            
        return `
            <a href="${href}" 
               class="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${activeClasses}"
               data-page="${page}">
                <span class="text-sm">${emoji}</span>
                <span class="font-medium text-sm">${label}</span>
                ${isActive ? '<div class="w-1 h-1 bg-green-400 rounded-full ml-1"></div>' : ''}
            </a>
        `;
    }

    init() {
        // Injecter la navigation automatiquement
        document.addEventListener('DOMContentLoaded', () => {
            this.injectNavigation();
            this.attachEventListeners();
            this.adjustPageLayout();
        });

        // Si le DOM est déjà chargé
        if (document.readyState === 'loading') {
            // DOM pas encore chargé
        } else {
            // DOM déjà chargé
            this.injectNavigation();
            this.attachEventListeners();
            this.adjustPageLayout();
        }
    }

    injectNavigation() {
        // Chercher un conteneur de navigation existant
        let navContainer = document.getElementById('navigation');
        
        // Si pas trouvé, créer et injecter au début du body
        if (!navContainer) {
            navContainer = document.createElement('div');
            navContainer.id = 'navigation';
            document.body.insertBefore(navContainer, document.body.firstChild);
        }
        
        navContainer.innerHTML = this.getNavigationHTML();
        console.log('🧭 Navigation injectée avec succès');
    }

    adjustPageLayout() {
        // Ajouter du padding-top au contenu pour éviter que la nav le recouvre
        const body = document.body;
        if (body && !body.style.paddingTop) {
            body.style.paddingTop = '70px';
        }
    }

    attachEventListeners() {
        // Événement pour le bouton settings
        const settingsBtn = document.getElementById('nav-settings');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleSettings();
            });
        }

        // Tracking des clics sur les liens (optionnel)
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                const page = e.currentTarget.dataset.page;
                console.log(`🔗 Navigation vers: ${page}`);
            });
        });
    }

    toggleSettings() {
        // Tu peux intégrer ça avec ton drawer existant
        const drawer = document.getElementById('drawer');
        if (drawer) {
            const drawerToggle = document.getElementById('drawerToggle');
            if (drawerToggle) {
                drawerToggle.click();
            }
        } else {
            console.log('⚙️ Paramètres cliqués - à implémenter');
        }
    }
}

// Auto-initialisation
const navigation = new Navigation();

// Export pour utilisation externe si besoin
window.Navigation = Navigation;