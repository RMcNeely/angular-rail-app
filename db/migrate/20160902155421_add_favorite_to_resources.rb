class AddFavoriteToResources < ActiveRecord::Migration
  def change
    add_column :resources, :favorite, :integer, default: 0
  end
end
