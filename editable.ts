document.addEventListener("DOMContentLoaded", () => {
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
    const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
    const profilePicPreview = document.getElementById("profilePicPreview") as HTMLDivElement;
    const profilePicImage = document.getElementById("profilePicImage") as HTMLImageElement;
    const resumePreview = document.getElementById("resumePreview") as HTMLDivElement;
  
    // Profile Picture Preview
    profilePicInput?.addEventListener("change", (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          if (event.target?.result) {
            profilePicImage.src = event.target.result as string;
            profilePicPreview.classList.remove("hidden");
          }
        };
        reader.readAsDataURL(file);
      }
    });
  
    // Handle Form Submission
    resumeForm?.addEventListener("submit", (e: Event) => {
      e.preventDefault();
  
      // Collect input values
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const education = (document.getElementById("education") as HTMLTextAreaElement).value;
      const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
      const skills = (document.getElementById("skills") as HTMLInputElement).value;
      const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
      const github = (document.getElementById("github") as HTMLInputElement).value;
      const facebook = (document.getElementById("facebook") as HTMLInputElement).value;
      const twitter = (document.getElementById("twitter") as HTMLInputElement).value;
  
      // Generate Resume Preview with Editable Fields
      resumePreview.innerHTML = `
        ${profilePicPreview.classList.contains("hidden") ? "" : `
          <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
            <img src="${profilePicImage.src}" class="profile-pic" style="width: 150px; height: 150px;" />
          </div>`}
        
        <input type="text" value="${name}" class="editable-input" style="font-size: 1.5rem; font-weight: bold; text-align: center; width: 100%;" />
        <p>Email: <input type="text" value="${email}" class="editable-input" /></p>
        <p>Phone: <input type="text" value="${phone}" class="editable-input" /></p>
        
        <div class="resume-section">
          <h2>Education</h2>
          <ul>
            ${education.split(",").map(edu => `
              <li><input type="text" value="${edu.trim()}" class="editable-input" /></li>
            `).join("")}
          </ul>
        </div>
        
        <div class="resume-section">
          <h2>Work Experience</h2>
          <ul>
            ${experience.split(",").map(exp => `
              <li><input type="text" value="${exp.trim()}" class="editable-input" /></li>
            `).join("")}
          </ul>
        </div>
        
        <div class="resume-section">
          <h2>Skills</h2>
          <ul>
            ${skills.split(",").map(skill => `
              <li><input type="text" value="${skill.trim()}" class="editable-input" /></li>
            `).join("")}
          </ul>
        </div>
        
        <div class="resume-section">
          <h2>Social Media</h2>
          ${linkedin ? `<p><a href="${linkedin}" target="_blank">LinkedIn</a> <input type="text" value="${linkedin}" class="editable-input" /></p>` : ""}
          ${github ? `<p><a href="${github}" target="_blank">GitHub</a> <input type="text" value="${github}" class="editable-input" /></p>` : ""}
          ${facebook ? `<p><a href="${facebook}" target="_blank">Facebook</a> <input type="text" value="${facebook}" class="editable-input" /></p>` : ""}
          ${twitter ? `<p><a href="${twitter}" target="_blank">Twitter</a> <input type="text" value="${twitter}" class="editable-input" /></p>` : ""}
        </div>
      `;
  
      // Show the resume preview
      resumePreview.classList.remove("hidden");
  
      // Add event listeners to the editable inputs for real-time preview update
      const editableInputs = resumePreview.querySelectorAll(".editable-input") as NodeListOf<HTMLInputElement>;
      editableInputs.forEach(input => {
        input.addEventListener("input", () => {
          input.setAttribute("value", input.value); // Update the displayed value as the user types
        });
      });
    });
  });
  