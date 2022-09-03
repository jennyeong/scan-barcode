class PagesController < ApplicationController
  # before_action: barcode

  def home
    @filename = params[:filename]
    # @content = params[:file].path

  end


  def barcode
    @barcode = barcode_params
    # @barcode_params =
    # binding.pry
    # puts @barcode
    redirect_to barcode_show_path
  end

  def show_barcode
    @result = "successful!"

  end

  private

  def barcode_params
    params.require(:page).permit(:symbology, :data)
  end
end
