class AddDetailsToResource < ActiveRecord::Migration
  def change
    add_column :resources, :text, :text
    add_column :resources, :framework_id, :integer
    add_column :resources, :technology_id, :integer
    add_column :resources, :language_id, :integer
    add_column :resources, :link, :text
  end
end
