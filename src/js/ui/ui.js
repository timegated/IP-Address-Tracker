export class UI {
  constructor() {
    this.searchContainer = document.querySelector('.search');
    this.input = document.querySelector('.search__input');
    this.searchForm = document.querySelector('.search__form');
    this.searchButton = document.querySelector('.search__button');
    this.mapContainer = document.querySelector('#map');
  }

  getSearchValue() {
    console.log(this.input.value);
    return this.input.value;
  }
}