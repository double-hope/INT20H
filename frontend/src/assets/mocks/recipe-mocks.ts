import { LevelEnum } from "common/enums";

const img1 = require('assets/images/meal1.png');
const img2 = require('assets/images/meal2.png');
const img3 = require('assets/images/meal3.png');
const img4 = require('assets/images/meal4.png');
const img5 = require('assets/images/meal5.png');
const img6 = require('assets/images/meal6.png');

export const recipeMock = [
  {
    img: img1,
    name: 'Name1'
  }, 
  {
    img: img2,
    name: 'Name2'
  }, 
  {
    img: img3,
    name: 'Name3'
  }, 
  {
    img: img4,
    name: 'Name4'
  }, 
  {
    img: img5,
    name: 'Name5'
  }, 
  {
    img: img6,
    name: 'Name6'
  }, 
];

export interface recipeDTO {
  id: string;
  img: string;
  name: string;
  level: LevelEnum;
  time: string;
}

export const recipeBreakfastMock: recipeDTO[] = [
  {
    id: '1',
    img: img1,
    name: 'Name1',
    level: LevelEnum.EASY,
    time: '3 min'
  }, 
  {
    id: '2',
    img: img2,
    name: 'Name2',
    level: LevelEnum.MEDIUM,
    time: '3 min'
  }, 
  {
    id: '3',
    img: img3,
    name: 'Name3',
    level: LevelEnum.HARD,
    time: '3 min'
  }, 
  {
    id: '4',
    img: img4,
    name: 'Name4',
    level: LevelEnum.EASY,
    time: '3 min'
  }, 
  {
    id: '5',
    img: img5,
    name: 'Name5',
    level: LevelEnum.MEDIUM,
    time: '3 hour'
  }, 
  {
    id: '6',
    img: img6,
    name: 'Name6',
    level: LevelEnum.HARD,
    time: '30 min'
  }, 
];