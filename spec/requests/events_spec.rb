require 'rails_helper'

RSpec.describe "Events", type: :request do
  describe "Event.create" do
      
    before(:each) do
      user = User.create(email: "fightme4@gmail.com", password:"noforReal", password_confirmation:"noforReal")
    sign_in user
    end

    it "doesn't create an event without a name" do

      event_params = {
        event: {
          about: 'test',
          category: 'test',
          image: 'test'
        }
      }
      post '/events', params: event_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['event_name']).to include "can't be blank"
    end

    it "doesn't create an event without an about" do

      event_params = {
        event: {
          event_name:'test',
          category: 'test',
          image: 'test'
        }
      }

      post '/events', params: event_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['about']).to include "can't be blank"
    end

    it "doesn't create an event without a category" do

      event_params = {
        event: {
          event_name:'test',
          about: 'test',
          image: 'test'
        }
      }

      post '/events', params: event_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['category']).to include "can't be blank"
    end

    it "doesn't create an event without an image" do
      event_params = {
        event: {
          event_name:'test',
          about: 'test',
          category: 'test',
        }
      }
      post '/events', params: event_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['image']).to include "can't be blank"
    end
  end
  
  describe "GET /index" do
    
    before(:each) do
      @user = User.create(email: "fightme3@gmail.com", password:"noforReal", password_confirmation:"noforReal")
      sign_in @user
    end

    it "gets a list of events" do
      test = @user.events.create(
        event_name: 'test',
        category: 'test',
        about: 'test',
        image: 'test'
      )

      get '/events'

      event = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(event.length).to eq 1
    end
  end
end

