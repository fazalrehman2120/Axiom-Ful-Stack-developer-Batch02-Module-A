// Get DOM Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const selectMovie = document.getElementById('movie');

// Get the ticket price from the selectMovie dropdown
let ticketPrice = +selectMovie.value;


//call the function update UI - get the data from local storage and update UI
updateUI();

//function to update counts
function updateCount(){
    //calculate how many seats are selected
    const selectedSeats=document.querySelectorAll('.row .seat.selected')
    //create an array using node list
    const seatIndex=[...selectedSeats].map(seat=>[...seats].indexOf(seat) );
    //get the number of seats from the node list
   const selectedSeatsCount=selectedSeats.length;
   console.log(selectedSeatsCount);

   //update DOM with count
   count.innerText=selectedSeatsCount;
   
   //update DOM with total price
   total.innerText=selectedSeatsCount*ticketPrice;
   //save date into local storage
   localStorage.setItem('selectedSeats' ,JSON.stringify(seatIndex));
 
}

//function to save the selected movie data into local storage
function saveMovieData(movieIndex,moviePrice){
localStorage.setItem('movieIndex' , movieIndex);
localStorage.setItem('moviePrice' , moviePrice);

};

//function to get data from local storage and update UI
function updateUI(){
    //Get the selectedseats data from the local storage
    const selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));
    //check if there are any selectedseats
    if(selectedSeats!==null && selectedSeats.length > 0){
        //loop over all seats in the theater
        seats.forEach((seat, index) =>{
        //if the index of seats is contained inside of selectedseats array
        if(selectedSeats.indexOf(index) > -1){
            //add the selected class to seats
            seat.classList.add('selected');
        }
        })
    }
  //get the selected movie index from local storage
  const movieIndex=localStorage.getItem('movieIndex'); 
  //check if there is a movie index
  if(movieIndex!== null) {
      //use the movie index from the local storage to update the movie from dropdown
      selectMovie.selectedIndex=movieIndex; 
  }
  
  //update the counts
  updateCount();
};
//Event listener
//listen for click on container
container.addEventListener('click' , e=>{

    //check if target has a clas of seats and also is not occupied
if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){

    //add or remove the select class on click
    e.target.classList.toggle('selected');

    //update the count of selected seats
    updateCount();
}
});
// 2.Listen for change in movie selection
selectMovie.addEventListener('change', e=>{
    //update ticket price to the selected movie
    ticketPrice= +e.target.value;
    //update the counts in the DOM
    updateCount(); 
    //save movie data to the local storage
    saveMovieData(e.target.selectedIndex,e.target.value);
})
