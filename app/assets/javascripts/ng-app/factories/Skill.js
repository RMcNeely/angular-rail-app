function Skill($resource, $stateParams) {
  debugger
  var cheating = window.location.hash.slice(2)
  var Skill = $resource('/api/skills' )
  //
  // this.getSkope = function(skopeName, callback) {
  // return   SkopeResource.query({skope: skopeName}, function(data){
  //     console.log(skopeName)
  //     console.log(data)
  //
  //   })
  // }

  return Skill
}
Skill.$inject = ['$resource', '$stateParams']
angular
  .module('app')
  .factory('Skill', Skill)
