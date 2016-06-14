# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Airplane.destroy_all
p1 = Airplane.create :name => 'PlaneyMcPlaneFace', :row => 40, :column => 8

p2 = Airplane.create :name => 'AnotherPlane', :row => 30, :column => 6

Flight.destroy_all
f1 = Flight.create :flightNum => 'PF042', :date => '04.09.2016', :to => "SYD", :from => "MEL"

User.destroy_all
simon = User.create :name => 'simon', :email => 'simon@ga.co', :password => 'admin', :password_confirmation => 'admin'

boz = User.create :name => 'boz', :email => 'boz@ga.co', :password => 'admin', :password_confirmation => 'admin'

Reservation.destroy_all
r1 = Reservation.create :row => 1,
:column => "A", :user_id => 1, :flight_id => 1

p1.flights << f1
puts "Plane one flight count: #{p1.flights.count}"
f1.reservations << r1
puts "Flight one reservation count: #{f1.reservations.count}"
simon.reservations << r1
puts "User one reservation count: #{simon.reservations.count}"
