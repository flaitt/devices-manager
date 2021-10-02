require 'byebug'

Dado('que não haja dados na tabela {string}') do |string|
  debugger
end

Quando('é feita um requisição post no endpoint {string} com os seguintes atributos') do |string, table|
  # table is a Cucumber::MultilineArgument::DataTable
  # Write code here that turns the phrase above into concrete actions
end

Quando('eu consulto no banco de dados a tabela {string}') do |string|
  # Write code here that turns the phrase above into concrete actions
end

Então('há um dispositivo com o seguintes atributos') do |table|
  # table is a Cucumber::MultilineArgument::DataTable
  # Write code here that turns the phrase above into concrete actions
end

Então('o status da resposta é {string}') do |string|
  # Write code here that turns the phrase above into concrete actions
end

Dado('que haja dados na tabela {string}') do |string, table|
  # table is a Cucumber::MultilineArgument::DataTable
  # Write code here that turns the phrase above into concrete actions
end

Quando('é feita um requisição {string} no endpoint {string} com os seguintes atributos') do |string, string2|
  # Write code here that turns the phrase above into concrete actions
end

Então('não há um dispositivo com o seguintes atributos') do |table|
  # table is a Cucumber::MultilineArgument::DataTable
  # Write code here that turns the phrase above into concrete actions
end
