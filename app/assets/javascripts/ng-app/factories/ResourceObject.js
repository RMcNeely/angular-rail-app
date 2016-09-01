function ResourceObject() {

  var ResourceObject = {
    'id': '',
    'name': '',
    'description': '',
    'link': '',
    'tags': []
  }
  console.log("ResourceObject factory checking in")
  // console.log($state)
  return ResourceObject
}

angular
  .module('app')
  .factory('ResourceObject', ResourceObject)
