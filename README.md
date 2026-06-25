# HKUST CSE Assignment Template

This repository provides a template for assignment descriptions of courses in
HKUST CSE. It allows developers to create assignment descriptions in Markdown
format, and convert them to a modern-looking website for easy viewing.

The description is mainly written in `index.md`. It has a frontmatter section at
the top in YAML format, which contains metadata about the assignment, including
the course code, course name, assignment code, assignment name, maintainers, and
links to related resources.

To get started, you will have to install Node.js. Then, run

```bash
npm install
```

to install the dependencies.

To run a local development server to preview the assignment description, run

```bash
npm run dev
```

It creates a local server at http://localhost:4321/ by default. The content of
`index.md` is rendered as a website. Modifying the Markdown file will
automatically update the website.

To compile the assignment description into a deployable static website, run

```bash
npm run build
```

It generates the static website in `dist/description.zip`. You can then deploy
the content to any static web hosting service. It also packages the source code
in `dist/description-source.zip`. You can then share the source code.
