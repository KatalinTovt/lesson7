 function getData() {
   let url = "https://www.omdbapi.com/?apikey=985c4c05&s=";
   let search = document.getElementById('inpt').value;
      return fetch(url + search)
         .then(response => response.json())
         .then(data =>
          {
            let films = data.Search;
            $('#content').empty();
        for(let i = 0; i < films.length; i++){
          let film = '<div class="film">' + '<img src="' + films[i].Poster + '" class="img">' + '<div class="name">' + films[i].Title + '</div>' + '<div class="style">' + films[i].Type + '</div>' + '<div class="age">' + films[i].Year + '</div>' + '<input class="btn-more" type="button" value="More details" data-index-number="' + films[i].imdbID + '"></input>'
           + '</div>';
          $( "#content" ).append(film);
        }

        $(".btn-more").click(function(event){
          let url2 = 'https://www.omdbapi.com/?apikey=985c4c05&i=';
          let search2 = event.currentTarget.dataset.indexNumber;
          let urlEnd  = '&plot=full';
          return fetch(url2 + search2 + urlEnd)
         .then(response => response.json())
         .then(data => 
          {
$('.more-img').attr("src",data.Poster);
$('.more-name').text(data.Title);
$('.more-rated-year-ganre').text(data.Rated + ' ' + data.Year + ' '+ data.Genre);
$('.plot').text(data.Plot);
$('.writer-in').text(data.Writer);
$('.directed-in').text(data.Director);
$('.starring-in').text(data.Actors);
$('.box-office-in').text(data.BoxOffice);
$('.awards-in').text(data.Awards);
let ratings = '';
for(let f = 0; f < data.Ratings.length; f++){
  ratings = ratings + '<br> ' + data.Ratings[f].Source + ' ' +  data.Ratings[f].Value;
}
$('.ratings-in').html(ratings);

$('.area').show();
          })
        
        });
        $('.area').click(function(){
           $('.area').hide();
        });
          console.log(films);
         })
         .catch(err => console.log(err))

 }



