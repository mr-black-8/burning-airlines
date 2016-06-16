json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :row, :column, :user_id, :flight_id, :seat_map
  json.url reservation_url(reservation, format: :json)
end
