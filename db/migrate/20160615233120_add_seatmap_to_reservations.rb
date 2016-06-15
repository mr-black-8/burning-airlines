class AddSeatmapToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :seat_map, :text
  end
end
