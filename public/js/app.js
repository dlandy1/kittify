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
    
    var text = $("#cat").val().allReplace({'ver': 'fur', 'fer': 'fur', 'for': 'fur', ' for': ' fur', 'full': 'furll', 'ket' : 'cat', 'my name is' : 'my owners call me', 'My name is' : 'My owners call me', 'users' : 'cats', 'beta testers' : 'the nerdy cats', 'pow' : 'paw', 'fr' : 'furr',  'For': 'Fur', 'Hi': 'Meow!😸', 'hi ' : 'meow!😸 ', 'Yo ': 'Meow!😸 ', 'yo ': 'meow!😸 ', 'Hello': 'Meow!😸', 'hello' : 'meow!😸',  'Hey': 'Meow!😸', ' hey' : 'meow!😸', ' arr': ' purr', 'awesome': 'clawsome', 'great': 'great as catnip', 'good': 'meow-velous','er ': 'epurr ', 'ers ': 'epurrs ', 'were': 'wrrr', 'ber ': 'purr ', 'ber': 'purr', 'per' : 'purr', '%' : ' purrcent', 'thanks': 'back scratches', 'thank': 'back scratch', 'from': 'furom', 'From': 'Furom', 'feeling': 'feline', 'Product': 'Purr-oduct', 'product': 'purroduct', 'mou': 'meow', 'br' : 'purr', 'br ' : 'purr ', 'team': 'litter', 'followers': 'litter', 'people': 'cats', 'wrrr' : 'were', 'pir' : 'purr', 'kidding' : 'kitten', 'kiddin' : 'kitten', 'say' : 'meow', 'saying' : 'meowing', 'said' : 'meowed',  'par' : 'purr', 'community' : 'cat park', 'fantastic' : 'catastic', 'podcast' : 'podcats', 'awesomeness' : 'pawesomeness',  ' aw' : ' paw', 'getting' : 'kitten', 'yell' : 'hiss', 'food' : 'catnip', 'run' : 'pounce', 'got' : 'cat', 'know ' : 'meow ', 'now' : 'meow', 'purp': 'purrp', 'go for it' : 'catnip it in the bud meow', 'to execute' : 'catnip it in the bud meow', 'move' : 'mewv', 'crast' : 'cats', 'pl' : 'pawl', 'amazing' : 'ameowsing', 'marvelous' : 'meowvelous', 'pr' : 'purr', 'por' : 'purr', 'connected' : 'catnected', 'leap' : 'pounce', 'hows it going' : 'whats catalakin ', 'whats up' : 'whats catalakin', 'hope all is well' : 'hope you have many more of your 9 lives still', 'life' : 'one of your 9 lives',  'years old' : 'years in my first cat life', 'garbage' : 'litter box', 'Per' : 'Purr', 'no ': ' hiss no ', 'yes ' : 'yarn right ', 'Thank' : 'Back scratch', 'Thanks' : 'Back Scratches' });
    $(".vertical").removeClass('text-center');
    $(".vertical").html(text);
  })

    $("#clear").click(function(){
      $(".inp").html('<textarea class="form-control" id="cat" name="comment[body]" rows="4"></textarea></br>');
    })

    $("#info").click(function(){
    $(".screen").fadeIn(500);
     $(".appender").html('<div class="works"> <p class="text-center"> <b> This shows what words or characters change. </b> <br> <small class="grey"> Spacing and capitilazation can have effects </small> </p> <br> <ol><li>ver= fur </li><li> fer= fur </li><li> for= fur </li><li> for= fur </li><li> full= furll </li><li> ket = cat </li><li> my name is = my owners call me </li><li> My name is = My owners call me </li><li> users = cats </li><li> beta testers = the nerdy cats </li><li> pow = paw </li><li> fr = furr </li><li> For= Fur </li><li> Hi= Meow!😸 </li><li> hi = meow!😸  </li><li> Yo = Meow!😸  </li><li> yo = meow!😸  </li><li> Hello= Meow!😸 </li><li> hello = meow!😸 </li><li> Hey= Meow!😸 </li><li> hey = meow!😸 </li><li> arr= purr </li><li> awesome= clawsome </li><li> great= great as catnip </li><li> good= meow-velous </li><li>er = epurr  </li><li> ers = epurrs  </li><li> were= wrrr </li><li> ber = purr  </li><li> ber= purr </li><li> per = purr </li><li> % = purrcent </li><li> thanks= back scratches </li><li> thank= back scratch </li><li> from= furom </li><li> From= Furom </li><li> feeling= feline </li><li> Product= Purr-oduct </li><li> product= purroduct </li><li> mou= meow </li><li> li = purr </li><li> li = purr  </li><li> team= litter </li><li> followers= litter </li><li> people= cats </li><li> wrrr = were </li><li> pir = purr </li><li> kidding = kitten </li><li> kiddin = kitten </li><li> say = meow </li><li> saying = meowing </li><li> said = meowed </li><li> community = cat park </li><li> fantastic = catastic </li><li> podcast = podcats </li><li> awesomeness = pawesomeness </li><li> aw = paw </li><li> getting = kitten </li><li> yell = hiss </li><li> food = catnip </li><li> run = pounce </li><li> got = cat </li><li> know = meow  </li><li> now = meow  </li><li> purp= purrp </li><li> go for it = catnip it in the bud meow </li><li> to execute = catnip it in the bud meow </li><li> move = mewv </li><li> crast = cats </li><li> pl = pawl </li><li> amazing = ameowsing </li><li> marvelous = meowvelous </li><li> pr = purr </li><li> por = purr </li><li> connected = catnected </li><li> leap = pounce </li><li> par = purr </li><li> hows it going = whats catalakin  </li><li> whats up = whats catalakin </li><li> hope all is well = hope you have many more of your 9 lives still </li><li> life = one of your 9 lives </li><li> years old = years in my first cat life </li><li> garbage = litter box </li><li> Per = Purr </li><li> no = hiss no  </li><li> yes = yarn right </li></ol></div>');

    })
   $(".close").click(function(){
    $(".screen").fadeOut(500);
   })
});