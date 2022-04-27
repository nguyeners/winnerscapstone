user1 = User.first || User.create(email: 'test@test.com', password: 'password', password_confirmation: 'password')

events = [
  {
    image: nil,
    category: 'Soccer',
    about: 'playing soccer at the park',
    event_name: 'Omar\'s soccer club'
  },
  {
    image: nil,
    category: 'Basketball',
    about: 'playing basketball at a different park',
    event_name: 'Kendra\'s basketball club'
  },
  {
    image: ni,
    category: 'Frisbee',
    about: 'playing ',
    event_name: 'Paula\'s frisbee club'
  }
]

events.each do |each_event|
  user1.events.create(each_event)
  puts "creating event #{each_event}"
end
