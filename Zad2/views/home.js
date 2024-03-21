function renderPage() {
    return `
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>home</title>
    </head>
    <body>
        <form action="/submit" method="POST">
            <label for="name">Imię: </label> 
            <input type="text" name="name"> 
            <label for="lastname">Nazwisko: </label> 
            <input type="text" name="lastname">
            <label for="Age">Wiek: </label> 
            <input type="number" name="Age">
            <label for="gender">Płeć: </label> 
            <select name="gender">
            <option value="Male">Kobieta</option>
            <option value="Female">Mężczyzna</option>
            <option value="Other">Inny</option>
            </select>
            <label for="code">Numer albumu: </label> 
            <input type="number" name="code">
            <label for="studyField">Kierunek: </label> 
            <input type="text" name="studyField">
        </form>
        <button>wyślij</button>
    </body>
    </html>
    `
    ;
}


module.exports = {
    renderPage
};