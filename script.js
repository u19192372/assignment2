
    let movies = [
        {
            id: number, //a unique identifier for this movie
            title: string, //the title of this movie
            director: string, //the name of the director of this movie
            runtime: string, //the runtime of this movie
            release_year: number, //the year this movie was released
            description: string, //a description of this movie
            poster_url: string, //a URL or file path to an image of the poster for this movie
            cinema_number: number, //the number of the cinema this movie will be showing in
            ticket_price: number, //the price of a single ticket for this movie
            tickets_in_cart: number //the number of tickets that have been booked for this movie
        }
        ];

        function addTicket() {
            let totalTicketNumber = document.getElementById("Ticket-Count").innerHTML; // gets the current ticket count
            totalTicketNumber++; // increases the ticket count by 1 
            document.getElementById("Ticket-Count").innerHTML = totalTicketNumber; // sets the ticket count to the recently decreased count
          }

          function removeTicket() {
            let totalTicketNumber = document.getElementById("Ticket-Count").innerHTML; // gets the current ticket count
            totalTicketNumber--; // decreases the ticket count by 1 
            document.getElementById("Ticket-Count").innerHTML = totalTicketNumber; // sets the ticket count to the recently decreased count
          }
    


    
  