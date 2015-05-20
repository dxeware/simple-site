
$('#color-picker').on('click', function () {

    $.get('/color', function(color){
      $('h1').text(color).css('color', color).css('background', "grey");
    });
});

$('#joke-picker').on('click', function () {

    $.get( '/jokes', function (jokes) {
      //console.log(jokes);
      var main = $("main");
      jokes.forEach(function(joke) {
        main.append('<p>' + joke.setup + '</p>');
        main.append('<p>' + joke.punchline + '</p>');
      });
  });
});

$('#pet-list').on('mouseover', function () {

    $.get( '/petinfo', function (petinfo) {

      console.log(petinfo);
      var table = $("table");
      petinfo.forEach(function(petinfo) {
        table.append('<tr><td>' + petinfo.name +
                      '</td><td>' + petinfo.owner +
                      '</td><td>' + petinfo.age + '</td></tr>');
      });
  });
});

