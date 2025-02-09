# Branching Strategy for Smooth Collaboration

## Overview
To ensure smooth development and collaboration, we will follow a **branching strategy**. This helps in organizing our work, preventing conflicts, and keeping the project stable.

---

## Branching Model
We will use the following branches:

1. **`main`** – The stable, production-ready branch. No direct changes here.
2. **`develop`** – The main development branch. All new changes are merged here before going to `main`.
3. **Feature Branches (`feature/<feature-name>`)** – Used to develop new features.
4. **Bugfix Branches (`bugfix/<bug-name>`)** – Used to fix bugs found in `develop`.
5. **Hotfix Branches (`hotfix/<critical-fix>`)** – Used to fix urgent issues in `main`.

---

## Development Workflow

## 1. Create a Feature Branch
Whenever starting a new feature or bug fix, create a new branch from `develop`.

```bash
git checkout develop       # Switch to develop branch
git pull origin develop    # Get the latest changes
git checkout -b feature/new-feature   # Create a new branch
```
## 2. Make Changes and Commit

Modify the code, then add and commit the changes.

```sh
git add .  # Stage changes
git commit -m "Added new feature"  # Commit changes
```

## 3. Push Your Branch to GitHub

```sh
git push origin feature/new-feature  # Push your branch
```

## 4. Create a Pull Request (PR)

- Go to your **GitHub repository**.
- Click **"Pull Requests"** → **"New Pull Request"**.
- Choose `develop` as the target branch.
- Select your feature branch (`feature/new-feature`).
- Click **"Create Pull Request"** and submit.

## 5. Review and Merge

- Once reviewed, the PR is merged into `develop`.
- After merging, delete the feature branch.

```sh
git checkout develop
git pull origin develop  # Update local develop branch
git branch -d feature/new-feature  # Delete local branch
git push origin --delete feature/new-feature  # Delete remote branch
```

## 6. Sync with the Latest Code

Always keep your `develop` branch updated.

```sh
git checkout develop
git pull origin develop
```
