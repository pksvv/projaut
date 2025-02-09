# How to Work on the Repository (Fork & PR Guide)

## Overview

Since you don’t have direct access to the repository, we will follow the fork and pull request (PR) model.  
This allows you to contribute without needing direct write access.

---

## Steps to Set Up Your Development Environment

### 1. Fork the Repository
- Go to the GitHub repository.
- Click **Fork** (top-right).
- This creates a copy of the repository under your GitHub account.

### 2. Clone Your Fork
After forking, clone the repository to your local machine.

```sh
git clone https://github.com/your-username/<repo-name>.git
cd <repo-name>
```

### 3. Connect the Original Repository as "Upstream"
To keep your fork updated with the latest changes from the original repo, add it as an upstream remote.

```sh
git remote add upstream https://github.com/original-owner/<repo-name>.git
git fetch upstream
```

### 4. Create a New Feature Branch
Before making changes, create a new branch.

```sh
git checkout -b feature/new-feature
```

### 5. Make Changes and Commit
Modify the code, then add and commit.

```sh
git add .
git commit -m "Added new feature"
```

### 6. Push Your Branch to Your GitHub Fork

```sh
git push origin feature/new-feature
```

### 7. Create a Pull Request (PR)
- Go to your **forked** repo on GitHub.
- Click **"Pull Requests"** → **"New Pull Request"**.
- Choose `upstream/develop` as the target.
- Click **"Compare & pull request"** and submit.

### 8. Keeping Your Fork Updated
Whenever the original repository gets updated, sync your fork:

```sh
git checkout develop
git fetch upstream
git merge upstream/develop
git push origin develop
```
