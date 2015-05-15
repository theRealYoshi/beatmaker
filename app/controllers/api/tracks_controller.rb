class Api::TracksController < ApplicationController
  def index
    render json: Track.all
  end

  def create
    track = Track.new(track_params)
    if track.save
      render json: track
    else
      render json: "DIDN'T WORK", status: 422
    end
  end

  private

  def track_params
    roll_filter = {:roll => [:time, :notes => []]}
    params.require(:track).permit(:name, roll_filter)
  end
end
