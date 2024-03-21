const http=require("http");
const home = require(`./views/home`);
const student = require(`./views/student`);

const PORT=3000;

function requestListener(request, response){
    const url=request.url;
    if(url==="/")
    {
        response.write(home.renderPage());
        response.end();
    }
    else if(url==="/student")
    {
        response.write(student.renderPage());
        response.end();
    }
    else
    {
        response.setHeader("Content-Type","text/html");
        response.write(`<html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404</title>
        </head>
        <body>
            <div>404 Not Fund</div>
        </body>
        </html>`);
        response.end();
    }

};


const server=http.createServer(requestListener);

function ListeningListener(){
    console.log(`Server is runing on ${PORT}`);

};

server.listen(PORT,ListeningListener);


