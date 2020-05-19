
function getTooltip(x, y, state, capital){
    document.getElementsByClassName('state-name')[0].innerHTML= state;
    document.getElementsByClassName('capital-name')[0].innerHTML= `Capital: ${capital}`;
    toolTip = document.getElementsByClassName('tooltip')[0]
    toolTip.style.top = `${y + 10}px`;
    toolTip.style.left = `${x + 10}px`;
    statePath = 'SVG/'+(state.toLowerCase()).replace(/ /g, "-") + '.svg';
    console.log(statePath)
    document.getElementsByClassName('state-map')[0].style.background = `url(${statePath}) no-repeat`;
    toolTip.style.visibility = 'visible';
    document.getElementsByClassName('map-container')[0].style.filter = 'opacity(50%)';
}

function removeTooltip(){
    document.getElementsByClassName('tooltip')[0].style.visibility = 'hidden';
    document.getElementsByClassName('map-container')[0].style.filter = 'opacity(100%)';
}