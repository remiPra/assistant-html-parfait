#!/usr/bin/env python3
import subprocess

# ID de votre extension Nanobrowser
ID_NANOBROWSER = "imbdddedgmccjhfpcmjokekbkkai"

def ouvrir_nanobrowser():
    """Ouvre l'extension Nanobrowser directement"""
    
    # Différentes URLs possibles pour votre extension
    urls = [
        f"chrome-extension://{ID_NANOBROWSER}/popup.html",
        f"chrome-extension://{ID_NANOBROWSER}/index.html",
        f"chrome-extension://{ID_NANOBROWSER}/",
        f"chrome-extension://{ID_NANOBROWSER}/main.html"
    ]
    
    print("🚀 Ouverture de Nanobrowser...")
    
    for i, url in enumerate(urls, 1):
        try:
            print(f"Tentative {i}: {url}")
            subprocess.run(["xdg-open", url], check=True)
            print("✅ Nanobrowser ouvert!")
            return True
        except Exception as e:
            print(f"❌ Tentative {i} échouée: {e}")
            continue
    
    print("❌ Impossible d'ouvrir Nanobrowser")
    return False

def menu_nanobrowser():
    """Menu pour Nanobrowser"""
    
    print("=== Lanceur Nanobrowser ===")
    print("1. Ouvrir Nanobrowser")
    print("2. Ouvrir Chrome sur Medium")
    print("3. Ouvrir Chrome sur Google")
    print("4. Quitter")
    
    choix = input("\nVotre choix (1-4): ").strip()
    
    if choix == "1":
        ouvrir_nanobrowser()
    elif choix == "2":
        subprocess.run(["xdg-open", "https://medium.com"])
        print("✅ Medium ouvert!")
    elif choix == "3":
        subprocess.run(["xdg-open", "https://www.google.com"])
        print("✅ Google ouvert!")
    elif choix == "4":
        print("Au revoir!")
    else:
        print("Choix invalide")

if __name__ == "__main__":
    # Version simple : ouvre directement Nanobrowser
    ouvrir_nanobrowser()
    
    # Version avec menu (décommentez si vous voulez le menu)
    # menu_nanobrowser()