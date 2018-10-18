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

function destructivelyDeleteFromObjectByKey(object, key, value) {
  var object = { [key]: [value] }
  return delete object[key]
  return object
}


return delete object['key']