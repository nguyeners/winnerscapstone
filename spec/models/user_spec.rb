require 'rails_helper'

RSpec.describe User, type: :model do
  describe "User Create" do

    it "should have an username" do
      user = User.create encrypted_password: "test@test.com"
      expect(user.errors[:email]).to_not be_empty
    end

  end
end
