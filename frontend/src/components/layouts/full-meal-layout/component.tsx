/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { FullMealLayoutProps } from './types';
import * as styles from './styles';
import { FlexLayoutEnum, FooterEnum, IconColor, IconName } from 'common/enums';
import { FlexLayout } from '../flex-layout';
import { Icon } from 'components/primitives/icon';
import { Footer } from 'components/primitives/footer';
import { ProductFlagItem } from 'components/product-flag-item';
import { Link } from 'react-router-dom';
import { arraysToObject } from 'helpers/arraysToObject';
import { dtoToCategoryArray } from 'helpers/dtoToCategoryArray';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { addMealToProfile, deleteMealFromProfile, getSavedMeals } from 'store/profile';
import YouTube from 'react-youtube';
import { parseYouTubeUrl } from 'helpers/parseYouTubeUrl';
import { Anchor } from 'antd';

const KEY = 'strIngredient';
const ID_KEY = 'idIngredient';

const FullMealLayout = ({ meal }: FullMealLayoutProps) => {
    const headerRef = useRef<HTMLDivElement>();
    const [url, setUrl] = useState();
    const [saved, setSaved] = useState(false);
    const [amountProducts, setAmountProducts] = useState({});
    const [splitedIds, setSplitedIds] = useState([]);
    const dispatch = useAppDispatch();
    const { usersMeals } = useAppSelector(state => state.profile);

    useEffect(() => {
        dispatch(getSavedMeals(null));
    }, []);

    useEffect(() => {
        if(!!usersMeals) setSaved(!!usersMeals.find(item => item.idMeal === meal.idMeal));
        
        
    }, [usersMeals])

    useEffect(() => {
        setUrl(parseYouTubeUrl(meal.strYoutube));
        const splitedIngredients = dtoToCategoryArray(meal.ingredients, KEY);
        setSplitedIds(dtoToCategoryArray(meal.ingredients, ID_KEY));
        setAmountProducts(arraysToObject(splitedIngredients, Object.values(meal.ingredients)));
    }, [meal]);
    

    const toggleMarked = () => {
        if(!saved) dispatch(addMealToProfile({externalId: meal.idMeal}));
        else dispatch(deleteMealFromProfile({externalMealId: meal.idMeal}));
        setSaved(!saved);
    }

    const onReady = (e) => {
        e.target.pauseVideo();
      }
    
    return (
        <div css={styles.layout}>
            <FlexLayout type={FlexLayoutEnum.DEFAULT}>
                <div ref={headerRef} css={[styles.defaultWrapper, styles.heading]}>
                    <p>{meal.strMeal}</p>
                    <p> <Link css={styles.link} to='/meals'>Meals</Link>  <Icon icon={IconName.ARROW_RIGHT} color={IconColor.BLACK}/> {meal.strCategory}</p>
                    <div css={styles.marker} onClick={toggleMarked}>
                        <div saved-dish={`${saved}`}>
                            {saved ? 'Unsave' : 'Save'}
                        </div>
                        <div saved-dish={`${saved}`} css={styles.triangle} />
                    </div>
                </div>
                <div css={styles.item}>
                    <div>
                        <img src={meal.strMealThumb} alt="" />
                    </div>
                    <div css={styles.linkContainer}>
                        <h3>Content</h3>
                        <Anchor> 
                            <ul>
                                <li><Anchor.Link css={styles.anchorLink} href='#products' title='Products' /></li> 
                                <li><Anchor.Link css={styles.anchorLink} href='#recipe' title='Recipe' /></li> 
                                <li><Anchor.Link css={styles.anchorLink} href='#video' title='Video tutorial' /></li> 
                            </ul>
                        </Anchor>
                        
                    </div>
                    <div>
                        <h3>Level</h3>
                        <p>{meal.recipe.recipeComplexity}</p>
                    </div>
                </div>
                <div id='products' css={[styles.defaultWrapper, styles.products]}>
                    <h3>Products</h3>
                    <div css={styles.productsAmount}>
                        {Object.entries(amountProducts).map((product, key) => <ProductFlagItem id={splitedIds[key]} key={product[0].toString()} amount={product[1].toString()} name={product[0].toString()}/>)}
                    </div>
                </div>
                
                <div id='recipe' css={[styles.defaultWrapper, styles.recipe]}>
                    <h3>Recipe</h3>
                    <ol>
                        {meal.recipe.steps.map(step => <li key={step}><p>{step}</p></li>)}
                    </ol>
                </div>
                
                <div id='video' css={[styles.defaultWrapper, styles.video]}>
                    <h3>Video Tutorial</h3>
                    <div>
                        {!!url && <YouTube videoId={url} onReady={onReady}/>}
                    </div>
                </div>
                <Footer type={FooterEnum.LIGHT} />
                
            </FlexLayout>
        </div>
    )
}

export { FullMealLayout };