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
      event = user.events.create(event_params)
      render json: event
    end
  end

  def update
    # if the event belongs to the current user, allow them to update it
    if current_user
    end
    event = user.events.update(event_params)
    render json: event
  end
  
  def destroy
    #if the event belongs to the current user, allow them to destroy it
    if current_user
    end
    event = user.events.destroy
  end

  def show
  end
  #############
  private
  ##############
  def event_params
    params.require(:event).permit(:image, :category, :about, :event_name)
  end

  def authorize_item
    unless @item.user == current_user 
      redirect_to items_path, error: 'You are not authorized'
    end
  end

end
