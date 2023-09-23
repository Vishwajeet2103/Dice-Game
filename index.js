var random_number_1 = Math.floor(Math.random()*6) + 1;

 var random_number_image_1  = "dice" + random_number_1 + ".png";

 var random_image_source_1 = "images/" + random_number_image_1 ;

document.querySelectorAll("img")[0].setAttribute("src",random_image_source_1);



 var random_number_2 = Math.floor(Math.random()*6) + 1;

 var random_number_image2  = "dice" + random_number_2 + ".png";

 var random_image_source2 = "./images/" + random_number_image2 ;

 document.querySelectorAll("img")[1].setAttribute("src", random_image_source2);


if(random_number_1>random_number_2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!."
}
else if(random_number_1<random_number_2){
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!."
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}

