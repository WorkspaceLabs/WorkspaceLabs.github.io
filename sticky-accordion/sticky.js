const headerHeight = 30;
const itemHeight = 30;
const minItems = 8;

function onLoad() {
    const container = document.querySelector('.sticky-container');
    const headers = container.querySelectorAll('h3');

    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];

        header.style.top = (i * headerHeight) + 'px';
        header.style.bottom = ((headers.length - i - 1) * headerHeight) + 'px';

        header.addEventListener('click', scrollToHeader.bind(null, container, header));
    }

    const minContainerHeight = (headers.length * headerHeight) + (minItems * itemHeight);
    const resizeObserver = new ResizeObserver(toggleStickyBehavior.bind(null, container, minContainerHeight));

    resizeObserver.observe(container);
}

function scrollToHeader(container, header) {
    let top = 0;

    for (const item of container.children) {
        if (item === header) break;
        if (item.tagName === 'H3') continue;

        top += item.offsetHeight;
    }

    container.scrollTop = top;
}

function toggleStickyBehavior(container, minHeight) {
    if (container.offsetHeight < minHeight) {
        container.classList.add('disable');
    }
    else {
        container.classList.remove('disable');
    }
}

window.addEventListener('load', onLoad);