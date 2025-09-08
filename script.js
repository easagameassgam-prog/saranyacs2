function showBioData() {
  // Collect input values
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const skills = document.getElementById("skills").value;

  // Simple validation
  if (!name || !dob || !email || !phone || !address || !skills) {
    alert("Please fill all fields.");
    return false;
  }

  // Display output
  document.getElementById("outName").textContent = name;
  document.getElementById("outDob").textContent = dob;
  document.getElementById("outEmail").textContent = email;
  document.getElementById("outPhone").textContent = phone;
  document.getElementById("outAddress").textContent = address;
  document.getElementById("outSkills").textContent = skills;

  // Show output section
  document.getElementById("output").style.display = "block";

  // Prevent form submission (page reload)
  return false;
}
