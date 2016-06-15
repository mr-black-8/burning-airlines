json.extract! @airplane, :id, :name, :row, :column, :created_at, :updated_at
json.flights @airplane.flights, :flightNum, :date, :to, :from
