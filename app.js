document.addEventListener("DOMContentLoaded", () => {
  // Complete portfolio data structure
  const portfolioData = {
    profile: {
      name: "Crimson Wheeler",
      title: "XR Developer & Technical Leader",
      bio: "Experienced XR developer specializing in VR/AR/MR applications with expertise in Unity, Meta Presence Platform, and interactive experience design. Strong focus on innovative user experiences and immersive storytelling.",
      location: "Brisbane, Australia",
      email: "crimson@crimsonwheeler.dev",
      github: "https://github.com/crimsonwheeler",
      linkedin: "https://www.linkedin.com/in/crimson-wheeler/",
      profileImage: "", // Add your profile image URL here
    },
    skills: {
      engines: ["Unity", "Unreal Engine", "WebXR"],
      programming: ["C#", "JavaScript", "PowerShell", "Python", "TypeScript"],
      xr: [
        "Meta Presence Platform",
        "Hand Tracking",
        "AR Foundation",
        "Mixed Reality",
        "Volumetric Capture",
        "Depthkit",
      ],
      tools: [
        "Git",
        "GitHub",
        "CI/CD",
        "Visual Studio",
        "N Central",
        "Unity XR Interaction Toolkit",
        "PUN2 Networking",
      ],
      design: [
        "3D Modeling",
        "Shader Development",
        "VFX",
        "User Experience Design",
        "Interactive Storytelling",
      ],
    },
    projects: [
      {
        id: 1,
        title: "Pillow",
        image:
          "https://crimsonwheeler.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fb0930ce5-2382-4810-8e92-3ece8545d32c%2Ffa86501f-431e-40ab-b203-7253a4555bb5%2FScreenshot_2024-03-05_164431.png?table=block&id=195caa1b-d33a-8127-8276-ded6d2d557bd&spaceId=b0930ce5-2382-4810-8e92-3ece8545d32c&width=2000&userId=&cache=v2", // Add image URL
        shortDescription: "Immersive MR app designed for use while lying down",
        description:
          "Discover an entirely new way to use your headset with Pillow, the ONLY immersive app designed to be used lying down! Relax in bed in mixed reality as you experience four amazing interactive dreams, all playable in singleplayer or 2-player co-op!",
        features: [
          "STARGAZE as your ceiling transforms into an interactive night sky",
          "FISH from your ceiling in this gravity-twist to fishing game",
          "MEDITATE and create worlds with the power of your breath",
          "PLAY interactive bedtime stories with hundreds of unique endings",
          "SHARE YOUR BED virtually with a friend in a social MR experience",
        ],
        technologies: [
          "Unity",
          "Meta Quest",
          "Mixed Reality",
          "Meta Presence Platform",
          "Multiplayer",
        ],
        link: "https://pillow.social",
        github: "",
        category: "mixed-reality",
      },
    ],
    experience: [
      {
        company: "XR Development Studio",
        position: "Lead XR Developer",
        period: "2021 - Present",
        description:
          "Lead developer for client-facing XR applications, focusing on Meta Quest platform and mixed reality experiences. Implemented CI/CD pipelines and managed project teams to deliver high-quality immersive applications.",
        technologies: [
          "Unity",
          "Meta Quest",
          "Mixed Reality",
          "C#",
          "Hand Tracking",
          "Team Leadership",
        ],
      },
      {
        company: "IT Solutions Provider",
        position: "Systems Developer",
        period: "2019 - 2021",
        description:
          "Developed and maintained automation solutions for large-scale IT infrastructure. Designed modular PowerShell scripts and implemented automated deployment workflows to streamline system management across 800+ computers.",
        technologies: [
          "PowerShell",
          "GitHub",
          "N Central",
          "Active Directory",
          "Deployment Automation",
        ],
      },
      {
        company: "Game Development Studio",
        position: "VR Developer",
        period: "2017 - 2019",
        description:
          "Created immersive VR experiences and games for various platforms. Collaborated with designers and artists to implement interactive systems and optimize performance for resource-constrained VR devices.",
        technologies: [
          "Unity",
          "VR Development",
          "C#",
          "Shader Development",
          "Performance Optimization",
        ],
      },
    ],
    education: [
      {
        institution: "XR Bootcamp",
        degree: "Advanced XR Development",
        period: "2023",
        description:
          "Intensive program focusing on advanced XR development techniques, networking, and the Meta Presence Platform. Completed capstone project on multiplayer VR experiences.",
        achievements: ["Multiplayer Escape Room Island Project"],
      },
      {
        institution: "University of Technology",
        degree: "Bachelor of Computer Science",
        period: "2014 - 2017",
        description:
          "Specialized in interactive systems and game development with a focus on emerging technologies.",
        achievements: [
          "Dean's List 2016-2017",
          "Outstanding Graduate Project Award",
        ],
      },
    ],
    testimonials: [
      {
        name: "Alex Thornton",
        position: "Creative Director, XR Studio",
        text: "Crimson's technical expertise combined with creative problem-solving made our project possible. Their ability to optimize complex systems while maintaining high-quality visuals was crucial to our success.",
        image: "", // Add image URL
      },
      {
        name: "Jordan Lee",
        position: "IT Manager",
        text: "The PowerShell Toolkit that Crimson developed revolutionized our IT operations. What used to take hours now takes minutes, and the modular design has allowed us to continuously build upon the foundation they created.",
        image: "", // Add image URL
      },
      {
        name: "Taylor Richards",
        position: "Game Designer",
        text: "Working with Crimson was a game-changer for our VR project. Their technical knowledge and attention to performance optimization resulted in an experience that runs flawlessly while still maintaining impressive visual quality.",
        image: "", // Add image URL
      },
    ],
    categories: [
      {
        id: "all",
        name: "All Projects",
      },
      {
        id: "virtual-reality",
        name: "Virtual Reality",
      },
      {
        id: "mixed-reality",
        name: "Mixed Reality",
      },
      {
        id: "augmented-reality",
        name: "Augmented Reality",
      },
      {
        id: "software-tools",
        name: "Software Tools",
      },
    ],
  };

  // Portfolio rendering logic
  const container = document.getElementById("portfolio-container");

  // Render all projects initially or use filter functionality
  renderProjects(portfolioData.projects);

  // Set up category filtering if elements exist
  const categoryButtons = document.querySelectorAll(".portfolio-filter button");
  if (categoryButtons.length > 0) {
    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Update active button
        categoryButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-filter");

        // Filter projects
        if (category === "all") {
          renderProjects(portfolioData.projects);
        } else {
          const filteredProjects = portfolioData.projects.filter(
            (project) => project.category === category
          );
          renderProjects(filteredProjects);
        }
      });
    });
  }

  function renderProjects(projects) {
    // Clear container
    container.innerHTML = "";

    // Add projects
    projects.forEach((project) => {
      const projectEl = document.createElement("article");
      projectEl.className = "portfolio-item";
      projectEl.innerHTML = `
          <img src="${project.image || "/placeholder-image.jpg"}" alt="${
        project.title
      }">
          <h3>${project.title}</h3>
          <p class="short-description">${project.shortDescription}</p>
        `;

      projectEl.addEventListener("click", () => openModal(project));
      container.appendChild(projectEl);
    });
  }

  // Modal handling
  const modal = document.getElementById("project-modal");
  const closeBtn = document.querySelector(".close");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => (modal.style.display = "none"));
    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }

  function openModal(project) {
    document.getElementById("modal-image").src =
      project.image || "/placeholder-image.jpg";
    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-description").textContent =
      project.description;

    // Create HTML for features
    const featuresHtml = `
        <h3>Key Features</h3>
        <ul>
          ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        
        <h3>Technologies</h3>
        <div class="tech-stack">
          ${project.technologies
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}
        </div>
        
        <div class="project-links">
          ${
            project.link
              ? `<a href="${project.link}" target="_blank" class="btn">View Project</a>`
              : ""
          }
          ${
            project.github
              ? `<a href="${project.github}" target="_blank" class="btn btn-github">View on GitHub</a>`
              : ""
          }
        </div>
      `;

    document.getElementById("modal-content").innerHTML = featuresHtml;
    modal.style.display = "block";
  }

  // Populate profile information if elements exist
  if (portfolioData.profile && document.getElementById("profile-name")) {
    document.getElementById("profile-name").textContent =
      portfolioData.profile.name;
    document.getElementById("profile-title").textContent =
      portfolioData.profile.title;
    document.getElementById("profile-bio").textContent =
      portfolioData.profile.bio;

    if (document.getElementById("profile-image")) {
      document.getElementById("profile-image").src =
        portfolioData.profile.profileImage || "/placeholder-profile.jpg";
      document.getElementById("profile-image").alt = portfolioData.profile.name;
    }

    // Add social links if they exist
    const socialContainer = document.querySelector(".social-links");
    if (socialContainer) {
      if (portfolioData.profile.github) {
        const githubLink = document.createElement("a");
        githubLink.href = portfolioData.profile.github;
        githubLink.target = "_blank";
        githubLink.innerHTML = '<i class="fab fa-github"></i>';
        socialContainer.appendChild(githubLink);
      }

      if (portfolioData.profile.linkedin) {
        const linkedinLink = document.createElement("a");
        linkedinLink.href = portfolioData.profile.linkedin;
        linkedinLink.target = "_blank";
        linkedinLink.innerHTML = '<i class="fab fa-linkedin"></i>';
        socialContainer.appendChild(linkedinLink);
      }
    }
  }

  // Populate skills if section exists
  if (portfolioData.skills && document.getElementById("skills-container")) {
    const skillsContainer = document.getElementById("skills-container");

    // Create skill categories
    for (const [category, skillsList] of Object.entries(portfolioData.skills)) {
      const categoryEl = document.createElement("div");
      categoryEl.className = "skill-category";

      categoryEl.innerHTML = `
          <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div class="skills-list">
            ${skillsList
              .map((skill) => `<span class="skill-tag">${skill}</span>`)
              .join("")}
          </div>
        `;

      skillsContainer.appendChild(categoryEl);
    }
  }

  // Populate experience if section exists
  if (
    portfolioData.experience &&
    document.getElementById("experience-container")
  ) {
    const experienceContainer = document.getElementById("experience-container");

    portfolioData.experience.forEach((job) => {
      const jobEl = document.createElement("div");
      jobEl.className = "experience-item";

      jobEl.innerHTML = `
          <h3>${job.position}</h3>
          <h4>${job.company}</h4>
          <p class="period">${job.period}</p>
          <p>${job.description}</p>
          <div class="tech-used">
            ${job.technologies
              .map((tech) => `<span class="tech-tag">${tech}</span>`)
              .join("")}
          </div>
        `;

      experienceContainer.appendChild(jobEl);
    });
  }

  // Populate testimonials if section exists
  if (
    portfolioData.testimonials &&
    document.getElementById("testimonials-container")
  ) {
    const testimonialsContainer = document.getElementById(
      "testimonials-container"
    );

    portfolioData.testimonials.forEach((testimonial) => {
      const testimonialEl = document.createElement("div");
      testimonialEl.className = "testimonial";

      testimonialEl.innerHTML = `
          <div class="testimonial-content">
            <p>"${testimonial.text}"</p>
          </div>
          <div class="testimonial-author">
            <img src="${testimonial.image || "/placeholder-avatar.jpg"}" alt="${
        testimonial.name
      }">
            <div>
              <h4>${testimonial.name}</h4>
              <p>${testimonial.position}</p>
            </div>
          </div>
        `;

      testimonialsContainer.appendChild(testimonialEl);
    });
  }
});
