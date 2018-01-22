function Places(location, landmark, time, notes){
  this.locationName = location;
  this.landmarkName = landmark;
  this.timeName = time;
  this.notesName = notes;
}

$(document).ready(function(){
  $("form#new-places").submit(function(event){
  event.preventDefault();

  var inputtedLocation = $("input#location").val();
  var inputtedLandmark = $("input#landmark").val();
  var inputtedTime = $("input#time").val();
  var inputtedNotes = $("input#notes").val();

  var newPlace = new Places(inputtedLocation,inputtedLandmark,inputtedTime,inputtedNotes);

  $("ul#where").append("<li><span class='contact'>" + newPlace.locationName + "</span></li>");

  $(".contact").last().click(function(){
    $("#show-place").show();
    $("#show-place h2").text(newPlace.locationName);
    $(".location").text(newPlace.locationName);
    $(".landmark").text(newPlace.landmarkName);
    $(".time").text(newPlace.timeName);
    $(".notes").text(newPlace.notesName);
  });

    $("input#location").val("");
    $("input#landmark").val("");
    $("input#time").val("");
    $("input#notes").val("");


  });
});
