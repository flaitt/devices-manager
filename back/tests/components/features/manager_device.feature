#language: pt

Funcionalidade: Testando iterações com os dispositivos

Cenário: Inserir dispositivos
    Dado que não haja dados na tabela "devices"
    Quando é feita um requisição post no endpoint "/devices" com os seguintes atributos
    | categoryId | 1 |
    | color | blue |
    | partNumber | 1 |
    E eu consulto no banco de dados a tabela "devices"
    Então há um dispositivo com o seguintes atributos
    | category_id | 1 |
    | color | blue |
    | part_number | 1 |
    E o status da resposta é "200"

Cenário: Consultar dispositivos com sucesso
    Dado que haja dados na tabela "devices"
    | category_id | 1 |
    | color | blue |
    | part_number | 1 |
    Quando é feita um requisição "get" no endpoint "/devices" com os seguintes atributos
    Então há um dispositivo com o seguintes atributos
    | categoryId | 1 |
    | color | blue |
    | partNumber | 1 |
    E o status da resposta é "200"

Cenário: Deletar dispositivos com sucesso
    Dado que haja dados na tabela "devices"
    | category_id | 1 |
    | color | blue |
    | part_number | 1 |
    Quando é feita um requisição "delete" no endpoint "/devices" com os seguintes atributos
    Então não há um dispositivo com o seguintes atributos
    | categoryId | 1 |
    | color | blue |
    | partNumber | 1 |
    E o status da resposta é "200"