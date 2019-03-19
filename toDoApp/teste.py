import requests as Req

url_padrao ="http://localhost:3003/api/todo"

#get 
Dados = Req.api.get(url).json()
#post
item ={
    "description": "Fazer reservas de hotel"
}
item2 ={
    "description":"Comprar batata"
}
#Dados = Req.api.post(url, json=item).json()

#update
#Dados = Req.api.update(url+'id=', json=item2).json()


#delete
""" delet = {
    id = x
} """
#Dados = Req.api.delete(url, json=item).json()

print(Dados)