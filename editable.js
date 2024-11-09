document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    var profilePicInput = document.getElementById("profilePic");
    var profilePicPreview = document.getElementById("profilePicPreview");
    var profilePicImage = document.getElementById("profilePicImage");
    var resumePreview = document.getElementById("resumePreview");
    // Profile Picture Preview
    profilePicInput === null || profilePicInput === void 0 ? void 0 : profilePicInput.addEventListener("change", function (e) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                if ((_a = event.target) === null || _a === void 0 ? void 0 : _a.result) {
                    profilePicImage.src = event.target.result;
                    profilePicPreview.classList.remove("hidden");
                }
            };
            reader.readAsDataURL(file);
        }
    });
    // Handle Form Submission
    resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Collect input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        var linkedin = document.getElementById("linkedin").value;
        var github = document.getElementById("github").value;
        var facebook = document.getElementById("facebook").value;
        var twitter = document.getElementById("twitter").value;
        // Generate Resume Preview with Editable Fields
        resumePreview.innerHTML = "\n        ".concat(profilePicPreview.classList.contains("hidden") ? "" : "\n          <div style=\"display: flex; justify-content: center; margin-bottom: 1rem;\">\n            <img src=\"".concat(profilePicImage.src, "\" class=\"profile-pic\" style=\"width: 150px; height: 150px;\" />\n          </div>"), "\n        \n        <input type=\"text\" value=\"").concat(name, "\" class=\"editable-input\" style=\"font-size: 1.5rem; font-weight: bold; text-align: center; width: 100%;\" />\n        <p>Email: <input type=\"text\" value=\"").concat(email, "\" class=\"editable-input\" /></p>\n        <p>Phone: <input type=\"text\" value=\"").concat(phone, "\" class=\"editable-input\" /></p>\n        \n        <div class=\"resume-section\">\n          <h2>Education</h2>\n          <ul>\n            ").concat(education.split(",").map(function (edu) { return "\n              <li><input type=\"text\" value=\"".concat(edu.trim(), "\" class=\"editable-input\" /></li>\n            "); }).join(""), "\n          </ul>\n        </div>\n        \n        <div class=\"resume-section\">\n          <h2>Work Experience</h2>\n          <ul>\n            ").concat(experience.split(",").map(function (exp) { return "\n              <li><input type=\"text\" value=\"".concat(exp.trim(), "\" class=\"editable-input\" /></li>\n            "); }).join(""), "\n          </ul>\n        </div>\n        \n        <div class=\"resume-section\">\n          <h2>Skills</h2>\n          <ul>\n            ").concat(skills.split(",").map(function (skill) { return "\n              <li><input type=\"text\" value=\"".concat(skill.trim(), "\" class=\"editable-input\" /></li>\n            "); }).join(""), "\n          </ul>\n        </div>\n        \n        <div class=\"resume-section\">\n          <h2>Social Media</h2>\n          ").concat(linkedin ? "<p><a href=\"".concat(linkedin, "\" target=\"_blank\">LinkedIn</a> <input type=\"text\" value=\"").concat(linkedin, "\" class=\"editable-input\" /></p>") : "", "\n          ").concat(github ? "<p><a href=\"".concat(github, "\" target=\"_blank\">GitHub</a> <input type=\"text\" value=\"").concat(github, "\" class=\"editable-input\" /></p>") : "", "\n          ").concat(facebook ? "<p><a href=\"".concat(facebook, "\" target=\"_blank\">Facebook</a> <input type=\"text\" value=\"").concat(facebook, "\" class=\"editable-input\" /></p>") : "", "\n          ").concat(twitter ? "<p><a href=\"".concat(twitter, "\" target=\"_blank\">Twitter</a> <input type=\"text\" value=\"").concat(twitter, "\" class=\"editable-input\" /></p>") : "", "\n        </div>\n      ");
        // Show the resume preview
        resumePreview.classList.remove("hidden");
        // Add event listeners to the editable inputs for real-time preview update
        var editableInputs = resumePreview.querySelectorAll(".editable-input");
        editableInputs.forEach(function (input) {
            input.addEventListener("input", function () {
                input.setAttribute("value", input.value); // Update the displayed value as the user types
            });
        });
    });
});
