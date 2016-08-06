class AddDetailsToFramework < ActiveRecord::Migration
  def change
    add_column :frameworks, :homepage, :text
    add_column :frameworks, :documentation, :text
    add_column :frameworks, :description, :text
  end
end
