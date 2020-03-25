$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var action1Input = $("input#action1").val();
    var action2Input = $("input#action2").val();
    var action3Input = $("input#action3").val();
    var action4Input = $("input#action4").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".action1").text(action1Input);
    $(".action2").text(action2Input);
    $(".action3").text(action3Input);
    $(".action4").text(action4Input);
    
    $("#story").show();

    event.preventDefault();
  });
});
