// Each student has to enter respective subject marks.
const calci = () => {
  let wd = document.getElementById("wd").value;
  let maths = document.getElementById("maths").value;
  let comp = document.getElementById("comp").value;
  let phy = document.getElementById("phy").value;
  let grades = "";
  // 1. Find Total?
  let totalGrades =
    parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    alert(`total: ${ totalGrades }`);
  // 2. Find Percentage?
  let perc = (totalGrades / 400) * 100;
  alert(`Percentage: ${perc}%`);

  //   debugger;

  // 3. Find Grade?
  if (perc <= 100 && perc >= 80) {
    grades = "A";
  } else if (perc <= 79 && perc >= 60) {
    grades = "B";
  } else if (perc <= 59 && perc >= 40) {
    grades = "C";
  } else {
    grades = "F";
  }
  // 4. Check Pass or Fail.
  // 5. Combined all and show Output.
  if (perc >= 39.5) {
    document.getElementById(
      "showData"
    ).innerHTML = ` Out of 400 your total is <span style="color: #d4a373;"> ${totalGrades} </span> and percentage is <span style="color: #d4a373;"> ${perc}%</span>. <br> Your grade is <span style="color: #d4a373;"> ${grades}</span>. You are Pass. `;
  } else {
    document.getElementById(
      "showData"
    ).innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `;
  }
};
