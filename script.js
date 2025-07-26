function generateRoadmap() {
  const career = document.getElementById("careerInput").value.trim();
  const output = document.getElementById("output");
  if (!career) {
    output.innerHTML = "<p>Please enter a career goal.</p>";
    return;
  }

  const roadmap = `
    <h2>Roadmap for becoming a ${career}:</h2>
    <ol>
      <li>📚 Learn the fundamentals: HTML, CSS, JS (or relevant tech).</li>
      <li>🛠 Build real-world projects and a portfolio.</li>
      <li>🎓 Take online certifications or bootcamps.</li>
      <li>🤝 Network on LinkedIn, GitHub, and Discord.</li>
      <li>💼 Start freelancing or apply for internships.</li>
      <li>🚀 Apply for full-time roles and keep upskilling!</li>
    </ol>
  `;

  output.innerHTML = roadmap;
}
