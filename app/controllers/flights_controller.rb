class FlightsController < ApplicationController
  before_action :authenticate, only: [:new]
  before_action :set_flight, only: [:show, :edit, :update, :destroy]

  # GET /flights
  # GET /flights.json
  def index
    @flights = Flight.all
  end

  # GET /flights/1
  # GET /flights/1.json
  def show
  end

  # GET /flights/new
  def new
    @flight = Flight.new
    @airplanes = Airplane.all
  end

  # GET /flights/1/edit
  def edit
    @airplanes = Airplane.all
  end

  # POST /flights
  # POST /flights.json
  def create
    @flight = Flight.new(flight_params)

    respond_to do |format|
      if @flight.save

        reservation = Reservation.new
        reservation.flight_id = @flight.id
        r = @flight.airplane.row
        c = @flight.airplane.column
        seat_array = []
        i = 0
        j = 0

        while i < r do
          row = []
          while j < 6 do
            row.push(false)
            j += 1
          end
          seat_array.push(row)
          i += 1
          j = 0
        end

        reservation.seat_map = seat_array
        reservation.save

        format.html { redirect_to @flight, notice: 'Flight was successfully created.' }
        format.json { render :show, status: :created, location: @flight }
      else
        format.html { render :new }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /flights/1
  # PATCH/PUT /flights/1.json
  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Flight was successfully updated.' }
        format.json { render :show, status: :ok, location: @flight }
      else
        format.html { render :edit }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /flights/1
  # DELETE /flights/1.json
  def destroy
    @flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_url, notice: 'Flight was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def flight_params
      params.require(:flight).permit(:flightNum, :date, :to, :from, :airplane_id)
    end

    def authenticate
      redirect_to '/search' unless @current_user && @current_user.admin
    end
end
