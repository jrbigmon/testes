const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'content-Type': 'text'}) // 200 é codigo de status // content-type é o timpo de informação que iremos enviar
    
    switch(req.url){
        case '/':
            res.end('Voce esta na pagina inicial')
            break
        case '/contatos':
            res.end('Voce esta na pagina de contatos')
            break       
        default: 
            res.end('Nao encontrado o caminho')
            break
    }

}).listen(3030,'localhost')