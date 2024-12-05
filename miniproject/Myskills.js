const skillInput = document.getElementById("search-input");
const addSkillBtn = document.getElementById("search-button");
const skillTags = document.getElementById("skill-tags");

function createSkillTag(skill) {
  const tag = document.createElement("div");
  tag.className = "skill-tag";
  tag.innerHTML = `
    ${skill}
    <button class="remove-btn">&times;</button>
  `;

  // Add remove functionality
  tag.querySelector(".remove-btn").addEventListener("click", () => {
    tag.remove();
  });

  return tag;
}

addSkillBtn.addEventListener("click", () => {
  const skill = skillInput.value.trim();
  if (skill) {
    const tag = createSkillTag(skill);
    skillTags.appendChild(tag);
    skillInput.value = "";
  }
});


skillInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addSkillBtn.click();
  }
});