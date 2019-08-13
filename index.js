// TUGAS 4 JS



var tinggiA = 160;
var tinggiB = 185;
var tinggiC = 175;


function tinggiBadan() {
  if ((tinggiA > tinggiB) && (tinggiA > tinggiC)) {
    if (tinggiB > tinggiC) {
      console.log("");
      console.log("Tingi Badan Tiga Murid:");
      console.log("a. Tinggi badan A adalah", tinggiA, " cm");
      console.log("b. Tinggi badan B adalah", tinggiB, " cm");
      console.log("c. Tinggi badan C adalah", tinggiC, " cm");
      console.log("");
      console.log("*************************************");
      console.log("");
      console.log("Urutan Tinginya adalah:");
      console.log("1. Tinggi Badan A ", tinggiA);
      console.log("2. Tinggi Badan B ", tinggiB);
      console.log("3. Tinggi Badan C ", tinggiC);
      console.log("");


    } else {
      console.log("");
      console.log("Tingi Badan Tiga Murid:");
      console.log("a. Tinggi badan A adalah", tinggiA, " cm");
      console.log("b. Tinggi badan B adalah", tinggiB, " cm");
      console.log("c. Tinggi badan C adalah", tinggiC, " cm");
      console.log("");
      console.log("*************************************");
      console.log("");
      console.log("Urutan Tinginya adalah:");
      console.log("1. Tinggi Badan A ", tinggiA);
      console.log("2. Tinggi Badan C ", tinggiC);
      console.log("3. Tinggi Badan B ", tinggiB);
      console.log("");

    }
    console.log("A Paling Tinggi");
  }
  else if ((tinggiB > tinggiA) && (tinggiB > tinggiC)) {
    if (tinggiA > tinggiC) {
      console.log("");
      console.log("Tingi Badan Tiga Murid:");
      console.log("a. Tinggi badan A adalah", tinggiA, " cm");
      console.log("b. Tinggi badan B adalah", tinggiB, " cm");
      console.log("c. Tinggi badan C adalah", tinggiC, " cm");
      console.log("");
      console.log("*************************************");
      console.log("");
      console.log("Urutan Tinginya adalah:");
      console.log("1. Tinggi Badan B ", tinggiB);
      console.log("2. Tinggi Badan A ", tinggiA);
      console.log("3. Tinggi Badan C ", tinggiC);
      console.log("");


    } else {
      console.log("");
      console.log("Tingi Badan Tiga Murid:");
      console.log("a. Tinggi badan A adalah", tinggiA, " cm");
      console.log("b. Tinggi badan B adalah", tinggiB, " cm");
      console.log("c. Tinggi badan C adalah", tinggiC, " cm");
      console.log("");
      console.log("*************************************");
      console.log("");
      console.log("Urutan Tinginya adalah:");
      console.log("1. Tinggi Badan B ", tinggiB);
      console.log("2. Tinggi Badan C ", tinggiC);
      console.log("3. Tinggi Badan A ", tinggiA);
      console.log("");

    }
    console.log("B Paling Tinggi");
  }
  else if ((tinggiC > tinggiA) && (tinggiC > tinggiB)) {
    if (tinggiA > tinggiB) {
      console.log("");
      console.log("Tingi Badan Tiga Murid:");
      console.log("a. Tinggi badan A adalah", tinggiA, " cm");
      console.log("b. Tinggi badan B adalah", tinggiB, " cm");
      console.log("c. Tinggi badan C adalah", tinggiC, " cm");
      console.log("");
      console.log("*************************************");
      console.log("");
      console.log("Urutan Tinginya adalah:");
      console.log("1. Tinggi Badan C ", tinggiC);
      console.log("2. Tinggi Badan A ", tinggiA);
      console.log("3. Tinggi Badan B ", tinggiB);
      console.log("");


    } else {
      console.log("");
      console.log("Tingi Badan Tiga Murid:");
      console.log("a. Tinggi badan A adalah", tinggiA, " cm");
      console.log("b. Tinggi badan B adalah", tinggiB, " cm");
      console.log("c. Tinggi badan C adalah", tinggiC, " cm");
      console.log("");
      console.log("*************************************");
      console.log("");
      console.log("Urutan Tinginya adalah:");
      console.log("1. Tinggi Badan C ", tinggiC);
      console.log("2. Tinggi Badan B ", tinggiB);
      console.log("3. Tinggi Badan A ", tinggiA);
      console.log("");

    }
    console.log("C Paling Tinggi");
  }
  else {
    console.log("Error");
  }
}



tinggiBadan();
