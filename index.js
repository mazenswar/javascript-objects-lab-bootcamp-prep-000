var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj2 = {key:value};
  Object.assign(object, obj2);
  return obj2;
}
