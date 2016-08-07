require 'rails_helper'
describe 'Skill' do

  it 'can be insantiated' do
    s = Skill.new
  end

  it "exists only as valid object" do
    rails = Skill.new(name: "Rails")
    angular = Skill.new(name: 'Angular', documentation_link: '')
    sinatra = Skill.new(name: 'Sinatra', documentation_link: "http://sinatra-documention-link.com", homepage_link: 'http://sinatra-home-link.com')
    expect(rails).to_not be_valid
    expect(angular).to_not be_valid
    expect(sinatra).to be_valid
  end
end
