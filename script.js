document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();

  if (!fname || !lname) {
    alert('Please enter both first and last names.');
    return;
  }

  alert(`${fname} ${lname}`);
});
