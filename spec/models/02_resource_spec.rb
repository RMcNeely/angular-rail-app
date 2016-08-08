require 'rails_helper'
describe 'Resource' do
  before(:each) do
    @resource = Resource.new(link: 'https://stackoverflow.com', skill_id: 1, text: "That super cool website that everyone uses all the time to fix errors.")
    @sinatra = Skill.new(name: 'Sinatra', documentation_link: "http://sinatra-documention-link.com", link: 'http://sinatra-home-link.com', category: 'framework', description: 'A light weight web framework for ruby similiar to Rails.')
  end

  it 'can be insantiated and is a valid object' do
    @resource
  end

  it 'passes validation' do
    @resource.save
  end

  it 'belongs to a Skill' do
    @sinatra.save
    @resource.save
    expect(@resource.skill).to match( @sinatra )
  end

end
