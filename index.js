var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey (object, key, value) {
  var obj = { [key]: value }
  var newObj = Object.assign({}, obj)
  return delete newObj.key
}

function destructivelyDeleteFromObjectByKey() {
  var object = { prop: '1' };
delete object['1']
return object['1']
}
