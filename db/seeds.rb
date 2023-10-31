# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# require 'finnhub_ruby'
finnhub_client = FinnhubRuby::DefaultApi.new
stock_symbols = finnhub_client.stock_symbols('US')

Stock.destroy_all

stock_symbols.each do |stock_symbol|
  Stock.create(
    name: stock_symbol.description,
    index: stock_symbol.display_symbol,
    quantity: rand(1..100),
    price: rand(1..100)
  )
end
