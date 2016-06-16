class PagesController < ApplicationController
  before_action :authenticate

  def search
    
  end

  def reservation

  end

  def flight

  end

  private
    def authenticate
      redirect_to '/login' if !@current_user
    end

end
