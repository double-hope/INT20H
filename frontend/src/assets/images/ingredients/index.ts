export const ingredientsImages = [];
export const ingredientImg = require('./32.jpg')

for(let i = 0; i < 32; i++) {
    ingredientsImages.push(require(`./${i}.jpg`))
}