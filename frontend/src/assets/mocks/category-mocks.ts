import { CategoryDTO } from "components/layouts/category-layout/types";

const img1 = require('assets/images/img1.jpg');
const img2 = require('assets/images/img2.jpg');
const img3 = require('assets/images/img3.jpg');
const img5 = require('assets/images/meal5.png');
const img6 = require('assets/images/meal6.png');

export const categoryMock: CategoryDTO[] = [
    {
      img: img1,
      name: 'Breakfast'
    }, 
    {
      img: img2,
      name: 'Lunch'
    }, 
    {
      img: img3,
      name: 'Dinner'
    },
    {
      img: img5,
      name: 'Name'
    },
    {
      img: img6,
      name: 'Name2'
    }
  ];