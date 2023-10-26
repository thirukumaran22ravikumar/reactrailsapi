class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string  :product_name
      t.integer :rate
      t.text  :details
      t.text  :about
      t.timestamps
    end
  end
end
