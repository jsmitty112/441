var imageTags = ["image1,image2,image3,image4"];

var blankImagePath = "images/seth.jpg"

var imgActual = new Array();

var player= {"firstname": "", "lastname":"", "Age":"", "Score":""};

var attempts = 0;
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
  function flipImage(number){
    document.getElementById(actualImagePath[number]).src= imgActual[number];
  }

  function addtoPlayer(){
  	var firstName = document.getElementById("firName").value;
  	var lastName = document.getElementById("lasName").value;
  	var age = document.getElementById("txtage").value;

    playerInfo.firstname = firstName;
    playerInfo.lastname = lastName;
    playerInfo.Age = age;

      localStorage.setItem("player", JSON.stringify(playerInfo));
      window.location = "./info.html";

  }
  function player(){
      playerInformation = localStorage.getItem("player");
      playerInfo = JSON.parse(playerInformation);
  }
  function finalPage() {
      playerInfo.Score = attempts;

      localStorage.setItem("player", JSON.stringify(playerInfo));
      window.location = "./final.html";
  }
  
  function loadScore (){
      document.getElementById('fNames').innerHTML = playerInfo.firstname + " " + playerInfo.lastname;
      document.getElementById('age').innerHTML = "Age: " + playerInfo.Age;
      document.getElementById('score').innerHTML = "Your Score: " + playerInfo.Score;
  }
