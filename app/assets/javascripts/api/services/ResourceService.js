function ResourceService() {

  // var Resource = $resource('/all-resources')
console.log("I'm important too!!!")
  // debugger
  // this.getResource = function(skopeName, callback) {
  // return   Resource.query({skope: skopeName, }, function(data){
  //     console.log(skopeName)
  //     console.log(data)
  //   })
  // }
}


angular
  .module('app')
  .service('ResourceService', ResourceService)
