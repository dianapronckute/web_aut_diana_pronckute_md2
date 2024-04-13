describe('Appointment Test', () => {
    it('Checks appointment creation', () => {
        // Visit your webpage
        cy.visit('https://katalon-demo-cura.herokuapp.com/');

        cy.get('#btn-make-appointment').click();

                // Set the username
        cy.get('#txt-username').type('John Doe');

        // Set the password
        cy.get('#txt-password').type('ThisIsNotAPassword');

        // Click the login button
        cy.get('#btn-login').click();

                // Set the Facility to "Seoul CURA Healthcare Center"
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center');

        // Check the "Apply for hospital readmission" checkbox
        cy.get('#chk_hospotal_readmission').check();

        // Select "Medicaid" from the Healthcare Program radio buttons
        cy.get('#radio_program_medicaid').check();

        // Set the visit date value to "30" using the datepicker widget
        cy.get('#txt_visit_date').type('30/04/2024'); // Assuming date format is dd/mm/yyyy

                // Scroll into view if necessary
        cy.get('#txt_comment').scrollIntoView();

        // Wait for the element to become visible and not covered
        cy.get('#txt_comment').should('be.visible').click({ force: true });

        // Set the comment to "CURA Healthcare Service"
        cy.get('#txt_comment').type('CURA Healthcare Service');

        // Click the "Book Appointment" button
        cy.get('#btn-book-appointment').click();

        // Validate that the new page contains the expected <h2> element
        cy.contains('h2', 'Appointment Confirmation').should('exist');

        // Validate appointment information on the new page
        cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
        cy.get('#hospital_readmission').should('have.text', 'Yes');
        cy.get('#program').should('have.text', 'Medicaid');
        cy.get('#visit_date').should('have.text', '30/04/2024');
        cy.get('#comment').should('have.text', 'CURA Healthcare Service');


    });
});
