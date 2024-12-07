function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('espSection').style.display = 'block';
  document.getElementById('miscSection').style.display = 'block';
});
