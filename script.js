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
            "poster_url": "./images/fractured.jpg", 
            "cinema_number": 2, 
            "ticket_price": 15, 
            "tickets_in_cart": 0 
        },
        // {
        //     "id": 3, 
        //     "title": "Sightless", 
        //     "director": "Cooper Karl", 
        //     "runtime": "1Hr 29min", 
        //     "release_year": 2020, 
        //     "description": "After a vicious attack leaves a young woman blind, she must fight back to escape her new reality in which people are not who they seem to be.", 
        //     "poster_url": "./images/sightless.jpg", 
        //     "cinema_number": 3, 
        //     "ticket_price": 15, 
        //     "tickets_in_cart": 0 
        // },
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

        //  console.log(movies);
        // populateHtmlDetails();

        // function populateHtmlDetails(){
            //loop throught the movies array
            //and populate the html card with a movie object
        //     movies.forEach(
        //         movie => document.getElementById("cinema-id").innerHTML = "Cinema " + movie.cinema_number,
               
                
        //         )
        //         console.log(movie);

        // }
        for( i=0; i< movies.length; i++){
             document.getElementById('movie-title').innerHTML= movies[i].title
             document.getElementById( "cinema-id").innerHTML= "Cinema"+ movies[i].cinema_number
              document.getElementById('description').innerHTML= movies[i].description
            document.getElementsByTagName('images').src= movies[i].poster_url
           

        }
       



        document.getElementById("hello").innerHTML = "Bonjour Text from JSs";

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


//display table data

    
    
  