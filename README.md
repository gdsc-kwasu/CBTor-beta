<!-- @format -->

# CBTor

A beautiful app built to enable freshmen on campus to simulate the Computer-Based exam offered by the University. CBTor offers wonderful user experience and features that enable students to prepare for exams and experience what it is like to take a Computer-based test.

The is the official repository for the frontend and it is done using React Library and Redux state management

<p align="center">
  <a href="https://cbtor.dsckwasu.club">
    <img src="https://img.shields.io/badge/website-cbtor.dsckwasu.club-blue.svg" alt="CBTor web app">
  </a>
</p>

<hr />

## Getting Started

Installing the application (as a developer) is simple in the following steps:

- Fork and Clone this repository

```git
git clone https://github.com/kwasu-ng/CBTor-beta && cd CBTor-beta
```

- Make your forked repo the remote upstream (at origin)

```
    git remote add origin https://github.com/kwasu-ng/CBTor-beta.git
```

- Navigate into the cloned directory and install dependencies with NPM or Yarn &mdash; your pick. But
  we go with NPM here.

```npm
npm install
```

- Make a duplicate of the **env** file and update its content accordingly. \_Most times, this is just fine with no update.

```sh
cp .env.example .env
```

- Start the development server, \_and start developing.

```npm
npm run dev
```

## Quick Developer Guide

- We are using parcel bundler to bundle our file. To build the file for production, run the command below

```npm
npm run build
```

## Contributing.

- Before contributing, ensure you create a branch for a particular feature you'd want to work on, so we wouldn't be having issues of merge conflict
- You can create a branch this way;

```git
        git checkout -b [branch-name]
```

- Make your changes, add them and make your commits

  ```
  git commit -m "your message"
  ```

  Write good commit messages as this is important to know the essence of your commit

- When you're done with your fixes push to that current branch

```git
        git push origin [name-of-branch]
```

- The command above pushes your your commits to the current branch you're in.
- Then make your Pull Request to the dev branch

## Commit Structure

- type: subject e.g body, footer

The title consists of the type of the message and subject.
The type is contained within the title and can be one of these types:

- feat: a new feature

- fix: a bug fix

- docs: changes to documentation

- style: formatting, missing semi colons, etc; no code change

- refactor: refactoring production code

- test: adding tests, refactoring test; no production code change

An example of a good commit message

```
    feat: Make login check for email and password
```

> Happy Hacking !!!
