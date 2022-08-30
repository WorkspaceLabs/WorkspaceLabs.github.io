function onLoad() {
    const cUrl = new URL(location.href);

    const frame = document.createElement('iframe');
    frame.setAttribute('seamless', '');
    frame.setAttribute('height', '100%');
    frame.setAttribute('width', '100%');
    frame.setAttribute('frameborder', '0');
    frame.src = decodeURIComponent(cUrl.searchParams.get('q'));
    frame.allow = 'clipboard-read; clipboard-write';
    
    document.body.appendChild(frame);
}

window.addEventListener('load', onLoad);