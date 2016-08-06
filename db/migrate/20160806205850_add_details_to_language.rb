class AddDetailsToLanguage < ActiveRecord::Migration
  def change
    add_column :languages, :homepage, :text
    add_column :languages, :documentation, :text
    add_column :languages, :description, :text
  end
end
