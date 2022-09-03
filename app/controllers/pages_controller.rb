class PagesController < ApplicationController
  # before_action: barcode

  def home
    @filename = params[:filename]
    # @content = params[:file].path
  end

  # private

  def barcode
    @barcode = barcode_params
    # @barcode_params =
    # binding.pry
    puts @barcode
  end

  private

  def barcode_params
    params.require(:page).permit(:symbology, :data)
  end
end
