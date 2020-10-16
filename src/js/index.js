import '../css/main.scss';
import bgPattern from '../images/pattern-bg.png';
import searchButtonIcon from '../images/icon-search.svg';

const searchComponent = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');

const addImg = (element, imgURL, styleRule, ruleValue) => {
  return element.style = `
    background-image: url(${imgURL});
    background-repeat: no-repeat;
    ${styleRule}: ${ruleValue};
  `;
};

addImg(searchComponent, bgPattern, 'background-size', 'cover');
addImg(searchButton, searchButtonIcon, 'background-position', 'center');
