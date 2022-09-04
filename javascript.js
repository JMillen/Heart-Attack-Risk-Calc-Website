


function results(){


    //declared variables
    var age = parseInt(document.getElementById('ageInput').value);
    var cholestrol = parseInt(document.getElementById('cholestrolInput').value);
    var yes = document.getElementById('yesInput').checked;
    var no = document.getElementById('noInput').checked;
    var hdl = parseInt(document.getElementById('hdlInput').value);
    var blood = parseInt(document.getElementById('bloodInput').value);
    var treated = document.getElementById('treatedInput').checked;
    var untreaded = document.getElementById('untreadedInput').checked;

    var  male = document.getElementById('maleInput').checked;
    var female = document.getElementById('femaleInput').checked;

  var totalResults = 0;
  var finalOutput = 0;


if(female == true){
  //Calculates age------------------------------------------------------
  if((age >= 20) && (age <= 34)){
    totalResults += -7;
  }
  else if ((age >= 35) && (age <= 39)) {
    totalResults += -3;
  }
  else if ((age >= 40) && (age <= 44)) {

  }
  else if ((age >= 45) && (age <= 49)) {
    totalResults += 3;
  }
  else if ((age >= 50) && (age <= 54)) {
    totalResults += 6;
  }
  else if ((age >= 55) && (age <= 59)) {
    totalResults += 8;
  }
  else if ((age >= 60) && (age <= 64)) {
    totalResults += 10;
  }
  else if ((age >= 65) && (age <= 69)) {
    totalResults += 12;
  }
  else if ((age >= 70) && (age <= 74)) {
    totalResults += 14;
  }
  else if ((age >= 75) && (age <= 79)) {
    totalResults += 16;
  }
  //fallback
  else{
    alert("Please enter you age");
  }

  //calculates Cholestrol------------------------------------------------------
  //20 to 29
  if((age >= 20) && (age <= 39)){

    if(cholestrol < 160){
      totalResults += 0;
    }
    else if ((cholestrol => 160) && (cholestrol <= 199)) {
      totalResults += 4;
    }
    else if ((cholestrol => 200) && (cholestrol <= 239)) {
      totalResults += 8;
    }
    else if ((cholestrol => 240) && (cholestrol <= 279)) {
      totalResults += 11;
    }
    else if (cholestrol => 280) {
      totalResults += 13;
    }
  }
  //40 to 49
  else if ((age >= 40) && (age <= 49)) {

    if(cholestrol < 160){
      totalResults += 0;
    }
    else if ((cholestrol => 160) && (cholestrol <= 199)) {
      totalResults += 3;
    }
    else if ((cholestrol => 200) && (cholestrol <= 239)) {
      totalResults += 6;
    }
    else if ((cholestrol => 240) && (cholestrol <= 279)) {
      totalResults += 8;
    }
    else if (cholestrol => 280) {
      totalResults += 10;
    }
  }
  //50 to 59
  else if ((age >= 50) && (age <= 59)) {

    if(cholestrol < 160){
      totalResults += 0;
    }
    else if ((cholestrol => 160) && (cholestrol <= 199)) {
      totalResults += 2;
    }
    else if ((cholestrol => 200) && (cholestrol <= 239)) {
      totalResults += 4;
    }
    else if ((cholestrol => 240) && (cholestrol <= 279)) {
      totalResults += 5;
    }
    else if (cholestrol => 280) {
      totalResults += 7;
    }
  }
  // 60 to 69
  else if ((age >= 60) && (age <= 69)) {

    if(cholestrol < 160){
      totalResults += 0;
    }
    else if ((cholestrol => 160) && (cholestrol <= 199)) {
      totalResults += 3;
    }
    else if ((cholestrol => 200) && (cholestrol <= 239)) {
      totalResults += 6;
    }
    else if ((cholestrol => 240) && (cholestrol <= 279)) {
      totalResults += 8;
    }
    else if (cholestrol => 280) {
      totalResults += 10;
    }
  }
  //70 to 79
  else if ((age >= 70) && (age <= 79)) {

    if(cholestrol < 160){
      totalResults += 0;
    }
    else if ((cholestrol => 160) && (cholestrol <= 199)) {
      totalResults += 1;
    }
    else if ((cholestrol => 200) && (cholestrol <= 239)) {
      totalResults += 1;
    }
    else if ((cholestrol => 240) && (cholestrol <= 279)) {
      totalResults += 2;
    }
    else if (cholestrol => 280) {
      totalResults += 2;
    }
  }
  //fallback
  else{
    alert("Please enter you cholestrol");
  }

  //calculates for smoker------------------------------------------------------
  //Yes
  if(yes == true) {

    if((age >= 20) && (age <= 39)){
      totalResults += 9;
    }
    else if ((age >= 40) && (age <= 49)) {
      totalResults += 7;
    }
    else if ((age >= 50) && (age <= 59)) {
      totalResults += 4;
    }
    else if ((age >= 60) && (age <= 69)) {
      totalResults += 2;
    }
    else if ((age >= 70) && (age <= 79)) {
      totalResults += 1;
    }
  }
  //No
  else if (no == true){
    totalResults += 0;
  }


  //calculates for hdl cholestrol------------------------------------------------------
  if(hdl >= 60){
    totalResults += -1;
  }
  else if((hdl >= 50) && (hdl <= 59)){
    totalResults += 0;
  }
  else if((hdl >= 40) && (hdl <= 49)){
    totalResults += 1;
  }
  else if(hdl <= 40){
    totalResults += 2;
  }


  //calculates for Blood pressure------------------------------------------------------
  //treated
  if(treated == true){
    if(blood < 120){
      totalResults += 0;
    }
    else if((blood >= 129) && (blood <=129)){
      totalResults += 3;
    }
    else if((blood >= 130) && (blood <=139)){
      totalResults += 4;
    }
    else if((blood >= 140) && (blood <=159)){
      totalResults += 5;
    }
    else if(blood >= 160){
      totalResults += 6 ;
    }
  }
  //untreaded
  else if(untreaded == true){
    if(blood < 120){
      totalResults += 0;
    }
    else if((blood >= 129) && (blood <=129)){
      totalResults += 3;
    }
    else if((blood >= 130) && (blood <=139)){
      totalResults += 4;
    }
    else if((blood >= 140) && (blood <=159)){
      totalResults += 5;
    }
    else if(blood >= 160){
      totalResults += 6;
    }
  }
  //fallback
  else{
    alert("You must declare medicine");
  }

  //calculate final result------------------------------------------------------
  if(totalResults < 9){
    finalOutput = "Less than 1%";
  }
  else if((totalResults >= 9) && (totalResults <= 12)){
    finalOutput = "1%";
  }
  else if((totalResults >= 13) && (totalResults <= 14)){
    finalOutput = "2%";
  }
  else if(totalResults == 15){
    finalOutput = "3%";
  }
  else if(totalResults == 16){
    finalOutput = "4%";
  }
  else if(totalResults == 17){
    finalOutput = "5%";
  }
  else if(totalResults == 18){
    finalOutput = "6%";
  }
  else if(totalResults == 19){
    finalOutput = "8%";
  }
  else if(totalResults == 20){
    finalOutput = "11%";
  }
  else if(totalResults == 21){
    finalOutput = "14%";
  }
  else if(totalResults == 22){
    finalOutput = "17%";
  }
  else if(totalResults == 23){
    finalOutput = "22%";
  }
  else if(totalResults == 24){
    finalOutput = "27%";
  }
  else if(totalResults > 25){
    finalOutput = "30%";
  }
  console.log(finalOutput);
}

// male ---------------------------------------------------------------------
if(male == true){
  //Calculates age------------------------------------------------------
  if((age >= 20) && (age <= 34)){
    totalResults += -9;
  }
  else if ((age >= 35) && (age <= 39)) {
    totalResults += -4;
  }
  else if ((age >= 40) && (age <= 44)) {
    totalResults += 0;
  }
  else if ((age >= 45) && (age <= 49)) {
    totalResults += 3;
  }
  else if ((age >= 50) && (age <= 54)) {
    totalResults += 6;
  }
  else if ((age >= 55) && (age <= 59)) {
    totalResults += 8;
  }
  else if ((age >= 60) && (age <= 64)) {
    totalResults += 10;
  }
  else if ((age >= 65) && (age <= 69)) {
    totalResults += 11;
  }
  else if ((age >= 70) && (age <= 74)) {
    totalResults += 12;
  }
  else if ((age >= 75) && (age <= 79)) {
    totalResults += 13;
  }
  //fallback
  else{
    alert("Please enter you age");
  }

  //calculates Cholestrol------------------------------------------------------
  //20 to 29
  if((age >= 20) && (age <= 39)){

    if(cholestrol < 160){
      totalResults += 0;
    }
    else if ((cholestrol => 160) && (cholestrol <= 199)) {
      totalResults += 4;
    }
    else if ((cholestrol => 200) && (cholestrol <= 239)) {
      totalResults += 7;
    }
    else if ((cholestrol => 240) && (cholestrol <= 279)) {
      totalResults += 9;
    }
    else if (cholestrol => 280) {
      totalResults += 11;
    }
  }
  //40 to 49
  else if ((age >= 40) && (age <= 49)) {

    if(cholestrol < 160){
      totalResults += 0;
    }
    else if ((cholestrol => 160) && (cholestrol <= 199)) {
      totalResults += 3;
    }
    else if ((cholestrol => 200) && (cholestrol <= 239)) {
      totalResults += 5;
    }
    else if ((cholestrol => 240) && (cholestrol <= 279)) {
      totalResults += 6;
    }
    else if (cholestrol => 280) {
      totalResults += 8;
    }
  }
  //50 to 59
  else if ((age >= 50) && (age <= 59)) {

    if(cholestrol < 160){
      totalResults += 0;
    }
    else if ((cholestrol => 160) && (cholestrol <= 199)) {
      totalResults += 2;
    }
    else if ((cholestrol => 200) && (cholestrol <= 239)) {
      totalResults += 3;
    }
    else if ((cholestrol => 240) && (cholestrol <= 279)) {
      totalResults += 4;
    }
    else if (cholestrol => 280) {
      totalResults += 5;
    }
  }
  // 60 to 69
  else if ((age >= 60) && (age <= 69)) {

    if(cholestrol < 160){
      totalResults += 0;
    }
    else if ((cholestrol => 160) && (cholestrol <= 199)) {
      totalResults += 1;
    }
    else if ((cholestrol => 200) && (cholestrol <= 239)) {
      totalResults += 1;
    }
    else if ((cholestrol => 240) && (cholestrol <= 279)) {
      totalResults += 2;
    }
    else if (cholestrol => 280) {
      totalResults += 3;
    }
  }
  //70 to 79
  else if ((age >= 70) && (age <= 79)) {

    if(cholestrol < 160){
      totalResults += 0;
    }
    else if ((cholestrol => 160) && (cholestrol <= 199)) {
      totalResults += 0;
    }
    else if ((cholestrol => 200) && (cholestrol <= 239)) {
      totalResults += 0;
    }
    else if ((cholestrol => 240) && (cholestrol <= 279)) {
      totalResults += 1;
    }
    else if (cholestrol => 280) {
      totalResults += 1;
    }
  }
  //fallback
  else{
    alert("Please enter you cholestrol");
  }

  //calculates for smoker------------------------------------------------------
  //Yes
  if(yes == true) {

    if((age >= 20) && (age <= 39)){
      totalResults += 9;
    }
    else if ((age >= 40) && (age <= 49)) {
      totalResults += 7;
    }
    else if ((age >= 50) && (age <= 59)) {
      totalResults += 4;
    }
    else if ((age >= 60) && (age <= 69)) {
      totalResults += 2;
    }
    else if ((age >= 70) && (age <= 79)) {
      totalResults += 1;
    }
  }
  //No
  else if (no == true){
    totalResults += 0;
  }


  //calculates for hdl cholestrol------------------------------------------------------
  if(hdl >= 60){
    totalResults += -1;
  }
  else if((hdl >= 50) && (hdl <= 59)){
    totalResults += 0;
  }
  else if((hdl >= 40) && (hdl <= 49)){
    totalResults += 1;
  }
  else if(hdl <= 40){
    totalResults += 2;
  }


  //calculates for Blood pressure------------------------------------------------------
  //treated
  if(treated == true){
    if(blood < 120){
      totalResults += 0;
    }
    else if((blood >= 129) && (blood <=129)){
      totalResults += 1;
    }
    else if((blood >= 130) && (blood <=139)){
      totalResults += 2;
    }
    else if((blood >= 140) && (blood <=159)){
      totalResults += 3;
    }
    else if(blood >= 160){
      totalResults += 4;
    }
  }
  //untreaded
  else if(untreaded == true){
    if(blood < 120){
      totalResults += 0;
    }
    else if((blood >= 129) && (blood <=129)){
      totalResults += 3;
    }
    else if((blood >= 130) && (blood <=139)){
      totalResults += 4;
    }
    else if((blood >= 140) && (blood <=159)){
      totalResults += 5;
    }
    else if(blood >= 160){
      totalResults += 6;
    }
  }
  //fallback
  else{
    alert("You must declare medicine");
  }

  //calculate final result------------------------------------------------------
  if(totalResults < 9){
    finalOutput = "Less than 1%";
  }
  else if((totalResults >= 9) && (totalResults <= 12)){
    finalOutput = "1%";
  }
  else if((totalResults >= 13) && (totalResults <= 14)){
    finalOutput = "2%";
  }
  else if(totalResults == 15){
    finalOutput = "3%";
  }
  else if(totalResults == 16){
    finalOutput = "4%";
  }
  else if(totalResults == 17){
    finalOutput = "5%";
  }
  else if(totalResults == 18){
    finalOutput = "6%";
  }
  else if(totalResults == 19){
    finalOutput = "8%";
  }
  else if(totalResults == 20){
    finalOutput = "11%";
  }
  else if(totalResults == 21){
    finalOutput = "14%";
  }
  else if(totalResults == 22){
    finalOutput = "17%";
  }
  else if(totalResults == 23){
    finalOutput = "22%";
  }
  else if(totalResults == 24){
    finalOutput = "27%";
  }
  else if(totalResults > 25){
    finalOutput = "30%";
  }
  console.log(finalOutput);
}
alert(finalOutput);
}
