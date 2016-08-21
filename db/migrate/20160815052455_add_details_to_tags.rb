class AddDetailsToTags < ActiveRecord::Migration
  def change
    add_column :tags, :skill_id, :integer
    add_column :tags, :resource_id, :integer
  end
end
