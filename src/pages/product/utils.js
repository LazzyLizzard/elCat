// TODO [sf] 05-Oct-18  add regex check
// const rx = /^(\w+)_(\d+).html/;
export const getProductIdFromUrl = productUrl => Number(productUrl.split('.')[0].split('_')[1]);

export const getFamilyTitle = superProduct => (superProduct === true ? 'потомки' : 'братья');
