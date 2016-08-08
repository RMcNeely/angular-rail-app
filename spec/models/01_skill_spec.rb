require 'rails_helper'
describe 'Skill' do
  before :each do
    @angular = Skill.new(name: 'Angular', documentation_link: '')
    @sinatra = Skill.new(name: 'Sinatra', documentation_link: "http://sinatra-documention-link.com", link: 'http://sinatra-home-link.com', category: 'framework', description: 'A light weight web framework for ruby similiar to Rails.')
    @ruby = Skill.new(name: 'Ruby', description: 'The Ruby language! MINASWAN!!', link: 'http://ruby.doc.org', category: 'language')
    @command_line = Skill.new(name: 'Command Line', link: 'https://www.gnu.org/software/bash/', category: 'technology', description: 'How you interact with your computer without a GUI. An invaluable skill to have.')
    @stack_overflow = Skill.new(name: 'Stack Overflow', description: 'a website where developers go for answers and for code to copy', link: 'https://stackoverflow.com', category: 'miscellaneous')
  end

  it 'can be insantiated' do
    s = Skill.new
  end

  it "exists only as valid object" do
    expect(@stack_overflow).to be_valid
    expect(@command_line).to be_valid
    expect(@sinatra).to be_valid
    expect(@angular).to_not be_valid
    expect(@ruby).to_not be_valid
  end

  it "expects category scopes to be correct" do
    @stack_overflow.save
    @command_line.save
    @sinatra.save
    @angular.update(link: 'https://angular.io', documentation_link: 'https://docs.angularjs.org/api', category: 'framework', description: 'A JavaScript frontend framework used for rapid development')
    @ruby.update(documentation_link: 'http://ruby-doc.org/')
    expect(Skill.language.count).to eq(1)
    expect(Skill.framework.count).to eq(2)
    expect(Skill.technology.count).to eq(1)
    expect(Skill.miscellaneous.count).to eq(1)
  end

  it "has many resources" do
    @sinatra.save
    3.times do
      Resource.create(link: Faker::Internet.url, skill_id: @sinatra.id, text: Faker::ChuckNorris.fact)
    end
    expect(@sinatra.resources.count).to eq(3)
  end

end
