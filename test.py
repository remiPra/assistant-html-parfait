#!/usr/bin/env python3
import subprocess
import os

def configurer_browser():
    """Configure BROWSER pour utiliser garcon-url-handler"""
    
    # Configurer la variable d'environnement
    os.environ['BROWSER'] = '/usr/bin/garcon-url-handler'
    
    print("✅ Variable BROWSER configurée avec garcon-url-handler")

def ouvrir_nanobrowser_avec_browser():
    """Utilise la variable BROWSER configurée"""
    
    configurer_browser()
    
    import webbrowser
    
    extension_id = "imbdddedgmccjhfpcmjokekbkkai"
    url = f"chrome-extension://{extension_id}/popup.html"
    
    try:
        webbrowser.open(url)
        print("✅ Nanobrowser ouvert via BROWSER!")
    except Exception as e:
        print(f"❌ Erreur: {e}")

# Test
ouvrir_nanobrowser_avec_browser()