var celebList = new Array();

class celebOrganizer {
    constructor (title, description, linkPath){
        this.title = title;
        this.description = description;
        this.linkPath = linkPath;
    }
    toStringTitle(){
        return this.title;
    }
    toStringDescription(){
        return this.description;
    }
    get theImgLink() {
        return this.linkPath;
    }

}

function initializeArray() {

    var celeb1 = new celebOrganizer("bob", "Bob Marley singing ", '../images/bob.jpg');
    var celeb2 = new celebOrganizer("Dave", "Dve Chapell about to tell a joke", '../images/Dave.jpg');
    var celeb3 = new celebOrganizer("john", "John cena abou to start his match", '../images/john.jpg');
    var celeb4 = new celebOrganizer("Larry", "Larry bird after his win", '../images/larry.jpg');
    var celeb5 = new celebOrganizer("lebron", "Lebron James tries his best in his game ", '../images/lebron.jpg');
    celebList.push(celeb1,celeb2,celeb3,celeb4,celeb5);
}

var x = 1;
var xx = 2;
var xxx = 3;
var xxxx = 4;
var xxxxx = 5;
var xxxxxx = 6;


$(function () {
    $("#title").html(celebList[x].toStringTitle());
    $("#description").html(celebList[x].toStringDescription());
    $("#celebCenter").attr("src", celebList[x].theImgLink);
    $("#celebR").attr("src", celebList[xx].theImgLink);
    $("#celebOutR").attr("src", celebList[xxx].theImgLink);
    $("#celebL").attr("src", celebList[xxxx].theImgLink);
    $("#celebOutL").attr("src", celebList[xxxxx].theImgLink);


    $("button").click(function(){

        $("#celebOutR").animate({
            left: '520px',
            height: '+=120px',
            width: '+=80px',
            top: "350px",
            opacity: 0.5,});
        $("#celebCenter").animate({
            left: '380px',
            height: '-=1100px',
            width: '-=80px',
            top: "450px",
            opacity: 0.7,});
        $("#celebL").animate({
            left: '460px',
            height: '+=120px',
            width: '+=80px',
            top: "170px",
            opacity: 1,});
        $("#celebR").animate({
            left: '190px',
            height: '-=120px',
            width: '-=80px',
            top: "500px",
            opacity: 0.5,});

            celebX1();
            celebX2();
            celebX3();
            celebX4();
            celebX5();

            $("#celebCenter").attr("src", celebList[x].theImgLink).delay( 500 );
            $("#celebR").attr("src", celebList[xx].theImgLink).delay( 500 );
            $("#celebOutR").attr("src", celebList[xxx].theImgLink).delay( 500 );
            $("#celebL").attr("src", celebList[xxxx].theImgLink).delay( 500 );
            $("#celebOutL").attr("src", celebList[xxxxx].theImgLink).delay( 500 );
            $("#title").html(celebList[x].toStringTitle());
            $("#description").html(celebList[x].toStringDescription());

            reRun();
            $(".answer5").fadeOut("slow");
            $(".answer4").fadeOut("slow");
            $(".answer3").fadeOut("slow");
            $(".answer2").fadeOut("slow");
            $(".answer1").fadeOut("slow");
      });
});
function celebX1(){
    x++;
    if (x === 9){
        x = 0;
    }
    return x;
}
function celebX2(){
    xx++;
    if (xx === 9){
        xx = 0;
    }
    return xx;
}
function celebX3(){
    xxx++;
    if (xxx === 9){
        xxx = 0;
    }
    return xxx;
}
function celebX4(){
    xxxx++;
    if (xxxx === 9){
        xxxx = 0;
    }
    return xxxx;
}
function celebX5(){
    xxxxx++;
    if (xxxxx === 9){
        xxxxx = 0;
    }
    return xxxxx;
}

function reRun(){
        $("#celebOutL").animate({opacity: '0'},"slow");
        $("#celebOutL").animate({left: '80px'},"fast");
        $("#celebOutL").animate({opacity: '0.2'},"fast");

        $("#celebCenter").animate({opacity: '0'},"slow");
        $("#celebCenter").animate({left: '460px', height: '+=120px',
        width: '+=80px', top: '170px'},"fast");
        $("#celebCenter").animate({opacity: '1'},"fast");

        $("#celebOutR").animate({opacity: '0'},"slow");
        $("#celebOutR").animate({left: '900px', top: '400px',  height: '-=120px',
        width: '-=80px'},"fast");
        $("#celebOutR").animate({opacity: '0.4'},"fast");

        $("#celebL").animate({opacity: '0'},"slow");
        $("#celebL").animate({left: '720px', top: "150px", height: '-=120px',
        width: '-=70px'},"fast");
        $("#celebL").animate({opacity: '0.7'},"fast");

        $("#celebR").animate({opacity: '0'},"slow");
        $("#celebR").animate({left: '280px', height: '+=120px',
        width: '+=80px', top: "150px"},"fast");
        $("#celebR").animate({opacity: '0.5'},"fast");

}
