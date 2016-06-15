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
f2 = Flight.create :flightNum => 'SF052', :date => '04.10.2016', :to => "SYD", :from => "MEL"
f3 = Flight.create :flightNum => 'TF042', :date => '04.11.2016', :to => "MEL", :from => "SYD"

User.destroy_all
simon = User.create :name => 'simon', :email => 'simon@ga.co', :password => 'admin', :password_confirmation => 'admin', :admin => true

boz = User.create :name => 'boz', :email => 'boz@ga.co', :password => 'admin', :password_confirmation => 'admin', :admin => true

Reservation.destroy_all
r1 = Reservation.create :row => 1,
:column => "A", :user_id => 1, :flight_id => 1

p1.flights << f1
puts "Plane one flight count: #{p1.flights.count}"
f1.reservations << r1
puts "Flight one reservation count: #{f1.reservations.count}"
simon.reservations << r1
puts "User one reservation count: #{simon.reservations.count}"
