$('#submit').on('click', function(){
    let scores = [];
    var name = $('#name').val();
    var photo = $('#photo').val();
    for (let i = 1; i <= 10; i++) {
      if (!isNaN(parseInt($("#Q" + i + " option:selected").attr('value'))))
      scores.push(parseInt($("#Q" + i + " option:selected").attr('value')));
    };
    if (scores.length == 10 && name != "" && photo != ""){
      console.log(scores, name, photo);
      $('#results-modal').modal('show');
    }else{
      console.log("not all values filled in");
    };
    
  })