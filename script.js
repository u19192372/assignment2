window.onload = function() {
    // let movies = [
    //     {
    //         id: number, //a unique identifier for this movie
    //         title: string, //the title of this movie
    //         director: string, //the name of the director of this movie
    //         runtime: string, //the runtime of this movie
    //         release_year: number, //the year this movie was released
    //         description: string, //a description of this movie
    //         poster_url: string, //a URL or file path to an image of the poster for this movie
    //         cinema_number: number, //the number of the cinema this movie will be showing in
    //         ticket_price: number, //the price of a single ticket for this movie
    //         tickets_in_cart: number //the number of tickets that have been booked for this movie
    //     }
    //     ];

    class Movie {
        constructor(id, title,director,runtime,release_year,description, poster_url, cinema_number, ticket_price, tickets_in_cart) {
          this.id = id;
          this.title = title;
          this.director = director;
          this.runtime = runtime;
          this.release_year = release_year;
          this.description = description;
          this.poster_url = poster_url;
          this.cinema_number = cinema_number;
          this.ticket_price = ticket_price;
          this.tickets_in_cart = tickets_in_cart;
          
        }

         getId() {
           console.log("The id is : "+ this.id);
          }
        
      }

      let newMovies = [
          new Movie( 1,"The Call","Lee Chung-hyeon","1Hr 52min", 2020, "Connected by phone in the same home but 20 years apart, a serial killer puts another woman's past -- and life -- on the line to change her own fate.", 
           "./images/call.jpg", 1,  10, 0 ),
           new Movie( 2,"The Call 2 ","2 Lee Chung-hyeon","1Hr 52min 2", 2020, "2 Connected by phone in the same home but 20 years apart, a serial killer puts another woman's past -- and life -- on the line to change her own fate.", 
           "./images/call.jpg", 1,  10, 0 )
      ];

    // let movies = [
    //     {
    //         "id": 1, 
    //         "title": "The Call", 
    //         "director": "Lee Chung-hyeon", 
    //         "runtime": "1Hr 52min", 
    //         "release_year": 2020, 
    //         "description": "Connected by phone in the same home but 20 years apart, a serial killer puts another woman's past -- and life -- on the line to change her own fate.", 
    //         "poster_url": "./images/call.jpg", 
    //         "cinema_number": 1, 
    //         "ticket_price": 10, 
    //         "tickets_in_cart": 0 
    //     },
    //     {
    //         "id": 2, 
    //         "title": "Fractured", 
    //         "director": "Brad Anderson", 
    //         "runtime": "1Hr 40min", 
    //         "release_year": 2019, 
    //         "description": "After his wife and injured daughter disappear from the emergency room, a man becomes convinced the hospital is hiding something.", 
    //         "poster_url": "./images/fractured.jpg", 
    //         "cinema_number": 2, 
    //         "ticket_price": 15, 
    //         "tickets_in_cart": 0 
    //     },
    //     // {
    //     //     "id": 3, 
    //     //     "title": "Sightless", 
    //     //     "director": "Cooper Karl", 
    //     //     "runtime": "1Hr 29min", 
    //     //     "release_year": 2020, 
    //     //     "description": "After a vicious attack leaves a young woman blind, she must fight back to escape her new reality in which people are not who they seem to be.", 
    //     //     "poster_url": "./images/sightless.jpg", 
    //     //     "cinema_number": 3, 
    //     //     "ticket_price": 15, 
    //     //     "tickets_in_cart": 0 
    //     // },
    //     // {
    //     //     "id": 4, 
    //     //     "title": "Room", 
    //     //     "director": "Cooper Karl", 
    //     //     "runtime": "1Hr 29min", 
    //     //     "release_year": 2020, 
    //     //     "description": "After a vicious attack leaves a young woman blind, she must fight back to escape her new reality in which people are not who they seem to be.", 
    //     //     "poster_url": "./images/room.jpg", 
    //     //     "cinema_number": 4, 
    //     //     "ticket_price": 10, 
    //     //     "tickets_in_cart": 0 
    //     // },
    //      ];

         let localStorageMovie = {} 

      
        for( i=0; i< newMovies.length; i++){
            //Set home page movie card data
            document.getElementById('main-movie-title').innerHTML= newMovies[i].title
            document.getElementById( "cinema-id").innerHTML= "Cinema "+ newMovies[i].cinema_number
            document.getElementById('description').innerHTML= newMovies[i].description
            document.getElementById('img-card').src= newMovies[i].poster_url
            document.getElementById('main-movie-title').innerHTML = newMovies[i].title;

            //Set Modal object data
            document.getElementById('modal-title').innerHTML =  (newMovies[i].title);

            document.getElementById('modal-movie-title').innerHTML =  "Title : " + (newMovies[i].title);
            document.getElementById('director-name').innerHTML = "Director/s : " + (newMovies[i].director);
            document.getElementById('runtime').innerHTML = "Runtime : " + (newMovies[i].runtime);
            document.getElementById('release-year').innerHTML = "Release : " + (newMovies[i].release_year);
        }

        document.getElementById("add-ticket-btn").addEventListener("click", function addTicket() {
            newMovies.this;
            let totalTicketNumber = document.getElementById("Ticket-Count").innerHTML; // gets the current ticket count
            totalTicketNumber++; // increases the ticket count by 1 
            document.getElementById("Ticket-Count").innerHTML = totalTicketNumber; // sets the ticket count to the recently decreased count

            addLocatStorageData(2,25,2);
          });

        function addTicket() {
            let totalTicketNumber = document.getElementById("Ticket-Count").innerHTML; // gets the current ticket count
            totalTicketNumber++; // increases the ticket count by 1 
            document.getElementById("Ticket-Count").innerHTML = totalTicketNumber; // sets the ticket count to the recently decreased count
          }

          function addLocatStorageData(moviesInCart,TotalCost,numberInCart) {
           // sets the ticket count to the recently decreased count
           moviesInCart++;
           TotalCost++;
           numberInCart++;

           console.log(moviesInCart);
           console.log(TotalCost);
           console.log(TotalCost);
          }

          function removeTicket() {
            let totalTicketNumber = document.getElementById("Ticket-Count").innerHTML; // gets the current ticket count
            totalTicketNumber--; // decreases the ticket count by 1 
            document.getElementById("Ticket-Count").innerHTML = totalTicketNumber; // sets the ticket count to the recently decreased count
          }
    
            function TotalPrice(){
                // calculate TotalPrice of tickets in cart 
            }

};


//display table data

    
    
  