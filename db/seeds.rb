# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Skill.create(name: 'Sinatra', documentation_link: "http://sinatra-documention-link.com", link: 'http://sinatra-home-link.com', category: 'framework', description: 'A light weight web framework for ruby similiar to Rails.')
Skill.create(name: 'Command Line', link: 'https://www.gnu.org/software/bash/', category: 'technology', description: 'How you interact with your computer without a GUI. An invaluable skill to have.')
Resource.create(link: 'https://stackoverflow.com', skill_id: 1, text: "That super cool website that everyone uses all the time to fix errors.")
