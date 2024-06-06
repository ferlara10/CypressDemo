import products from "../fixtures/products.json"

describe('My First Test', () => {
  
            
  console.log(products);
  it("Finish a purchase with X items", () => {
    //1-Step: Open the URL
    cy.visit('https://demoblaze.com/');

    //2-Step: Adding products to the cart
    products.forEach((item, k) => {
      cy.get("a.hrefch").contains(item.name).click();
      cy.get("a.btn").contains("Add to cart").click();
      cy.get("a.nav-link").contains("Home").click();
    });

    //3-Step: Visit the cart
    cy.get("a.nav-link").contains("Cart").click();
    cy.get("button.btn-success").contains("Place Order").click();

    //4-Step: Fill the form
    cy.get("#name").type("Luis");
    cy.get("#card").type("3700 0000 0000 002");
    cy.get("button.btn-primary").contains("Purchase").click();

  });

  /*  
  cy.visit('https://demoblaze.com/')
  cy.get("a.hrefch").contains("Nexus 6").click();
  cy.get("a.btn").contains("Add to cart").click();
  cy.on('window:alert', (t)=>{
    //assertions
    expect(t).to.contains('Product added');
  })
  cy.get("a.nav-link").contains("Home").click();
  */
  
})