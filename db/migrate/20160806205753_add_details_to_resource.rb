class AddDetailsToResource < ActiveRecord::Migration
  def change
    add_column :resources, :name, :text
    add_column :resources, :description, :text
    add_column :resources, :link, :text
  end
end
