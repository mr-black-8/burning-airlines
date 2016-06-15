json.extract! @flight, :id, :flightNum, :date, :to, :from, :airplane_id, :created_at, :updated_at
json.reservations @flight.reservations, :row, :column, :user_id, :flight_id
json.airplane @flight.airplane, :name, :row, :column
