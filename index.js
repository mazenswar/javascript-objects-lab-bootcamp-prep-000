var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value) {
   var obj2 = Object.assign({}, object);
   obj2[key] = value;
   return obj2;
}
