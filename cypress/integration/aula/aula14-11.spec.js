import 'cypress-file-upload';

describe('Criar novo projeto', function() {
    it('Verificando o titulo do post', function() {
        cy.visit('localhost:3000')

        cy.get(':nth-child(3) > .card-body > .btn')
            .click()

        cy.get('h1')
            .should('contain','Sistema automatico de posts')
    })
    it('Verificar se o login funciona', function(){
        cy.visit('localhost:3000')

        cy.get('#navbarDropdownMenuLink')
            .click()
            
        cy.get('[href="/admin/products"]')
            .click()

        cy.get('#inputEmail')
            .type('admin@admin.com')
        
        cy.get('#inputPassword')  
            .type('admin123')
            .type('{enter}')

    })
    it('Criando post novo', function(){
        const fileName = 'cypress.png';

        cy.visit('localhost:3000')

        cy.get('#navbarDropdownMenuLink')
            .click()
            
        cy.get('[href="/admin/products"]')
            .click()

        cy.get('#inputEmail')
            .type('admin@admin.com')
        
        cy.get('#inputPassword')  
            .type('admin123')
            .type('{enter}')

        cy.get('.btn')
            .click()

        cy.get('#postTitle')
            .click()
            .type('Post do cypress')

        cy.fixture(fileName).then(fileContent => {
            cy.get(':nth-child(2) > .form-control')
                .upload({ fileContent, fileName, mimeType: 'image/png' });
        });

        cy.get('#postDescription')
            .click()
            .type('Post sobre o framework Cypress')
        
        cy.get('#postBody')
            .click()
            .type('Cypress é um framework escrito em JS')

        cy.get('.btn')
            .click()


    })
})