function SkopeService($resource) {

  var SkopeResource = $resource('/all-skills')
  
  this.getSkope = function(skopeName, callback) {
  return   SkopeResource.query({skope: skopeName}, function(data){
      console.log(skopeName)
      console.log(data)

    })
  }
  // debugger
}

SkopeService.$inject = ['$resource']

angular
  .module('app')
  .service('SkopeService', SkopeService)
