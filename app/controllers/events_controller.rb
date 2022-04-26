class EventsController < ApplicationController

  def index
    events = Event.all
    render json: events
  end

  def show
    event = Event.find(params[:id])
    render json: event
  end

  def create
    if !current_user
      render json: {status: 422, error: "Must be logged in"}
    else
      event = current_user.events.create(event_params)
      render json: event
    end
  end

  def update
    event = Event.find(params[:id])
    if event.user_id == current_user.id
      event.update(event_params)
      if event.valid?
        render json: event
      else
        render json: event.errors
      end
    else
      render json: {status: 401, error: "You are not the owner of this event"}
    end
  end

  def destroy
    event = Event.find(params[:id])
    if event.user_id == current_user.id
      event.destroy
      render json: event
    else
      render json: {status: 401, error: "You are not the owner of this event"}
    end
  end

  ########
  private
  ########

  def event_params
    params.require(:event).permit(:image, :category, :about, :event_name)
  end

  ###Not important yet, might be later.
  # def authorize_item
  #   unless event.user == current_user
  #     redirect_to items_path, error: 'You are not authorized'
  #   end
  # end

end
