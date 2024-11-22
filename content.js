const removeAds = () => {
    try {
      const ads = document.querySelectorAll('.ytp-ad-module, .ytp-ad-overlay-container');
      ads.forEach(ad => ad.remove());
  
      const skipButton = document.querySelector('.ytp-ad-skip-button');
      if (skipButton) {
        skipButton.click();
      }
    } catch (error) {
      console.error('Error removing ads:', error);
    }
  };
  
  const observer = new MutationObserver(() => {
    removeAds();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  