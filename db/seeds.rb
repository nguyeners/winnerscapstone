user1 = User.first || User.create(email: 'test@test.com', password: 'password', password_confirmation: 'password')

events = [
  {
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Soccer',
    about: 'playing soccer at the park',
    event_name: 'Omar\'s soccer club'
  },
  {
    image: 'https://images.unsplash.com/photo-1562519819-016930ada31b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJhc2tldGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    category: 'Basketball',
    about: 'playing basketball at a different park',
    event_name: 'Kendra\'s basketball club'
  },
  {
    image: 'https://images.unsplash.com/photo-1584846884362-e1ea3d18e53f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZyaXNiZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    category: 'Frisbee',
    about: 'playing',
    event_name: 'Paula\'s frisbee club'
  }
]

events.each do |each_event|
  user1.events.create(each_event)
  puts "creating event #{each_event}"
end
