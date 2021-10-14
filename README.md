# Devices Manager

Disponivel em : http://aws-challange.smartcommand.com.br.s3-website.us-east-2.amazonaws.com/


# Backend

## Run

Para subir a aplicação deve-se rodar em `/back/nodejse-api` 

```npm i```

```URL_DB=mysql://username:password@databasehost:3306/name_of_your_tavble npm start ```

## Run the tests #WIP

Para rodar os testes de componente, caminhe para tests/components e rode o comando:

``` cucumber ```

## Utilização da api

A api é acessível por requisições `HTTP GET, POST e DELETE` 

Você pode testar a última versão publica exposta por mim: `http://ec2-18-219-151-233.us-east-2.compute.amazonaws.com:3000`

Tendo assim, 3 ações, controladas pelos verbos HTTP e informações no `body`, sendo elas:

### 1. POST /device - Adicionar dispositivo
 ```
{
    "color": "green",
    "categoryId": "2",
    "partNumber": "12455"
}
 ```

 ### 2. GET /devices - Consultar dispositivos
 ```
{ 
}
 ```

### 3. DELETE /device - Remover dispositivo (por ID)
 ```
{
    "id": 2
}
 ```
 ### 4. POST /category - Adicionar dispositivo
 ```
{
    "name": "category name"
}
 ```

 ### 5. GET /categories - Consultar dispositivos
 ```
{ 
}
 ```

### 6. DELETE /category - Remover dispositivo (por ID)
 ```
{
    "id": 2
}
 ```

# Frontend

## Environment

Troque o valor de BACKEND_URL em /devices-manager/frontend/src/environments para apontar para seu backend

## Run

Para subir a aplicação deve-se rodar em `/frontend` 

```npm i```

```npm start ```
