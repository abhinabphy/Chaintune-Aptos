# Chaintune-Music-Platform
  <a name="readme-top"></a>
  <h3 align="center">ChainTune</h3>
</div>

# Welcome to ChainTune

## 🚀 Main Features

- Provide social presence
- Earn to listen
- claim ownership
- Transparent payments
- Privacy centric

## 📃Pages

- Artist side 
  -   Homepage
  -   Onboarding page
  -   Dashboard page
  -   Manage Release page
  -   Preview Release page
- User Side
  -   Homepage
  -   Explore Collections
  -   Playlist page
  -   NFT Collections page (owned by them)

## 💻 Tech Stack

-   Nextjs
-   Typescript
-   Tailwindcss
-   MongoDB
-   IPFS
-   Pinata
-   Move

### Apps and Packages

- `user`: repo for the `listener` side
- `artist`: repo for the `artist` side
- `contracts`: repo containing all the `move` smart contracts
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
  
### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* pnpm
  ```sh
  npm install pnpm@latest -g
  ```

### Installation

1. Get the Pinata API Key at [https://www.pinata.cloud/](https://www.pinata.cloud/) (`env.NEXT_PUBLIC_JWT`)
2. Place the `MONGODB_URI` in `.env` .
3. Install PNPM packages
   ```sh
   pnpm install
   ```
4. Run the developer code by:
   ```sh
   pnpm run dev
   ```
5. create a .env file and paste the follwing content in there :

```
NEXT_PUBLIC_JWT = ""
MONGODB_URI = ""
MODULE_ADDRESS =""
PRIVATE_KEY =""
PUBLIC_KEY=""
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Description
The project is divided into 3 parts
1. Music Listeners' Repositiory
2. Music Artist's Repositiory
3. Smart Contracts


### Music Listeners's Repository

1. When the Listener first visits the platform, they can listen to their chosen song directly.
2. If they like they can buy any of the music/album NFT and can become an owner. Once they are the owner, a certain portion of the Artists' earnings will be sent to the NFT owner as a loyalty, through which they can earn while listening to the songs.
3. NFT holders will further be allowed to access Artists' private communities over Discord to have chats and activities within the fan group.
4. Artists will be rewarded by the number of listens from the users.

### Music Artist's Repository

1. When the artist first visits the platform, the register themselves and connect their wallet to their account. Then they put a stake amount for their account. This allows us to limit the number of Artists on the the platformm. Staked amounts will be returned only if they cross a certain threshold of listens.
2. Then they're led to the dashboard from where they can either create new releases or manage their existing releases.

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏Support

Don't forget to leave a star ⭐️
