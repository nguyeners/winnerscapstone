require 'rails_helper'

RSpec.describe Event, type: :model do
  describe "Event Create" do
    
    it "should have an event name" do
      event = Event.create about: "Our local game that we hold every week at the park by my house. You know the one", category: "Calvinball", image: "https://mediaproxy.tvtropes.org/width/350/https://static.tvtropes.org/pmwiki/pub/images/Calvinball.jpg"
      expect(event.errors[:event_name]).to_not be_empty
    end
    
    it "should have an about" do
      event = Event.create event_name: "Calvin's weekly pickup game", category: "Calvinball", image: "https://mediaproxy.tvtropes.org/width/350/https://static.tvtropes.org/pmwiki/pub/images/Calvinball.jpg"
      expect(event.errors[:about]).to_not be_empty
    end

    it "should have an a category" do
      event = Event.create event_name: "Calvin's weekly pickup game", about: "Our local game", image: "https://mediaproxy.tvtropes.org/width/350/https://static.tvtropes.org/pmwiki/pub/images/Calvinball.jpg"
      expect(event.errors[:category]).to_not be_empty
    end

    it "should have an an image" do
      event = Event.create event_name: "Calvin's weekly pickup game", about: "Our local game", category: "Calvinball"
      expect(event.errors[:image]).to_not be_empty
    end

    
  end
end