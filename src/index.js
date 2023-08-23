window.addEventListener('DOMContentLoaded',() => {
    const selectors = document.querySelectorAll('td.selector');
    const testareas=document.querySelectorAll('td:not(.selector)');

    testareas.forEach((testarea) => {
        for (let i=0; i<10; i++){
            const sample = document.createDocumentFragment();
            const div = sample.appendChild(document.createElement('div'));
            testarea.appendChild(sample);
        }
    });

    selectors.forEach((selector) => {
        selector.setAttribute('title', 'Click to copy');
        selector.addEventListener('click', (event) => {
            event.stopPropagation();
            let selectorTarget = (event.target);
            let thevalue = selectorTarget.innerText;
            let tooltip = document.querySelector('.tooltiptext');
            selectorTarget.style.backgroundColor='peachpuff';
            selectorTarget.style.color='#0f0f0f';
            navigator.clipboard.writeText(thevalue);
            tooltip.innerHTML = "Copied - " + thevalue;
            tooltip.style.opacity=1;
            setTimeout(function (){
                selectorTarget.style.cssText += 'transition: background-color 2s;';
                selectorTarget.style.backgroundColor='';
                selectorTarget.style.color='#728692';
                tooltip.style.opacity=0;
                setTimeout(function (){
                    selectorTarget.style.removeProperty('transition');
                }, 2500);
            }, 3000);
    
      });
    });
});