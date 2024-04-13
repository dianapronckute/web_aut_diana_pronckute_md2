describe('Appointment Test', () => {
    it('Checks history', () => {
        // Visit your webpage
        cy.visit('https://katalon-demo-cura.herokuapp.com/');

        cy.get('#btn-make-appointment').click();

                // Set the username
        cy.get('#txt-username').type('John Doe');

        // Set the password
        cy.get('#txt-password').type('ThisIsNotAPassword');

        // Click the login button
        cy.get('#btn-login').click();

        // Validate that the new page contains the expected <h2> element
        cy.contains('h2', 'Make Appointment').should('exist');

        // Click on the toggle button to activate the sidebar
        cy.get('#menu-toggle').click();

        // Validate that the sidebar is active
        cy.get('#sidebar-wrapper').should('have.class', 'active');

        // Click on the "History" link in the sidebar
        cy.get('nav#sidebar-wrapper a[href="history.php#history"]').click();

        // Validate that the new page contains the expected <h2> element
        cy.contains('h2', 'History').should('exist');

        // Validate that the new page contains the expected <h2> element
        cy.contains('p', 'No appointment').should('be.visible');

    });
});
