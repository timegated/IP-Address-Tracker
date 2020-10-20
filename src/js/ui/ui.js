export class UI {
  constructor() {
    this.searchContainer = document.querySelector('.search');
    this.input = document.querySelector('.search__input');
    this.searchForm = document.querySelector('.search__form');
    this.searchButton = document.querySelector('.search__button');
    this.mapContainer = document.querySelector('#mapId');
    this.ipMap = document.querySelector('.ipmap')
    this.dataValues = document.querySelectorAll('.datazone__value');
  }

  getSearchValue() {
    let inputData = this.input.value;
    return inputData;
  }

  displayData(ip, city, region, postalCode, timezone, isp) {
    const dataValues = Array.from(this.dataValues);
    dataValues[0].textContent = ip;
    dataValues[1].textContent = city + ", " +  region + ",\n" + postalCode;;
    dataValues[2].textContent = "UTC" + timezone;
    dataValues[3].textContent = isp;
  }
};