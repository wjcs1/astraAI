# Astra

Astra is a lightweight prototype for helping students explore undergraduate research opportunities. The app focuses on four flows:

1. Developing research skills via resume tools.
2. Searching faculty projects by department.
3. Generating cold emails for outreach.
4. Joining a mailing list for future updates.

The project is built with Vite, React, TypeScript, React Router, and Tailwind CSS for a responsive, clean, light-blue aesthetic.

## File Structure

```
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
└── src
    ├── App.tsx
    ├── main.tsx
    ├── routes.tsx
    ├── components
    │   ├── EmailForm.tsx
    │   ├── Footer.tsx
    │   ├── MailingList.tsx
    │   ├── Navbar.tsx
    │   ├── ProjectCard.tsx
    │   ├── ResumeScore.tsx
    │   └── ResumeUpload.tsx
    ├── data
    │   ├── departments.ts
    │   └── projects.ts
    ├── pages
    │   ├── ColdEmailGenerator.tsx
    │   ├── Home.tsx
    │   ├── ProjectDetails.tsx
    │   ├── ProjectSearch.tsx
    │   └── ResumeTools.tsx
    └── utils
        ├── generateEmail.ts
        └── scoreResume.ts
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run development server**
   ```bash
   npm run dev
   ```
3. **Build for production**
   ```bash
   npm run build
   ```
4. **Preview production build**
   ```bash
   npm run preview
   ```

## Extending the Project

- **Connect to a backend**: Swap placeholder console logs in `MailingList` or the resume tools for API calls to your serverless or REST backend.
- **Real resume scoring**: Update `src/utils/scoreResume.ts` to call an ML model or rule-based scoring algorithm.
- **Persistent data**: Integrate Supabase/Firebase to store uploaded resumes and project information.
- **Design polish**: Tailor Tailwind tokens in `tailwind.config.js` for more intricate branding.

## Screenshots

Include screenshots of the homepage, resume tools flow, and cold email generator once you deploy the prototype:

- `docs/homepage.png`
- `docs/resume-tools.png`
- `docs/cold-email.png`

