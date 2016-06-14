class ChangeColumnToInteger < ActiveRecord::Migration
  def self.up
    change_column :airplanes, :column, :integer
  end

  def self.down
    change_column :airplanes, :column, :text
  end
end
