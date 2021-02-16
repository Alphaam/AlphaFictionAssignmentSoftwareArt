
$(document).ready(function(){
  $("#button1").click(function(){
    
    $("#landingPage").fadeOut(900);
    $("#button1").fadeOut(900);
   $("#button2").fadeOut(900);
   $("#button3").fadeOut(900);
   $("#button4").fadeOut(900);
   $("#button5").fadeOut(900);
   $("#button6").fadeOut(900);
    var typer = document.getElementById('typewriter1');

  	typewriter1 = setupTypewriter(typewriter1);

 	typewriter1.type();
    $("#firstPoet").fadeIn(1000);
    
   
  });

   $("#button2").click(function(){
    
    $("#landingPage").fadeOut(900);
    $("#button1").fadeOut(900);
   $("#button2").fadeOut(900);
   $("#button3").fadeOut(900);
   $("#button4").fadeOut(900);
   $("#button5").fadeOut(900);
   $("#button6").fadeOut(900);
    var typer = document.getElementById('typewriter1');

  	typewriter2 = setupTypewriter(typewriter2);

 	typewriter2.type();
    $("#SecondPoet").fadeIn(1000);
    
    
  });



  
});

function setupTypewriter(t) {
      var HTML = t.innerHTML;

      t.innerHTML = "";

      var cursorPosition = 0,
          tag = "",
          writingTag = false,
          tagOpen = false,
          typeSpeed = 100,
        tempTypeSpeed = 0;

      var type = function() {
        
          if (writingTag === true) {
              tag += HTML[cursorPosition];
          }

          if (HTML[cursorPosition] === "<") {
              tempTypeSpeed = 0;
              if (tagOpen) {
                  tagOpen = false;
                  writingTag = true;
              } else {
                  tag = "";
                  tagOpen = true;
                  writingTag = true;
                  tag += HTML[cursorPosition];
              }
          }
          if (!writingTag && tagOpen) {
              tag.innerHTML += HTML[cursorPosition];
          }
          if (!writingTag && !tagOpen) {
              if (HTML[cursorPosition] === " ") {
                  tempTypeSpeed = 0;
              }
              else {
                  tempTypeSpeed = (Math.random() * typeSpeed) + 50;
              }
              t.innerHTML += HTML[cursorPosition];
          }
          if (writingTag === true && HTML[cursorPosition] === ">") {
              tempTypeSpeed = (Math.random() * typeSpeed) + 50;
              writingTag = false;
              if (tagOpen) {
                  var newSpan = document.createElement("span");
                  t.appendChild(newSpan);
                  newSpan.innerHTML = tag;
                  tag = newSpan.firstChild;
              }
          }

          cursorPosition += 1;
          if (cursorPosition < HTML.length - 1) {
              setTimeout(type, tempTypeSpeed);
          }

      };

      return {
          type: type
      };
  }

  var typer = document.getElementById('typewriter');

  typewriter = setupTypewriter(typewriter);

  typewriter.type();

 //responsiveVoice.speak("bad bitch");
