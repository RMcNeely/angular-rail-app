class AddDetailsToSkills < ActiveRecord::Migration
  def change
    add_column :skills, :name, :text
    add_column :skills, :type, :text
    add_column :skills, :description, :text
    add_column :skills, :homepage_link, :text
    add_column :skills, :documentation_link, :text
  end
end
