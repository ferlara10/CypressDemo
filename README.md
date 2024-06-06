# CypressDemo

Este proyecto muestra un pequeño ejemplo de UI Testing y tambien de API Testing utilizando Cypress.io


## ¿Cómo ejecutarlo?

1. Clonar el proyecto utilizando el commando: "git clone https://github.com/ferlara10/CypressDemo.git"

2. Instalar cypress con el comando: "npm install" -> Este comando instalara Cypress ya que se encuentra en el archivo package.json.

3. Al estar instalado Cypress ya podemos abrir su UI con el comando: "npm run cy:open"

4. Escogemos E2E Testing y Chrome como navegador principal

5. Cypress mostrara en su interfaz los archivos de test creados. Actualmente se tienen 2
* api.cy.js -> Este archivo contiene el ejemplo de API Testing del servicio: https://api.demoblaze.com/
* ecommerce.cy.js -> Este archivo contiene el ejemplo de UI Testing de la aplicacion web: https://demoblaze.com/

6. Al escoger cualquiera de los anteriores archivos se iniciará la ejecución
