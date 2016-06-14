json.array!(@flights) do |flight|
  json.extract! flight, :id, :flightNum, :date, :to, :from, :airplane_id
  json.url flight_url(flight, format: :json)
end
