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
    
    var text = $("#cat").val().allReplace({'ver': 'fur', 'fer': 'fur', 'for': 'fur', ' for': ' fur', 'full': 'furll', 'ket' : 'cat', 'my name is' : 'my owners call me', 'My name is' : 'My owners call me', 'users' : 'cats', 'beta testers' : 'the nerdy cats', 'pow' : 'paw', 'fr' : 'furr',  'For': 'Fur', 'Hi': 'Meow!😸', 'hi' : 'meow!😸', 'Yo ': 'Meow!😸 ', 'yo ': 'meow!😸 ', 'Hello': 'Meow!😸', 'hello' : 'meow!😸',  'Hey': 'Meow!😸', ' hey' : 'meow!😸', ' arr': ' purr', 'awesome': 'clawsome', 'great': 'great as catnip', 'good': 'meow-velous','er ': 'epurr ', 'ers ': 'epurrs ', 'were': 'wrrr', 'ber ': 'purr ', 'ber': 'purr', 'per' : 'purr', '%' : ' purrcent', 'thanks': 'back scratches', 'thank': 'back scratch', 'from': 'furom', 'From': 'Furom', 'feeling': 'feline', 'Product': 'Purr-oduct', 'product': 'purroduct', 'mou': 'meow', 'br' : 'purr', 'br ' : 'purr ', 'team': 'litter', 'followers': 'litter', 'people': 'cats', 'wrrr' : 'were', 'pir' : 'purr', 'kidding' : 'kitten', 'kiddin' : 'kitten', 'say' : 'meow', 'saying' : 'meowing', 'said' : 'meowed', 'community' : 'cat park', 'fantastic' : 'catastic', 'podcast' : 'podcats', 'awesomeness' : 'pawesomeness',  ' aw' : ' paw', 'getting' : 'kitten', 'yell' : 'hiss', 'food' : 'catnip', 'run' : 'pounce', 'got' : 'cat', 'now' : 'meow', 'purp': 'purrp', 'go for it' : 'catnip it in the bud meow', 'to execute' : 'catnip it in the bud meow', 'move' : 'mewv', 'crast' : 'cats', 'pl' : 'pawl', 'amazing' : 'ameowsing', 'marvelous' : 'meowvelous', 'pr' : 'purr', 'por' : 'purr', 'connected' : 'catnected'  });
    $(".vertical").html(text);
  })

    $("#clear").click(function(){
      $(".inp").html('<textarea class="form-control" id="cat" name="comment[body]" rows="4"></textarea></br>');
    })
});