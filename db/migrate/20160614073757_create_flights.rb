class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.text :flightNum
      t.text :date
      t.text :to
      t.text :from
      t.integer :airplane_id

      t.timestamps null: false
    end
  end
end
