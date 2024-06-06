import products from "../fixtures/products.json"

describe('Demoblaze purchase', () => {
  
            
  console.log(products);
  it("Finish a purchase with X items", () => {
    
    let totalAmount = 0;
    //1-Step: Open the URL
    cy.visit('https://demoblaze.com/');

    //2-Step: Adding products to the cart
    products.forEach((item, k) => {
      cy.addCart(item.name);
      totalAmount += item.price;
    });

    //3-Step: Visit the cart
    cy.get("a.nav-link").contains("Cart").click();
    cy.get("button.btn-success").contains("Place Order").click();

    //4-Step: Fill the form
    cy.fillForm("Luis", "3700 0000 0000 002");

    //5-Step: Assess the values    
    cy.get("p.lead").invoke("text").should("contain", `Amount: ${totalAmount} USD`);
    cy.get("button.confirm").contains("OK").click();    

  });  
})