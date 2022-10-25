# Git Commit History

GitHub commit History is a project developed in ReactJs and NestJs where it consumes GitHub api and shows an interface with the commit history from this project.

## 🚀 Tech Stack

**Client:** ReactJs, MaterialUI, React Query, Date-FNS

**Server:** NestJs, Octokit, Lodash

## 💻 Installation

### Requirements

- Node.js
- npm

### Steps

Clone the project and access the folder

```bash
$ git clone https://github.com/Jhomiguel/git-history.git
$ cd git-history

```

Install project dependencies

```bash
$ npm run install
```

Start the project (on watch mode)

```bash
$ npm run watch
```

## Environment Variables

To run this project, you will need to add the following environment variables to your server/.env file:

`NODE_PORT`

`GITHUB_REPO_OWNER`

`GITHUB_REPO_NAME`

`GITHUB_AUTH_TOKEN`

and also you will need to add these to your client/.env

`REACT_APP_API_URL`

## 📝 License

This project is under the MIT license. See the [LICENSE](https://github.com/Jhomiguel/git-history/blob/development/LICENCE.md) for more information.
