//= require jquery
$(document).ready(function() {
  String.prototype.allReplace = function(obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

  $("#scratch").click(function(){
    
    var text = $("#cat").val().allReplace({'ver': 'vepurr', 'fer': 'fur', 'for': 'fur', ' for': ' fur', 'full': 'furll', 'For': 'Fur', 'Hi': 'Meow!😸', 'Yo': 'Meow!😸', 'Hello': 'Meow!😸','Hey': 'Meow!😸', ' arr': ' purr', 'awesome': 'meow-velous', 'great': 'as great as catnip', 'good': 'meow-velous','er ': 'epurr ', 'ers ': 'epurrs ', 'were': 'wrrr', 'ber ': 'purr ', 'ber': 'purr', 'per' : 'purr', '%' : ' purr-cent', 'thanks': 'back scratches', 'thank': 'back scratch', 'from': 'furom', 'From': 'Furom', 'feeling': 'feline', 'Product': 'Purr-oduct', 'product': 'purr-oduct', 'mou': 'meow', 'br' : 'purr-', 'br ' : 'purr ', 'team': 'litter', 'followers': 'litter', 'people': 'cats', 'wrrr' : 'were', 'pir' : 'purr', 'kidding' : 'kitten', 'say' : 'meow', 'saying' : 'meowing', 'said' : 'meowed' });
    $(".vertical").html(text);
  })

    $("#clear").click(function(){
      $(".inp").html('<textarea class="form-control" id="cat" name="comment[body]" rows="4"></textarea></br>');
    })
});