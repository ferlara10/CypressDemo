
describe('Demoblaze API', () => {

    it("Crear un nuevo usuario", () => {
        //esta variable la utilizo para crear un usuario nuevo siempre que se ejecute.
        let randomNumber = Math.floor(Math.random() * 500000);        
        cy.request("POST", "/signup", {"username": `luisfer${randomNumber}`, "password": "123456"})
        .then( (response) => {
            console.log("the body is: "+ response.body);
            expect(response.status).to.eq(200);
            expect(response.body).to.be.empty;
        });
    });


    it("Crear un usuario que ya existe", () => {
        cy.request("POST", "/signup", {"username": "ferlara10", "password": "123456"})
        .then( (response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("errorMessage","This user already exist.");
        });
    });


    it("Login correcto", () => {
        cy.request("POST", "/login", {"username": "luisfer40", "password": "123456"})
        .then( (response) => {
            expect(response.status).to.eq(200);
            expect(response.body).contain("Auth_token");
        });
    });

    it("Login con usuario/password incorrecto", () => {
        cy.request("POST", "/login", {"username": "starwars", "password": "starwars123456"})
        .then( (response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("errorMessage","Wrong password.");
        });
    });


});