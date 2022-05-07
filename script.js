window.onload = function() {
    
    (function() {
        let movieList = document.querySelector(".movie-list");

    let movies = [
        {
            "id": 1, 
            "title": "The Call", 
            "director": "Lee Chung-hyeon", 
            "runtime": "1Hr 52min", 
            "release_year": 2020, 
            "description": "Connected by phone in the same home but 20 years apart, a serial killer puts another woman's past -- and life -- on the line to change her own fate.", 
            "poster_url": "./images/call.jpg", 
            "cinema_number": 1, 
            "ticket_price": 10, 
            "tickets_in_cart": 0 
        },
        {
            "id": 2, 
            "title": "Fractured", 
            "director": "Brad Anderson", 
            "runtime": "1Hr 40min", 
            "release_year": 2019, 
            "description": "After his wife and injured daughter disappear from the emergency room, a man becomes convinced the hospital is hiding something.", 
            "poster_url":"./images/fractured.jpg", 
            "cinema_number": 2, 
            "ticket_price": 15, 
            "tickets_in_cart": 0 
        },
        {
            "id": 3, 
            "title": "Sightless", 
            "director": "Cooper Karl", 
            "runtime": "1Hr 29min", 
            "release_year": 2020, 
            "description": "After a vicious attack leaves a young woman blind, she must fight back to escape her new reality in which people are not who they seem to be.", 
            "poster_url": "./images/sightless.jpg", 
            "cinema_number": 3, 
            "ticket_price": 15, 
            "tickets_in_cart": 0 
        },
        // {
        //     "id": 4, 
        //     "title": "Room", 
        //     "director": "Cooper Karl", 
        //     "runtime": "1Hr 29min", 
        //     "release_year": 2020, 
        //     "description": "After a vicious attack leaves a young woman blind, she must fight back to escape her new reality in which people are not who they seem to be.", 
        //     "poster_url": "./images/room.jpg", 
        //     "cinema_number": 4, 
        //     "ticket_price": 10, 
        //     "tickets_in_cart": 0 
        // },
         ];

          //display list
         
            let movieItems = "";
            for (movie1 of movies) {
            // movieItems += "Cinema"+ movie1.cinema_number+ "&lt;li&gt;" + movie1.description+ "&lt;/li&gt;";
            movieItems+=   "Cinema"+ movie1.cinema_number+  " "  +movie1.poster_url+  " " +movie1.title+  " " ; 
            }
        movieList.innerHTML = movieItems;
        })();



      
        for( i=0; i< movies.length; i++){
            //Set home page movie card data
             document.getElementById('movie-title').innerHTML= movies[i].title
             document.getElementById( "cinema-id").innerHTML= "Cinema "+ movies[i].cinema_number
              document.getElementById('description').innerHTML= movies[i].description
            document.getElementById('img-card').src= movies[i].poster_url

            //Set Modal object data
            document.getElementById('modal-title').innerHTML =  (movies[i].title);
            document.getElementById('movie-title').innerHTML = "Title : " + (movies[i].title);
            document.getElementById('director-name').innerHTML = "Director/s : " + (movies[i].director);
            document.getElementById('runtime').innerHTML = "Runtime : " + (movies[i].runtime);
            document.getElementById('release-year').innerHTML = "Release : " + (movies[i].release_year);
        }
       
        document.getElementById("hello").innerHTML = "Bonjour Text from JSs";

        document.getElementById("add-ticked-btn").addEventListener("click", function addTicket() {
            let totalTicketNumber = document.getElementById("Ticket-Count").innerHTML; // gets the current ticket count
            totalTicketNumber++; // increases the ticket count by 1 
            document.getElementById("Ticket-Count").innerHTML = totalTicketNumber; // sets the ticket count to the recently decreased count
          });

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
    
            function TotalPrice(){
                // calculate TotalPrice of tickets in cart 
            }

};



    
  