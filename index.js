require(`datejs`);
function combineUsers(...args){
  const combinedObject={
    users:[],
    merge_date: new Date().toString(`10/9/2026`)
  };
  for (const array of args){
    combinedObject.users.push(...array);
  }
  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};