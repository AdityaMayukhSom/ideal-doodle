# [devstream.](https://www.devstream.in)

Welcome to the devstream website repository! This project is built using Next.js, a powerful framework for building React applications. The website renders content written in markdown, providing an efficient and dynamic platform to showcase tech articles and insights from developers worldwide.

## Getting Started

To run the development server locally, follow these steps:

1. Clone the repository to your local machine:

```sh
git clone https://github.com/yourusername/devstream-blog.git
```

2. Install the required dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the website.

4. To build the project:
```sh
npm run build
```

## Editing and Adding Content

The website content is written in markdown format, allowing easy editing and updating of articles. You can start editing the home page by modifying `pages/index.tsx`. The page auto-updates as you make changes, making the editing process seamless.

To add new articles, create a new markdown file under the `posts` directory. The website will automatically generate a new page for each article using the metadata and content from the markdown file. The markdown file's name mirrors the URL where its content is presented.

<!-- ## API Routes

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes. You can customize these routes to handle specific functionalities and backend operations. -->

## Learn More

To learn more about Next.js and its features, explore the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

This project mainly uses `markdown-to-jsx` and `gray-matter` for markdown processing. You can checkout their repositories too.
- [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx)
- [gray-matter](https://github.com/jonschlinkert/gray-matter)

## Deployment

The DevStream blog website is set up for continuous integration and deployment (CI/CD) on Vercel. The website is automatically built and deployed whenever new code is pushed to the repository. The deployment process is streamlined and hassle-free, thanks to the Vercel platform.

## Known Issues and TODOs

- Line numbers not working in case of Partytown in syntax highlighting.