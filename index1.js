// var audio = new Audio('sounds/AyeKhuda.mp3');

var playlist = new Array('sounds/AyeKhuda.mp3','sounds/Har_Kisi_Ko_(Version_2)(djmp3fun.com).mp3','sounds/Brown Rang.mp3','sounds/Ilahi(djmp3fun.com).mp3','sounds/Jeene_Laga_Hoon_Bestwap.mp3','sounds/Zara_Sa-(HindiMp3.Mobi).mp3')

var numberofbuttons = document.querySelectorAll('.song').length;

var a = 0;




function nextSong(a){

  a += 1;
  console.log(a);
  return a;

  // var audio = new Audio(playlist[a]);
  // audio.play();
  // console.log(audio);



}

var audio = new Audio(playlist[a]);


  for (var i = 0; i < numberofbuttons; i++) {
   document.querySelectorAll('.song')[i].addEventListener('click', function oprations(){
     var button = this.innerHTML;


     switch (button) {
       case "Play":
         audio.play();
         break;
       case "Pause":
         audio.pause();
         break;
       case "next":
         audio.pause();
         nextSong(a);
        // audio.play();
         //++a;
         console.log(audio);
         //var next = new Audio(playlist[a]);

         break;
       default:

     }
   });
 }



 $(document).keypress(function functionName(event) {
   $("h1").text(event.key)
 })
