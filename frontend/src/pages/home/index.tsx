import { BackgroundEnum } from 'common/enums';
import { BackgroundImage } from 'conponents/background';
import { RecipeLayout } from 'conponents/layouts/recipe-layout';
import { RecipeItem } from 'conponents/recipe-item';
import React from 'react';
const img1 = require('assets/images/meal1.png');
const img2 = require('assets/images/meal2.png');
const img3 = require('assets/images/meal3.png');
const img4 = require('assets/images/meal4.png');
const img5 = require('assets/images/meal5.png');
const img6 = require('assets/images/meal6.png');


const Home = () => {
  const arr = [img1, img2, img3, img4, img5, img6];
  return (
    <>
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <RecipeLayout>
        {
          arr.map(item => <RecipeItem img={item} item={'dasdad'}></RecipeItem>)
        }
      </RecipeLayout>
    </>
  )
}

export { Home };