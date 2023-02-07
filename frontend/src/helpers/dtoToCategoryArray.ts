export const dtoToCategoryArray = (object, category) => {
    return  Object.keys(object)
                .map(dto => dto.split(', '))
                .map(splitedDto => splitedDto.filter(key => key.includes(category))
                .map(categoryArray => categoryArray.split('=')[1]));
} 