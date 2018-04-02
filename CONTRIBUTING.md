# Contributor's Guide

We welcome pull requests from everyone!

Follow these steps to contribute:

1. Find an open issue or one that needs assistance.

2. Inform us when you are working on something by posting a comment in the issue.

3. Follow the [Contribution Guidelines](#contribution-guidelines) to start working on the issue.

---

## Contribution Guidelines

### Setup

- [Prerequisites](#prerequisites)
- [Forking the Project](#forking-the-project)
- [Create a Branch](#create-a-branch)
- [Set Up LearnToCode](#set-up-learn-to-code)

### Create

- [Make Changes](#make-changes)

### Submit

- [Creating a Pull Request](#creating-a-pull-request)
- [Common Steps](#common-steps)
- [How We Review and Merge Pull Requests](#how-we-review-and-merge-pull-requests)
- [Next Steps](#next-steps)

### Prerequisites

| Prerequisite                                | Version |
| ------------------------------------------- | ------- |
| [Node.js](http://nodejs.org)                | `~ ^6.9.1`  |
| npm (comes with Node)                       | `~ ^5`  |
| Typescript                                  | `~ ^2.72`  |

If your versions are lower than the prerequisite versions, you should update.

We use `yarn` for node package management. Please run following commands to ensure everything is set up correctly

```shell
npm install -g yarn
npm install -g @angular/cli
```

### Forking the Project

#### Setting Up Your System

1. Install [Git](https://git-scm.com/) or your favorite Git client.
2. (Optional) [Setup an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

#### Forking LearnToCode

1. Go to the top level LearnToCode repository: <https://github.com/SweetCodingInc/LearnToCode>
2. Click the "Fork" Button in the upper right hand corner of the interface ([More Details Here](https://help.github.com/articles/fork-a-repo/))
3. After the repository (repo) has been forked, you will be taken to your copy of the LearnToCode repo at <https://github.com/yourUsername/LearnToCode>

#### Cloning Your Fork

1. Open a Terminal / Command Line / Bash Shell in your projects directory (_i.e.: `/yourprojectdirectory/`_)
2. Clone your fork of LearnToCode

```shell
$ git clone https://github.com/yourUsername/LearnToCode.git
```

**(make sure to replace `yourUsername` with your GitHub username)**

This will download the entire LearnToCode repo to your projects directory.

#### Setup Your Upstream

1. Change directory to the new LearnToCode directory (`cd LearnToCode`)
2. Add a remote to the official LearnToCode repo:

```shell
$ git remote add upstream https://github.com/SweetCodingInc/LearnToCode.git
```

Congratulations, you now have a local copy of the LearnToCode repo!

##### To start the project

To get started all you have to do is run the following command:

```shell
yarn start
```

#### Maintaining Your Fork

Now that you have a copy of your fork, there is work you will need to do to keep it current.

##### Rebasing from Upstream

Do this prior to every time you create a branch for a PR:

1. Make sure you are on the `master` branch

```shell
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
```
If your aren't on `master`, stash or resolve outstanding files / commits and checkout the `master` branch

```shell
$ git checkout master
```

2. Do a pull with rebase against `upstream`

```shell
$ git pull --rebase upstream master
```

This will pull down all of the changes to the official master branch, without making an additional commit in your local repo.

3. (_Optional_) Force push your master master branch to your GitHub fork

```shell
$ git push origin master --force
```

This will overwrite the master branch of your fork.

### Create a Branch

Before you start working, you will need to create a separate branch specific to the issue / feature you're working on. You will push your work to this branch.

#### Naming Your Branch

Name the branch something like `fix/xxx` or `feature/xxx` where `xxx` is a short description of the changes or feature you are attempting to add. For example `feature/addFilter` would be a branch where you add the brand new filtering feature.

#### Adding Your Branch

To create a branch on your local machine (and switch to this branch):

```shell
$ git checkout -b [name_of_your_new_branch]
```

and to push to GitHub:

```shell
$ git push origin [name_of_your_new_branch]
```

**If you need more help with branching, take a look at [this](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches).**

### Set Up LearnToCode

Once you have LearnToCode cloned, before you start the application, you first need to install all of the dependencies:

```bash
# Install NPM dependencies and Start the dev setup and watchers
yarn start
```

Now navigate to your browser and open <http://localhost:3000>. If the app loads, congratulations – you're all set.

### Make Changes

Get creative!

### Creating a Pull Request

#### What is a Pull Request?

A pull request (PR) is a method of submitting proposed changes to the LearnToCode repo. You will make changes to copies of the files which make up LearnToCode in a personal fork, then apply to have them reviewed.

#### Important: ALWAYS EDIT ON A BRANCH

Take away only one thing from this document: Never, **EVER**
make edits to the `master` branch itself. ALWAYS make a new branch BEFORE you edit files. This is critical, because if your PR is not accepted, your copy of
master will be forever sullied and the only way to fix it is to delete your
fork and re-fork.

#### Methods

There are two methods of creating a pull request for LearnToCode:

-   Editing files on a local clone (recommended)
-   Editing files via the GitHub Interface

##### Method 1: Editing via your Local Fork _(Recommended)_

This is the recommended method. Read about [How to Setup and Maintain a Local
Instance of LearnToCode](#maintaining-your-fork).

1.  Perform the maintenance step of rebasing `master`.
2.  Ensure you are on the `master` branch using `git status`:

```bash
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
```

1.  If you are not on master or your working directory is not clean, resolve
    any outstanding files/commits and checkout master `git checkout master`

2.  Create a branch off of `master` with git: `git checkout -B
    branch/name-here` **Note:** Branch naming is important. Use a name like
    `fix/short-fix-description` or `feature/short-feature-description`. Review
     the [Contribution Guidelines](#contribution-guidelines) for more detail.

3.  Edit your file(s) locally with the editor of your choice

4.  Check your `git status` to see unstaged files.

5.  Add your edited files: `git add path/to/filename.ext` You can also do: `git
    add .` to add all unstaged files. Take care, though, because you can
    accidentally add files you don't want added. Review your `git status` first.

6.  Commit your edits: We have a [tool](https://commitizen.github.io/cz-cli/)
    that helps you to make standard commit messages. Execute `npm run commit`
    and follow the steps.

7.  [Squash your commits](http://forum.freecodecamp.org/t/how-to-squash-multiple-commits-into-one-with-git/13231) if there are more than one.

8.  If you would want to add/remove changes to previous commit, add the files as in Step 5 earlier,
    and use `git commit --amend` or `git commit --amend --no-edit` (for keeping the same commit message).

9.  Push your commits to your GitHub Fork: `git push origin branch/name-here`

10.  Go to [Common Steps](#common-steps)

##### Method 2: Editing via the GitHub Interface

Note: Editing via the GitHub Interface is not recommended, since it is not
possible to update your fork via GitHub's interface without deleting and
recreating your fork.

### Common Steps

1.  Once the edits have been committed, you will be prompted to create a pull
    request on your fork's GitHub Page.

2.  By default, all pull requests should be against the LearnToCode main repo, `master`
    branch.
    **Make sure that your Base Fork is set to SweetCodingInc/LearnToCode when raising a Pull Request.**

3.  Submit a pull request from your branch to LearnToCode's `master` branch.

4.  The title of your PR should be descriptive of your changes and succinctly indicates what is being fixed.

    -   **Do not add the issue number in the PR title or commit message.**

    -   Examples: `Add CONTRIBUTING.md` `Correct typo in Waypoint
        Size Your Images`

5.  In the body of your PR include a more detailed summary of the changes you
    made and why.

    -   If the PR is meant to fix an existing bug/issue then, at the end of
        your PR's description, append the keyword `closes` and #xxxx (where xxxx
        is the issue number). Example: `closes #1337`. This tells GitHub to
        close the existing issue, if the PR is merged.

6.  Indicate if you have tested on a local copy of the site or not.

### How We Review and Merge Pull Requests

If an Contributor QA's a pull request and confirms that the new code does what it is supposed without seeming to introduce any new bugs, they will comment on it and merge it.

### Next Steps

#### If your PR is accepted

Once your PR is accepted, you may delete the branch you created to submit it.
This keeps your working fork clean.

You can do this with a press of a button on the GitHub PR interface. You can
delete the local copy of the branch with: `git branch -D branch/to-delete-name`

#### If your PR is rejected

Don't despair! You should receive solid feedback from other Contributors as to
why it was rejected and what changes are needed.

Many Pull Requests, especially first Pull Requests, require correction or
updating. If you have used the GitHub interface to create your PR, you will need to close your PR, create a new branch, and re-submit.

If you have a local copy of the repo, you can make the requested changes and
amend your commit with: `git commit --amend` This will update your existing
commit. When you push it to your fork you will need to do a force push to
overwrite your old commit: `git push --force`

Be sure to post in the PR conversation that you have made the requested changes.


#### Troubleshooting
If you run into any issues while running `yarn start` command. Please follow these steps

- First close any running instances of LearnToCode
- Run `yarn start` - this should get you started correctly.

In case you still face any issues, please don't hesitate to open an issue on github.
