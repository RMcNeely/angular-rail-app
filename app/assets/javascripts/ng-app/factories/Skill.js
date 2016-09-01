function Skill() {
// debugger
  var Skill = {
      'id': '',
      'name': '',
      'category': '',
      'description': '',
      'link': '',
      'documentation_link': '',
      'version': '',
      'tags': []
    }
  console.log("Skill factory checking in")
  return Skill
}
angular
.module('app')
.factory('Skill', Skill)
