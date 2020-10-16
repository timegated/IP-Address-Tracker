import '../css/main.scss';
import { createMap } from './api/map.js';
import { ipSearch } from './api/ipify.js';
import { UI } from './ui/ui.js';
import bgPattern from '../images/pattern-bg.png';
import searchButtonIcon from '../images/icon-search.svg';


const ui = new UI();

const { searchContainer, searchButton, mapContainer } = ui;

const addImg = (element, imgURL, styleRule, ruleValue) => {
  return element.style = `
    background-image: url(${imgURL});
    background-repeat: no-repeat;
    ${styleRule}: ${ruleValue};
  `;
};

addImg(searchContainer, bgPattern, 'background-size', 'cover');
addImg(searchButton, searchButtonIcon, 'background-position', 'center');
createMap(mapContainer);
ipSearch();