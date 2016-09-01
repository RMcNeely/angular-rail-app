# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
a  = Skill.create(name: 'Ruby', documentation_link: "http://ruby-doc.org/", link: 'https://www.ruby-lang.org/en/', category: 'language', description: 'The only language the is designed to make you happy! An object oriented language with easy to read syntax', version: '2.3')
b = Skill.create(name: 'JavaScript', documentation_link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", category: 'language', description: 'The language that modernized the web. Has numerous frameworks and is rapidly growing everywhere. Also known as ECMAScript.', version: '6')
c = Skill.create(name: 'Sinatra', documentation_link: "http://sinatra-documention-link.com", link: 'http://sinatra-home-link.com', category: 'framework', description: 'A light weight web framework for ruby similiar to Rails.')
d = Skill.create(name: 'Rails', documentation_link: "http://guides.rubyonrails.org/index.html", link: 'http://guides.rubyonrails.org/index.html', description: 'A strong opinionated Ruby framework that makes it easy create new projects. It is known for its favoring of convention over configuration.', category: 'framework', version: '5.0')
e = Skill.create(name: 'Angular', documentation_link: "https://docs.angularjs.org/api", link: 'https://angularjs.org/', category: 'framework', description: 'Google\'s implementation of a JS framework (because apparently every tech giant sponsors their own). Has a M-V-VM structure that makes it easy to implement your website\'s frontend. Can be combined with Rails or other backend frameworks.', version: '2.0' )
f = Skill.create(name: 'Command Line', link: 'https://www.gnu.org/software/bash/', category: 'technology', description: 'How you interact with your computer without a GUI. An invaluable skill to have.')
g = Skill.create(name: 'Ruby Version Manager (RVM)', link: 'https://rvm.io/', category: 'technology', description: 'A Ruby program that makes it easy to install and manage different installs of the Ruby language. It can also manage the different Gemsets that you install to each of them. Invaluable for updating or making sure that you have a version that you may need for a specific project.')
h = Resource.create(name: 'Stack Overflow', link: 'https://stackoverflow.com', description:"That super cool website that everyone uses all the time to fix errors.")
i = Resource.create(name: 'Faker', link: 'https://github.com/stympy/faker', description:"A cool Ruby gem that you can use to make things up to stub out data when working on a project. Very useful in creating useful mocups.")
j= Resource.create(name: 'Corneal', link: 'https://github.com/thebrianemory/corneal', description:'A Sinatra file structure generator! Made by a fellow FlatIron student.')
k = Resource.create(name: "Improving Rest Calls with ngResource", link: 'https://devdactic.com/improving-rest-with-ngresource/', description:'A useful summary of how to take advantage of the AngularJS module  angular-resource (ngResource). By using ngResource instead of your regular $http calls, you can make your code more RESTful. This guide shows you have to make a $resource call with extra parameters and how to refer to it.')
l = Resource.create(name: "AngularJS: Factory vs Service vs Provider", link: "https://tylermcginnis.com/angularjs-factory-vs-service-vs-provider-5f426cfe6b8c#.jva2tsj2x", description: 'A blog post talking about the differences in using various AngularJS parts and how to use them.')

Tag.create(skill_id:c.id, resource_id: j.id)
Tag.create(skill_id:a.id, resource_id: j.id)
Tag.create(skill_id:a.id, resource_id: h.id)
Tag.create(skill_id:b.id, resource_id: h.id)
Tag.create(skill_id:c.id, resource_id: h.id)
Tag.create(skill_id:d.id, resource_id: h.id)
Tag.create(skill_id:e.id, resource_id: h.id)
Tag.create(skill_id:f.id, resource_id: h.id)
Tag.create(skill_id:g.id, resource_id: h.id)
Tag.create(skill_id:b.id, resource_id: k.id)
Tag.create(skill_id:e.id, resource_id: k.id)
Tag.create(skill_id:e.id, resource_id: l.id)
Tag.create(skill_id:b.id, resource_id: l.id)
