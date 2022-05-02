# nguyenerscapstone

1. TITLE
Application Name: Teamly
2. OVERVIEW
We made this application because we wanted to create a platform for people to find others who are looking for athletes to play pick up sports. We all have either played or avidly enjoy watching sports and were eager to find a way to bridge the gap for athletes to play the sports they love.
3. FEATURES
This project includes:
Home page
About us page
Event Listings Page
Individual Event Listing Page
Sign In/Out Functionality
Sign Up Functionality
FULL CRUD Functionality
4. Running the Project:
SET UP
$ rails new app-name -d postgresql -T
$ cd app-name
$ rails db:create
$ git clone repourl
$ git checkout -b main
$ make initial commit to repo
.Installs:
ADD RSPEC
$ bundle add rspec-rails
$ rails generate rspec:install
ADD REACT
$ bundle add webpacker
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ yarn add @babel/preset-react
$ yarn add @rails/activestorage
$ yarn add @rails/ujs
$ rails generate react:install
$ rails generate react:component App
ADD DEVISE
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate

.In config/environments/development.rb add:
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

.In config/initializers/devise.rb
 Find this line:
$config.sign_out_via = :delete
 	And replace it with this:  $config.sign_out_via = :get

RAILS ROUTING
$ rails generate controller Home
. Add a file in app/views/home called index.html.erb then add:
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
. Add the following in app/views/layouts/application.html.erb:
. Find this line:
<%= javascript_importmap_tags %>
And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>

. Add the following in config/routes.rb:
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
REACT ROUTING
. $ yarn add react-router-dom@5.3.0
. In app/javascript/components/App.js add in the imports:
import {  BrowserRouter as  Router,  Route, Switch } from 'react-router-dom'
ADDING REACTSTRAP
. $ bundle add bootstrap
. $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
. $ yarn add reactstrap
. In app/assets/stylesheets/application.scss add:
@import 'bootstrap'
. rails g resource Events image:string category:string about:text event_name:string
. rails db:migrate
. In app/models/event.rb write:
belongs_to :user
. In app/models/user.rb write:
Devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
has_many :events
5. Dependencies:
    Dependencies:
    "@babel/preset-react": "^7.16.7",
    "@rails/activestorage": "^6.1.5",
    "@rails/ujs": "^6.1.5",
    "@rails/webpacker": "5.4.3",
    "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.6",
    "jest": "^27.5.1",
    "prop-types": "^15.8.1",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-router-dom": "5.3.0",
    "react_ujs": "^2.6.2",
    "reactstrap": "^9.0.2",
    "webpack": "^4.46.0",
    "webpack-cli": "^3.3.12"
    DevDependencies:
    "@wojtekmaj/enzyme-adapter-react-17": "^0.6.7",
    "react-test-renderer": "^18.0.0",
    "webpack-dev-server": "^3"

	Contributors: Omar Bowen, Kendra West, Paula Nguyen
