<p align="center">
  <img src="/docs/images/av_logo.png" title="Alecia Vogel" />
</p>
  
<h1 align="center">alecia.ca</h1>
<p align="center">
  <a href="https://nextjs.org/" target="_blank" rel="nofollow noreferrer" style="text-underline: none"><img src="https://img.shields.io/badge/next.js-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js badge" /></a>
  <a href="https://sanity.io" target="_blank" rel="nofollow noreferrer" style="text-underline: none"><img src="https://img.shields.io/badge/sanity-%23F03E2F?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity CMS badge" /></a>
  <a href="https://nx.dev" target="_blank" rel="nofollow noreferrer" style="text-underline: none"><img src="https://img.shields.io/badge/nx-%23143055?style=for-the-badge&logo=nx&logoColor=white" alt="Nx badge" /></a>
  <a href="https://www.typescriptlang.org" target="_blank" rel="nofollow noreferrer" style="text-underline: none"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript badge" /></a>
  <a href="https://react.dev" target="_blank" rel="nofollow noreferrer" style="text-underline: none"><img src="https://img.shields.io/badge/react-%2361DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" /></a>
  <a href="https://tailwindcss.com/" target="_blank" rel="nofollow noreferrer" style="text-underline: none"><img src="https://img.shields.io/badge/tailwindcss-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS badge" /></a>
  <a href="https://resend.com" target="_blank" rel="nofollow noreferrer" style="text-underline: none"><img src="https://img.shields.io/badge/resend-black?style=for-the-badge&logo=resend&logoColor=white" alt="Resend badge" /></a>
  <a href="https://fontawesome.com" target="_blank" rel="nofollow noreferrer" style="text-underline: none"><img src="https://img.shields.io/badge/fontawesome-%23538DD7?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome badge" /></a>
  <a href="https://bun.sh" target="_blank" rel="nofollow noreferrer" style="text-underline: none"><img src="https://img.shields.io/badge/bun.sh-black?style=for-the-badge&logo=bun&logoColor=white" alt="Bun.sh badge" /></a>
</p>


This is the source code for my personal website, [alecia.ca](https://alecia.ca). 
I'm sharing it as an open-source project so others can explore how it’s built, learn from it, or even contribute if they’d like. 
It’s also a great way for me to gather feedback and improve over time.

One of the cool features of this website is that the blog comments are powered by this repository's GitHub Discussions. 
It keeps things simple and connected, letting readers share their thoughts while staying part of the development process.
You'll need a GitHub account to participate.

Whether you're here to learn, contribute, or just take a peek, I hope you find something useful. 😄

## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install Dependencies](#1-install-dependencies)
  - [Update Your `etc/hosts` File](#2-update-your-etchosts-file)
  - [Set Up Doppler Secrets](#3-set-up-doppler-secrets)
  - [Collect Required Environment Variables](#4-collect-required-environment-variables)
- [Running the Project](#running-the-project)
- [Running Storybook](#running-storybook)
- [Running Tests](#running-tests)
- [Linting](#linting)
- [Known Issues](#known-issues)
- [License](#license)
- [Contributing](#contributing)

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Giscus](https://giscus.app)
- [Resend](https://resend.com)
- [React Email](https://react.email)
- [React Spring](https://react-spring.dev)
- [Doppler](https://doppler.com)
- [FontAwesome](https://fontawesome.com)
- [Nx](https://nx.dev)
- [Bun.sh](https://bun.sh)

## Getting Started

> [!IMPORTANT]
> You will need around 7GB of RAM to run this project locally. ~8GB if you want to run Storybook at the same time.

<details>
  <summary>Extra note for WebStorm users RE: memory</summary>

  YMMV, but you will likely need to 
  [increase WebStorm's memory heap](https://www.jetbrains.com/help/webstorm/how-to-improve-product-performance.html#ws_improve_performance_increase_memory_heap_via_ide) 
  to 4096MiB. The default of 2048MiB was not enough *for me* to run this project.
  Sowwy 🥺👉👈
</details>

### Prerequisites

You will need the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (I use v22.11.0)
- [Doppler CLI](https://docs.doppler.com/docs/install-cli)
- [Bun.sh](https://bun.sh/docs/installation)

### 1. Install dependencies 
Run the following command to install the project's dependencies:

```bash
bun install
```

### 2. Update Your `etc/hosts` File
To enable local development, you'll need to update your `etc/hosts` file to include the following entry:

```plaintext
127.0.0.1 alecia.local
```

### 3. Set Up Doppler Secrets
To configure environment secrets, use Doppler. You can upload the basic configuration from the .env.dist file included in this repository:

```bash
doppler secrets upload .env.dist --config dev
```

This will populate Doppler with the environment variables needed for local development.

### 4. Collect required environment variables
Before running the project, you'll need to acquire the following keys and API credentials:

- **Cloudflare Turnstile Key**:  
  Sign up on [Cloudflare Turnstile](https://www.cloudflare.com/turnstile/) and obtain your key.

- **Sanity Project Details**:  
  Create an account on [Sanity](https://sanity.io), set up a project, and retrieve the required values, such as the project ID and dataset name.

- **Resend API Key**:  
  Sign up on [Resend](https://resend.com) and generate an API key.

Once obtained, add these credentials to your Doppler configuration.

## Running the Project

Run the following command to start the project in development mode:

```bash
nx dev web
```

Visit [https://alecia.local:3000](http://alecia.local:3000) to access the site.

## Running Storybook

To run Storybook, use the following command:

```bash
nx storybook design-system
```

This will load all story files across all libs and apps. You will be able to access it from [http://localhost:4400](http://localhost:4400).

## Running Tests

You can run tests for all libraries and the web app using the following command:

```bash
nx run-many -t test
```

Or, you can run tests for a specific library or app:

```bash
nx test <project>
```

You can find the name of the project in the `project.json` file of the respective library or app folder.

## Linting

If you are using an IDE that supports Eslint & Prettier, I highly recommend enabling automatic linting on save. 
This will ensure that any code you write adheres to the code style I've set up for this project (meaning fewer headaches for everyone!)

To lint the project, run the following command:

```bash
nx run-many -t lint
```

Or, you can link specific libraries or apps:

```bash
nx lint <project>
```

You can find the name of the project in the `project.json` file of the respective library or app folder.

## Known Issues

- **High Memory Usage**: Due to the complexity of the project, you'll need at least 7GB of RAM for development.
- **Environment Setup**: Ensure all API keys are correctly configured in Doppler. Missing keys **will** result in errors.

## License

This project is licensed under the [MIT License](LICENSE).
You are free to use, modify, and distribute this project, provided you include the original copyright and license.

## Contributing

Contributions are welcome! 🎉

To contribute:
1. Fork this repository.
2. Create a new branch for your feature or bugfix: `git checkout -b feature/my-feature`.
3. Make your changes and commit them: `git commit -m "feat: Add my feature"`.
4. Push to your fork: `git push origin feature/my-feature`.
5. Create a pull request, and I’ll review it as soon as possible!

Please ensure your code follows the existing style and includes tests for any new functionality.
