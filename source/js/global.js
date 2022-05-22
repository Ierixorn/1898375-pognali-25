// main menu
let mainHead = document.querySelector('.main-header');
let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__toggle');
let mainIndex = document.querySelector('.across-pages-main');

mainIndex.classList.remove('across-pages-main--nojs');
mainHead.classList.remove('main-header--nojs');
navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});

// catalog country filter
let filterWrap = document.querySelector('.filters-section__content-wrapper');
let menuWrap = document.querySelector('.filters-section__wrapper');
let filterToggle = document.querySelector('.filters-section__toggle');
let filtercloseToggle = document.querySelector('.filters-section__collapse-button');
let filterSecToggle = document.querySelector('.filters-section__second-toggle');

menuWrap.classList.remove('filters-section__wrapper--nojs');

filterToggle .addEventListener('click', function () {
  if (filterWrap.classList.contains('filters-section__content-wrapper--menu-close')) {
    filterWrap.classList.remove('filters-section__content-wrapper--menu-close');
    filterWrap.classList.add('filters-section__content-wrapper--menu-open');
  } else {
    filterWrap.classList.add('filters-section__content-wrapper--menu-close');
    filterWrap.classList.remove('filters-section__content-wrapper--menu-open');
  }
});

filterSecToggle.addEventListener('click', function () {
  if (filterWrap.classList.contains('filters-section__content-wrapper--menu-close')) {
    filterWrap.classList.remove('filters-section__content-wrapper--menu-close');
    filterWrap.classList.add('filters-section__content-wrapper--menu-open');
  } else {
    filterWrap.classList.add('filters-section__content-wrapper--menu-close');
    filterWrap.classList.remove('filters-section__content-wrapper--menu-open');
  }
});

filtercloseToggle.addEventListener('click', function () {
  if (filterWrap.classList.contains('filters-section__content-wrapper--menu-open')) {
    filterWrap.classList.remove('filters-section__content-wrapper--menu-open');
    filterWrap.classList.add('filters-section__content-wrapper--menu-close');
  }
});

// catalog companion filters
let compField = document.querySelector('.companion-fieldset');
let dropButton = document.querySelector('.drop-down-button');

dropButton.addEventListener('click', function () {
  if (compField.classList.contains('companion-fieldset--filter-close')) {
    compField.classList.remove('companion-fieldset--filter-close');
    compField.classList.add('companion-fieldset--filter-open');
  } else {
    compField.classList.remove('companion-fieldset--filter-open');
    compField.classList.add('companion-fieldset--filter-close');
  }
});
