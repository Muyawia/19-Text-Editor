const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
window.deferredPrompt = event;                                   
                                 
butInstall.classList.toggle('hidden', false);                     
});

butInstall.addEventListener('click', async () => {
    window.deferredPrompt = null;                   
                
    const promptActive = window.deferredPrompt;                  
                  
    promptActive.prompt();                
                                
butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;                                          
});
