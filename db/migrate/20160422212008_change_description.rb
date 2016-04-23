class ChangeDescription < ActiveRecord::Migration
  def change
    rename_column :benches, :descrition, :description
  end
end
