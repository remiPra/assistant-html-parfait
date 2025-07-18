#!/usr/bin/env python3
import subprocess
import sys

class ChromebookLauncher:
    def __init__(self):
        self.nanobrowser_id = "imbdddedgmccjhfpcmjokekbkkai"
        self.garcon_path = "/usr/bin/garcon-url-handler"
    
    def verifier_garcon(self):
        """Vérifie si garcon-url-handler est disponible"""
        try:
            subprocess.run(["which", self.garcon_path], check=True, capture_output=True)
            return True
        except:
            return False
    
    def ouvrir_avec_garcon(self, url):
        """Ouvre une URL avec garcon-url-handler"""
        try:
            subprocess.run([self.garcon_path, url], check=True)
            return True
        except Exception as e:
            print(f"❌ Erreur garcon: {e}")
            return False
    
    def ouvrir_avec_xdg(self, url):
        """Fallback avec xdg-open"""
        try:
            subprocess.run(["xdg-open", url], check=True)
            return True
        except Exception as e:
            print(f"❌ Erreur xdg-open: {e}")
            return False
    
    def ouvrir_nanobrowser(self):
        """Ouvre Nanobrowser avec la meilleure méthode"""
        
        urls = [
            f"chrome-extension://{self.nanobrowser_id}/popup.html",
            f"chrome-extension://{self.nanobrowser_id}/index.html",
            f"chrome-extension://{self.nanobrowser_id}/",
        ]
        
        print("🚀 Ouverture de Nanobrowser...")
        
        # Méthode 1: garcon-url-handler
        if self.verifier_garcon():
            print("✅ garcon-url-handler disponible")
            for url in urls:
                if self.ouvrir_avec_garcon(url):
                    print("✅ Nanobrowser ouvert avec garcon!")
                    return True
        
        # Méthode 2: xdg-open (fallback)
        print("⚠️ Tentative avec xdg-open...")
        for url in urls:
            if self.ouvrir_avec_xdg(url):
                print("✅ Nanobrowser ouvert avec xdg-open!")
                return True
        
        print("❌ Impossible d'ouvrir Nanobrowser")
        return False
    
    def ouvrir_site(self, url):
        """Ouvre un site web"""
        
        if not url.startswith(("http://", "https://")):
            url = "https://" + url
        
        print(f"🚀 Ouverture de {url}...")
        
        # Essayer garcon-url-handler d'abord
        if self.verifier_garcon():
            if self.ouvrir_avec_garcon(url):
                return True
        
        # Fallback vers xdg-open
        return self.ouvrir_avec_xdg(url)
    
    def menu(self):
        """Menu principal"""
        print("=== Lanceur Chromebook (garcon-url-handler) ===")
        print("1. Ouvrir Nanobrowser")
        print("2. Ouvrir Medium")
        print("3. Ouvrir site personnalisé")
        print("4. Test garcon-url-handler")
        print("5. Quitter")
        
        choix = input("\nVotre choix (1-5): ").strip()
        
        if choix == "1":
            self.ouvrir_nanobrowser()
        elif choix == "2":
            self.ouvrir_site("https://medium.com")
        elif choix == "3":
            site = input("URL du site: ").strip()
            self.ouvrir_site(site)
        elif choix == "4":
            self.test_garcon()
        elif choix == "5":
            print("Au revoir!")
            sys.exit(0)
        else:
            print("Choix invalide")
    
    def test_garcon(self):
        """Test de garcon-url-handler"""
        if self.verifier_garcon():
            print("✅ garcon-url-handler est disponible")
            print("🧪 Test avec Google...")
            self.ouvrir_avec_garcon("https://www.google.com")
        else:
            print("❌ garcon-url-handler non trouvé")

if __name__ == "__main__":
    launcher = ChromebookLauncher()
    launcher.menu()