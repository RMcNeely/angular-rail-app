function ResourceService($resource) {

  var Resource = $resource('/all-resources')

  this.getResource = function(skopeName, callback) {
  return   Resource.query({skope: skopeName}, function(data){
      console.log(skopeName)
      console.log(data)
    })
  }
  // debugger
}

ResourceService.$inject = ['$resource']

angular
  .module('app')
  .service('ResourceService', ResourceService)
