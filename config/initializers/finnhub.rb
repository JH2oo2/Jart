require 'finnhub_ruby'

FinnhubRuby.configure do |config|
  config.api_key['api_key'] = ENV['API_KEY']
end
