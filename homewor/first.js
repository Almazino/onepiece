function light() {
    let second_array=["a","b", "c","d","f","lightes","text1","text2","text3"];
    
    second_array.forEach(element => {
        document.getElementById(element).style.color="black"; 
    });

    document.getElementById("logo").style.backgroundColor = "white";
    document.getElementById("lightes").style.backgroundColor = "white";
    document.getElementById("home").style.backgroundColor = "white";
    document.getElementById("button").style.backgroundColor="black"
    document.getElementById("button").style.color="white";
    
    for(let i=0;i<document.getElementsByClassName("icons").length;i++){
        document.getElementsByClassName("icons")[i].style.color="black";}
}
function dark() {
    let second_array=["a","b", "c","d","f","durkes", "text1","text2","text3"];
    second_array.forEach(element => {
        document.getElementById(element).style.color="white"; 
    });
    document.getElementById("logo").style.backgroundColor = "#212529";
    document.getElementById("durkes").style.backgroundColor = "#212529";
    document.getElementById("home").style.backgroundColor = "#212529";
    document.getElementById("button").style.backgroundColor="white"
    document.getElementById("button").style.color="black"
    
    for(let i=0;i<document.getElementsByClassName("icons").length;i++){
        document.getElementsByClassName("icons")[i].style.color="white";}
}