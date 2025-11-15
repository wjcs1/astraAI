const projectCatalog = [
  {
    id: 'bio-1',
    department: 'Biology',
    title: 'Microbiome Signaling Project 1',
    professor: 'Dr. Elena Park',
    shortDescription: 'Mapping gut microbiome signals that modulate immune response.',
    longDescription:
      'Students will analyze paired sequencing data and co-culture experiments to identify the metabolites that communicate between microbiota and immune cells. The project combines wet lab validation with Python-based modeling.',
    keywords: ['metabolomics', 'immune response', 'sequencing', 'Python'],
  },
  {
    id: 'bio-2',
    department: 'Biology',
    title: 'Bioengineering Tissue Repair Project 2',
    professor: 'Dr. Malik Aden',
    shortDescription: 'Design scaffolds that accelerate tissue regeneration after injury.',
    longDescription:
      'The lab explores collagen-based scaffolds, tests biomechanical strength, and collaborates with local hospitals for translational studies. Students engage with CAD, microscopy, and data analysis workflows.',
    keywords: ['biomaterials', 'tissue engineering', 'microscopy', 'CAD'],
  },
  {
    id: 'cs-1',
    department: 'Computer Science',
    title: 'Human-AI Collaboration Project 1',
    professor: 'Dr. Sahana Iyer',
    shortDescription: 'Study how mixed teams of humans and agents solve creative problems.',
    longDescription:
      'Help design controlled experiments, fine-tune large language models for facilitation, and evaluate collaboration quality using qualitative coders and statistical analysis.',
    keywords: ['LLMs', 'UX research', 'experiment design'],
  },
  {
    id: 'cs-2',
    department: 'Computer Science',
    title: 'Vision-Language Robotics Project 2',
    professor: 'Dr. Theo Novak',
    shortDescription: 'Teach home robots to follow instructions with grounded perception.',
    longDescription:
      'Collect multimodal datasets in the lab apartment, train perception stacks, and benchmark against standard instruction-following tasks. Experience with ROS is helpful but not required.',
    keywords: ['robotics', 'vision-language', 'ROS', 'datasets'],
  },
  {
    id: 'eng-1',
    department: 'Mechanical Engineering',
    title: 'Sustainable Energy Prototype Project 1',
    professor: 'Dr. Miriam Chen',
    shortDescription: 'Rapid prototype modular microgrids for remote communities.',
    longDescription:
      'Students simulate energy demand, build hardware mockups, and collaborate with NGOs to validate deployment plans. Expect CAD modeling, circuit testing, and data visualization.',
    keywords: ['energy systems', 'CAD', 'hardware'],
  },
];

const getDepartments = () => [...new Set(projectCatalog.map((project) => project.department))];

const renderProjects = (department) => {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const emptyState = document.createElement('p');
  emptyState.className = 'muted';
  emptyState.textContent =
    'Select a department to preview project cards complete with summaries and detail links.';

  if (!department) {
    grid.appendChild(emptyState);
    return;
  }

  const projects = projectCatalog.filter((project) => project.department === department);

  if (!projects.length) {
    emptyState.textContent = 'No projects found—new partnerships are coming soon.';
    grid.appendChild(emptyState);
    return;
  }

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <span class="project-tag">${project.department}</span>
      <h3>${project.title}</h3>
      <p class="muted">${project.professor}</p>
      <p>${project.shortDescription}</p>
      <button class="btn secondary" data-project="${project.id}">View Details</button>
    `;

    card.querySelector('button').addEventListener('click', () => {
      window.location.href = `project-detail.html?id=${project.id}`;
    });

    grid.appendChild(card);
  });
};

const showToast = (message) => {
  const toast = document.getElementById('mailingToast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  setTimeout(() => toast.classList.remove('is-visible'), 2500);
};

const handleMailingList = () => {
  const form = document.getElementById('mailingForm');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.email.value;
    console.info('Mailing list submission:', email);
    showToast('Thanks! You are on the list.');
    form.reset();
  });
};

const loadProjectDetail = () => {
  const detailRoot = document.getElementById('projectDetail');
  if (!detailRoot) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = projectCatalog.find((item) => item.id === id);

  if (!project) {
    detailRoot.querySelector('#projectTitle').textContent = 'Project not found';
    detailRoot.querySelector('#projectDescription').textContent =
      'Return to the search page to choose another project.';
    detailRoot.querySelector('.hero-actions').style.display = 'none';
    return;
  }

  detailRoot.querySelector('#projectDepartment').textContent = project.department;
  detailRoot.querySelector('#projectTitle').textContent = project.title;
  detailRoot.querySelector('#projectDescription').textContent = project.shortDescription;
  detailRoot.querySelector('#projectProfessor').textContent = project.professor;
  detailRoot.querySelector('#projectKeywords').textContent = project.keywords.join(', ');
  detailRoot.querySelector('#projectLongDescription').textContent = project.longDescription;

  const keywordList = detailRoot.querySelector('#keywordList');
  keywordList.innerHTML = '';
  project.keywords.forEach((keyword) => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = keyword;
    keywordList.appendChild(span);
  });

  const coldEmailLink = detailRoot.querySelector('#coldEmailLink');
  coldEmailLink.href = `cold-email.html?id=${project.id}`;
};

const generateEmailTemplate = (project) => `
<p>Hi ${project.professor.split(' ')[0] || 'Professor'},</p>
<p>
  My name is Maya, a second-year student exploring ${project.department.toLowerCase()} research. I
  read about <strong>${project.title}</strong> and was especially drawn to the focus on
  ${project.keywords.slice(0, 2).join(' and ')}.
</p>
<p>
  Recently I worked on a related project where I ${project.shortDescription.toLowerCase()}. I would
  love to contribute to your lab this upcoming term—happy to assist with literature reviews, data
  collection, or prototyping.
</p>
<p>
  Could we schedule a short call or lab visit? Thank you for considering my interest and for your
  time.
</p>
<p>Best,<br />Maya</p>
`;

const loadColdEmail = () => {
  const coldEmailRoot = document.getElementById('coldEmailPage');
  if (!coldEmailRoot) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = projectCatalog.find((item) => item.id === id) || projectCatalog[0];

  coldEmailRoot.querySelector('#emailProjectTitle').textContent = project.title;
  coldEmailRoot.querySelector('#emailProjectName').value = project.title;
  coldEmailRoot.querySelector('#emailProfessor').value = project.professor;
  coldEmailRoot.querySelector('#emailKeywords').value = project.keywords.join(', ');
  coldEmailRoot.querySelector('#emailOutput').innerHTML = generateEmailTemplate(project);

  const moreInfoList = coldEmailRoot.querySelector('#moreProjects');
  moreInfoList.innerHTML = '';
  projectCatalog
    .filter((item) => item.id !== project.id)
    .slice(0, 3)
    .forEach((item) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `project-detail.html?id=${item.id}`;
      link.textContent = `${item.title} — ${item.professor}`;
      li.appendChild(link);
      moreInfoList.appendChild(li);
    });
};

const setupResumePrototype = () => {
  const builderForm = document.getElementById('resumeBuilderForm');
  if (builderForm) {
    builderForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const focus = builderForm.focus.value;
      const highlights = builderForm.highlights.value || 'hands-on experimentation and analysis';
      const outline = `• Led a ${focus} initiative focusing on ${highlights}.
• Quantified outcomes with Astra-style metrics (impact, rigor, collaboration).
• Ready to tailor this story for upcoming cold emails.`;
      document.getElementById('builderOutput').textContent = outline;
    });
  }

  const uploadForm = document.getElementById('resumeUploadForm');
  if (uploadForm) {
    uploadForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const fileInput = document.getElementById('resumeFile');
      const fileName = fileInput?.files?.[0]?.name || 'No file selected';
      document.getElementById('uploadStatus').textContent = `${fileName} parsed successfully. Key sections identified: Education, Experience, Skills.`;
    });
  }

  const scoreForm = document.getElementById('resumeScoreForm');
  if (scoreForm) {
    scoreForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const target = scoreForm.target.value || 'research';
      const score = Math.floor(70 + Math.random() * 25);
      document.getElementById('scoreOutput').textContent = `Readiness score: ${score}/100 for ${target}. Focus next on quantifying impact and citing datasets.`;
    });
  }

  const analysisForm = document.getElementById('resumeAnalysisForm');
  if (analysisForm) {
    analysisForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const text = analysisForm.resumeText.value.trim();
      const output = text
        ? 'Skill gaps detected: add experimental design keywords, cite statistical tools, and mention mentorship experiences.'
        : 'Paste a snippet above to see suggested learning targets.';
      document.getElementById('analysisOutput').textContent = output;
    });
  }
};

const initPage = () => {
  const deptSelect = document.getElementById('departmentSelect');
  if (deptSelect) {
    const departments = getDepartments();
    departments.forEach((dept) => {
      const option = document.createElement('option');
      option.value = dept;
      option.textContent = dept;
      deptSelect.appendChild(option);
    });
    deptSelect.addEventListener('change', (event) => renderProjects(event.target.value));
  }

  renderProjects(deptSelect?.value || '');
  handleMailingList();
  loadProjectDetail();
  loadColdEmail();
  setupResumePrototype();
};

window.addEventListener('DOMContentLoaded', initPage);
