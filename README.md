<p align="center">
  <img src="/docs/images/av_logo.png" title="Alecia Vogel" />
</p>
  
<h1 align="center">alecia.ca</h1>
<p align="center">
  <a href="https://nextjs.org/" target="_blank" rel="nofollow noreferrer" style="text-underline: none">
    <img src="https://img.shields.io/badge/next.js-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js badge" />
  </a>
  <a href="https://sanity.io" target="_blank" rel="nofollow noreferrer" style="text-underline: none">
    <img src="https://img.shields.io/badge/sanity-%23F03E2F?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity CMS badge" />
  </a>
  <a href="https://nx.dev" target="_blank" rel="nofollow noreferrer" style="text-underline: none">
    <img src="https://img.shields.io/badge/nx-%23143055?style=for-the-badge&logo=nx&logoColor=white" alt="Nx badge" />
  </a>
  <a href="https://www.typescriptlang.org" target="_blank" rel="nofollow noreferrer" style="text-underline: none">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript badge" />
  </a>
  <a href="https://react.dev" target="_blank" rel="nofollow noreferrer" style="text-underline: none">
    <img src="https://img.shields.io/badge/react-%02361DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="nofollow noreferrer" style="text-underline: none">
    <img src="https://img.shields.io/badge/tailwindcss-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS badge" />
  </a>
  <a href="https://resend.com" target="_blank" rel="nofollow noreferrer" style="text-underline: none">
    <img src="https://img.shields.io/badge/resend-black?style=for-the-badge&logo=resend&logoColor=white" alt="Resend badge" />
  </a>
  <a href="https://fontawesome.com" target="_blank" rel="nofollow noreferrer" style="text-underline: none">
    <img src="https://img.shields.io/badge/fontawesome-%230538DD7?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome badge" />
  </a>
  <a href="https://bun.sh" target="_blank" rel="nofollow noreferrer" style="text-underline: none">
    <img src="https://img.shields.io/badge/bun.sh-black?style=for-the-badge&logo=bun&logoColor=white" alt="Bun.sh badge" />
  </a>
</p>


This is the source code for my personal website, [alecia.ca](https://alecia.ca). I'm making this project open-source
so that others can learn from it, I can receive feedback, and so that potential clients can see my work.

As a bonus, it powers my blog's comment sections via GitHub Discussions. 😄

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
