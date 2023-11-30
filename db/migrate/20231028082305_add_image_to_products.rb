class AddImageToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :avatars, :string
  end
end
