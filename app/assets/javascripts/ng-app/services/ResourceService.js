function ResourceService($resource) {

  var Resource = $resource('/all-resources')

  // debugger
  this.getResource = function(skopeName, callback) {
  return   Resource.query({skope: skopeName, }, function(data){
      console.log(skopeName)
      console.log(data)
    })
  }
}

ResourceService.$inject = ['$resource']

angular
  .module('app')
  .service('ResourceService', ResourceService)
