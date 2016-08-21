function SkillService($resource) {
  var skill = this
  // debugger
console.log(skill)
console.log('SkillService still sticking around')
  // this.getSkope = function(skopeName, callback) {
  // return   SkopeResource.query({skope: skopeName}, function(data){
  //     console.log(skopeName)
  //     console.log(data)
  //
  //   })
  // }
  // skill.buildSkill = function Skill(data) {
  //   skill.newSKillName =data.newSKillName
  //   skill.newSkillDescription = data.newSkillDescription
  //   skill.newSkillLink = data.newSkillLink
  //   skill.newSkillDocumentationLink =  akill.newSkillDocumentationLink
  //   skill.newSkillVersion = data.newSkillVersion
  //   console.log("Skill Built!")
  // }
  return this
}

// SkopeService.$inject = ['$resource']

angular
  .module('app')
  .service('SkillService', SkillService)
