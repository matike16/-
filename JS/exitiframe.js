const exitIframeButton = document.getElementById('exit-iframe-button');
exitIframeButton.addEventListener('click', () => {
  const iframe = document.querySelector('iframe');
  iframe.parentNode.removeChild(iframe);
});