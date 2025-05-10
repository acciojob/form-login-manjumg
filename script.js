function getFormvalue(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const fname = document.forms["nameForm"]["fname"].value.trim();
  const lname = document.forms["nameForm"]["lname"].value.trim();

  if (!fname && !lname) {
    alert("Please enter your name.");
    return;
  }

  alert(`${fname} ${lname}`.trim());
}

// Attach function to form submit
document.getElementById("nameForm").addEventListener("submit", getFormvalue);
