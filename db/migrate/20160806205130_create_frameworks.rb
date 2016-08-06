class CreateFrameworks < ActiveRecord::Migration
  def change
    create_table :frameworks do |t|

      t.timestamps null: false
    end
  end
end
