class AddDetailsToSkills < ActiveRecord::Migration
  def change
    add_column :skills, :name, :text
    add_column :skills, :category, :text
    add_column :skills, :description, :text
    add_column :skills, :link, :text
    add_column :skills, :documentation_link, :text
    add_column :skills, :version, :text
  end
end
