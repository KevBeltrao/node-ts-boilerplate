
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You must have NodeJS installed on your computer to run this project. For that, visit [nodejs.org/en/download/](https://nodejs.org/en/download/)

### Installing

Clone the GitHub repository

```
git clone 
```
Enter the react project folder

```
cd 
```
Create the .env file

Install and start the npm project

```
yarn
yarn dev
```

Now, you can see the app running at [localhost:3000](http://localhost:3000)
Or whatever port you chose


## Running the project

To run the project (if already installed), just follow this simple commands:

```
yarn dev
```

## Testing the project

To test the project, just run:

```
yarn testWatch
```


## Built With

* **Typescript** - _for back-end_.
* **NodeJS** - _for back-end_.

## Deployment

Development API: <add link here>

## GitHub

### Branches
They can be:
+ master
+ develop
+ feature
+ fix

Their names must follow this template: `feature/branch-name`

### Commits
Must begin with the name of the branch you developed on, following the model: _"feature/name-of-feature rest of commit…"._

Must be simple and show briefly what you just did.

Ex: `git commit -m "feature/banner-parallax Added the parallax effect to the background"`

### Pull Requests
First, proceed with _rebase_:
1. _commit_ the changes on your branch
2. Go to the original branch (develop ou master) with `git checkout develop` (or master)
3. Run `git pull`
4. Go back to your branch with `git checkout "your-branch"`
5. Run `git rebase develop` (or master)
6. Follow the steps to conclude the _rebase_, solving conflicts and running `git add .` and then `git rebase --continue`
7. Whan finished rebasing, run `git push -f origin "your-branch"`. Now your Pull Request can be opened on GitHub.

If possible, use this template for the pull request body:

```
### Issue Name
**What I did:**

- First thing I did...

- Second thing I did...

**How to test:**

- Brief notes on how to check if the feature works correctly.
```
