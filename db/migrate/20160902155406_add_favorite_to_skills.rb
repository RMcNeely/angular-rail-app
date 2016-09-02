class AddFavoriteToSkills < ActiveRecord::Migration
  def change
    add_column :skills, :favorite, :integer, default: 0
  end
end
