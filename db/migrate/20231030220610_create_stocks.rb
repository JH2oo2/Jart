class CreateStocks < ActiveRecord::Migration[7.0]
  def change
    create_table :stocks do |t|
      t.integer :price
      t.string :index
      t.string :quantity
      t.string :name

      t.timestamps
    end
  end
end
