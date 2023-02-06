import React, { useRef } from 'react'
import { FullRecipeLayoutProps } from './types';
import * as styles from './styles';
import { FlexLayoutEnum, FooterEnum, IconColor, IconName } from 'common/enums';
import { FlexLayout } from '../flex-layout';
import { Icon } from 'components/primitives/icon';
import { Footer } from 'components/primitives/footer';
import { ProductFlagItem } from 'components/product-flag-item';

const FullRecipeLayout = ({ item }: FullRecipeLayoutProps) => {
    const headerRef = useRef<HTMLDivElement>();

    return (
        <div css={styles.layout}>
            <FlexLayout type={FlexLayoutEnum.DEFAULT}>
                <div ref={headerRef} css={[styles.defaultWrapper, styles.heading]}>
                    <p>{item.name}</p>
                    <p>Meals <Icon icon={IconName.ARROW_RIGHT} color={IconColor.BLACK}/> Sause</p>
                    {/* HERE WILL BE CATEGORY */}
                </div>
                <div css={styles.item}>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <div>
                        <h3>Content</h3>
                        <ul>
                            <li>Item - 1</li>
                            <li>Item - 2</li>
                            <li>Item - 3</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Level</h3>
                        <p>{item.level}</p>
                    </div>
                </div>
                <div css={[styles.defaultWrapper, styles.products]}>
                    <h3>Products</h3>
                    <div css={styles.productsAmount}>
                        <ProductFlagItem amount='1 cup' name='mayounnaise'/>
                        <ProductFlagItem amount='1 cup' name='mayounnaise'/>
                        <ProductFlagItem amount='1 cup' name='mayounnaise'/>
                        <ProductFlagItem amount='1 cup' name='mayounnaise'/>
                        <ProductFlagItem amount='1 cup' name='mayounnaise'/>
                        <ProductFlagItem amount='1 cup' name='mayounnaise'/>
                    </div>

                </div>
                
                <div css={[styles.defaultWrapper, styles.recipe]}>
                    <h3>Recipe</h3>
                    <ol>
                        <li><span>Step 1</span></li>
                        <li><span>Step 2</span></li>
                        <li><span>Step 3</span></li>
                    </ol>
                </div>
                
                <div css={[styles.defaultWrapper, styles.video]}>
                    <h3>Video Tutorial</h3>
                    <iframe title='unique' width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    <video controls preload="metadata">
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5" type="video/mp4" />
                    </video>
                </div>
                <Footer type={FooterEnum.LIGHT} />
                
            </FlexLayout>
        </div>
    )
}

export { FullRecipeLayout };