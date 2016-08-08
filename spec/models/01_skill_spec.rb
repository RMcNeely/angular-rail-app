require 'rails_helper'
describe 'Skill' do
  before :each do
    @angular = Skill.new(name: 'Angular', documentation_link: '')
    @sinatra = Skill.new(name: 'Sinatra', documentation_link: "http://sinatra-documention-link.com", link: 'http://sinatra-home-link.com', category: 'framework', description: 'A light weight web framework for ruby similiar to Rails.')
    @ruby = Skill.new(name: 'Ruby', description: 'The Ruby language! MINASWAN!!', link: 'http://ruby.doc.org', category: 'language')
    command_line = Skill.new(name: 'Command Line')
  end

  it 'can be insantiated' do
    s = Skill.new
  end

  it "exists only as valid object" do
    expect(@angular).to_not be_valid
    expect(@sinatra).to be_valid
  end

  it "expects some test items to fail" do
    expect(@ruby).to_not be_valid
  end

end
