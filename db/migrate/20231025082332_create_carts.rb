class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :user_id
      t.integer :quantity
      t.integer  :rate
      t.timestamps
    end
  end
end
