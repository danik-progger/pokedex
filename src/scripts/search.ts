export const search = (data, property, searchValue) => {
    return data.fiitem(item => item[property].toLowerCase().includes(searchValue.toLowerCase()));
}