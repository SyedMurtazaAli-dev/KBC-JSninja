function QUESTION1(get) {
    if( get == "Lahore"){
      document.write("better luck Next time")
    }
    else if(get == "Islamabad" ){
      document.write("better luck Next time")
    }
    else if(get == "Karachi" ){
      count1 = 1000;
      document.getElementById("que3").className = 'right';
      document.getElementById("Next").innerHTML = "Congratulations you are win 1000 RS ";
      document.getElementById("total1").innerHTML = " Total amount You Win is " + count1 + " Rs";
      element = document.getElementById("box2");
      element.style.display = "block";
      element = document.getElementById("box1");
      element.style.display = "none";
    }
    else if(get == "Quetta"){
        document.write("better luck Next time")
    }
}
function QUESTION2(get) {
    if( get == "30"){
      document.write("better luck next Time \n");
   document.write(" \n Congratulations you are win " + count1 + " RS" );
    }
    else if(get == "31" ){
      count2 = count1 + 2000;
      document.getElementById("que2b").className = 'right';
      document.getElementById("Next2").innerHTML = "Congratulations you are win 2000 RS ";
      document.getElementById("total2").innerHTML = " Total amount You Win is " +count2 + " Rs";
      element = document.getElementById("box3");
      element.style.display = "block";
      element = document.getElementById("box2");
      element.style.display = "none";

    }
    else if(get == "29" ){
      document.write("better luck next Time \n");
   document.write(" \n Congratulations you are win " + count1 + " RS" );
    }
    else if(get == "28"){
      document.write("better luck next Time \n");
   document.write(" \n Congratulations you are win " + count1 + " RS" );
    }
}
function QUESTION3(get) {
    if( get == "30"){
      document.write("better luck next Time \n");
   document.write(" \n Congratulations you are win " + count2 + " RS" );
    }
    else if(get == "31" ){
      count3 = count2 +3000;
      document.getElementById("que3d").className = 'right';
      document.getElementById("Next3").innerHTML = "Congratulations you are win 3000 RS ";
      document.getElementById("total3").innerHTML = " Total amount You Win is " +count3 + " Rs";
      element = document.getElementById("box4");
      element.style.display = "block";
      element = document.getElementById("box3");
      element.style.display = "none";
    }
    else if(get == "29" ){
      document.write("better luck next Time \n");
   document.write(" \n Congratulations you are win " + count2 + " RS" );
    }
    else if(get == "28"){
      document.write("better luck next Time \n");
   document.write(" \n Congratulations you are win " + count2 + " RS" );
    }
}
function QUESTION4(get) {
    if( get == "30"){
      document.write("better luck next Time \n");
   document.write(" \n Congratulations you are win " + count3 + " RS" );
    }
    else if(get == "31" ){
      count4 = count3 +4000;
      document.getElementById("que4a").className = 'right';
      document.getElementById("Next4").innerHTML = "Congratulations you are win 4000 RS ";
      document.getElementById("total4").innerHTML =  " Total amount You Win is " +count4 + " Rs";
      element = document.getElementById("box5");
      element.style.display = "block";
      element = document.getElementById("box4");
      element.style.display = "none";
    }
    else if(get == "29" ){
      document.write("better luck next Time \n");
   document.write(" \n Congratulations you are win " + count3+ " RS" );
    }
    else if(get == "28"){
      document.write("better luck next Time \n");
   document.write(" \n Congratulations you are win " + count3 + " RS" );
    }
}
function QUESTION5(get) {
    if( get == "30"){ 
      document.write("better luck next Time \n");
      document.write("\n Congratulations you are win " + count4 + " RS" );
    }
    else if(get == "31" ){
      count5 = count4 + 5000;
      document.getElementById("que5b").className = 'right';
      document.write("Congratulation you complete the game \n");
      document.write(" And you are win " + count5 + " RS" );
    }
    else if(get == "29" ){ 
  document.write("better luck next Time\n");
   document.write(" \n Congratulations you are win " + count4 + " RS" );
    }
    else if(get == "28"){        
   document.write("better luck next Time \n");
   document.write(" \n Congratulations you are win " + count4 + " RS" );
    }
}
