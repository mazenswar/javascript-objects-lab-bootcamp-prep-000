var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj2 = {key:value};
  Object.assign(obj2, object);
  return obj2;
}
