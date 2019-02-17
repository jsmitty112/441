var imageTags = ["image1,image2,image3,image4"];

var blankImagePath = "images/seth.jpg"

var imgActual = new Array();



function printBlanks()
{
  creatRandomImageArray();
for(var i = 0; i < imgTag.length; i++){
  document.getElementById(imageTags[i]).src = blankImagePath;
}
}

function creatRandomImageArray(){
  var actualImagePath = ("images/seth.jpg", "images/sheen.jpg", "images/lebron.jpg", "images/dave.jpg","images/john.jpg", "images/mylie.jpg", "images/sarah.jpg", "images/bob.jpg","images/larry.jpg","images/liar.jpg");

  var count = [0,0,0,0,0,0,0,0,0,0];

  while(imgActual.length < 10){

    var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2){
            imgActual.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
  }
  function flipImg(number){
    document.getElementById(actualImagePath[number]).src= imgActual[number];
  }
  
