class AddDetailsToTechnology < ActiveRecord::Migration
  def change
    add_column :technologies, :homepage, :text
    add_column :technologies, :documentation, :text
    add_column :technologies, :description, :text
  end
end
