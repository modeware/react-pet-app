 Demo React Pet App 

 Contains A Form View To Input Pet Details
 A Table View To Display Added PETS

 Bootstrap the APP - 

## Install json server: npm i -g json-server

First Start the Server JSON SERVER - 

## json-server --watch db/db.json

------------------ db.json file has the key value pairs for pets inside the db folder with the following structure:
{
  "pets": [
    {
      "id": 1,
      "name": "Scooby",
      "type": "Dog"
    },
    {
      "id": 2,
      "name": "Luna",
      "type": "Dog"
    },
    {
      "name": "Macy",
      "type": "Cat",
      "id": 3
    }
  ]
}

 Then install dependencies for the React app - 
-----------------  
## npm i 

 Start The App - 
----------------  ## npm start

 Test - 
## npm run test


-- Default Port: 3001 , update it in package.json if need be


