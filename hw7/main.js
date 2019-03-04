var myArray = new Array();

class ViewFinder
{
    constructor(title)
    {
        this.image = image;
        this.title = title;
        this.author = author;
        this.description = description;
        this.year = year;
    }
    toStringTitle()
    {
        return "Title: " + this.title;
    }
    toStringAuthor()
    {
        return "Author" + this.author;
    }
    toStringImage()
    {
        return "Image" + this.image;
    }
    toStringDescription()
    {
        return "Description" + this.description;
    }
    toStringYear()
    {
        return "Year" + this.year;
    }
}
function startArray()
{
    var myViewFinder = new ViewFinder("images/bob.jpg", "The great Bob Marley enjoying life", "By: bigzz", "1979");
    var myViewFinder1 = new ViewFinder("images/dave.jpg", "dave chappell saying something funny", "By: j smith", "2002");
    var myViewFinder2 = new ViewFinder("images/john.jpg", "John cena about to win", "By: Pluto", "2013");
    var myViewFinder3 = new ViewFinder("images/larry.jpg", "Larry bird in his prime", "By: Stockman", "1977");
    var myViewFinder4 = new ViewFinder("images/lebron.jpg", "lebron about to dunk", "By: jasm", "2019");
    myArray.push(myViewFinder);
    myArray.push(myViewFinder1);
    myArray.push(myViewFinder2);
    myArray.push(myViewFinder3);
    myArray.push(myViewFinder4);
}
function RandoIndex(a){
    return Math.floor(Math.random(a) * 5);
}

function accessInfo()
{
    randIndex = RandoIndex(5);
    console.log(RandoIndex());

    document.getElementById("image").innerHTML = myViewFinderArray[randIndex].toStringImage();
    document.getElementById("title").innerHTML = myViewFinderArray[randIndex].toStringTitle();
    document.getElementById("author").innerHTML = myViewFinderArray[randIndex].toStringAuthor();
    document.getElementById("description").innerHTML = myViewFinderArray[randIndex].toStringDescription();
    document.getElementById("year").innerHTML = myViewFinderArray[randIndex].toStringYear();

}
