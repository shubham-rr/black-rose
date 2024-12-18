# black-rose-project

## Project Status

Currently, the project is built with HTML, CSS, and JavaScript. We are planning to transition to ReactJS soon.

### Current Stack

- HTML5
- CSS3
- Vanilla JavaScript

### Planned Stack

- ReactJS
- Node.js/Express (Backend)
- MongoDB (Database)

## Getting Started

### Prerequisites

- Git installed on your machine
- GitHub account
- Code editor (VS Code recommended)

### Initial Setup

1. Clone the repository

   ```bash
   git clone https://github.com/shubham-rr/black-rose.git
   cd black-rose
   ```

2. Set up your development environment

   ```bash
   # Create and switch to develop branch
   git checkout develop
   ```

### Workflow Guide

#### Starting New Work

1. **Update your develop branch**

   ```bash
   git checkout develop
   git pull origin develop
   ```

2. **Create a new feature branch**

   ```bash
   # For new feature
   git checkout -b feature/your-feature-name
   
   # For bug fix
   git checkout -b fix/bug-description
   
   # For documentation
   git checkout -b docs/description
   ```

3. **Make your changes**
   - Write your code
   - Test your changes
   - Commit regularly with clear messages

4. **Committing Changes**

   ```bash
   # Stage your changes
   git add .
   
   # Commit with a descriptive message
   git commit -m "feat: add user authentication"
   ```

#### Commit Message Format

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semi colons, etc
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

Example:

```bash
git commit -m "feat: add shopping cart functionality"
```

#### Submitting Your Work

1. **Push your branch**

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Go to GitHub repository
   - Click "New Pull Request"
   - Select `develop` as base branch
   - Select your feature branch as compare branch
   - Fill in PR template
   - Request reviews

#### Common Git Commands

```bash
# Check branch status
git status

# View commit history
git log

or

git log --oneline -n5 (to see last 5 commits)

# Discard local changes in a file (only affects uncommitted changes in working directory)
git checkout -- filename

# Switch branches
git checkout branch-name

# Update branch with latest changes
git pull origin branch-name

# View all branches
git branch -a

# Delete local branch
git branch -d branch-name
```

### Troubleshooting

#### Merge Conflicts

1. Update your branch with latest develop

   ```bash
   git checkout develop
   git pull origin develop
   git checkout your-branch
   git merge develop
   ```

2. Resolve conflicts
   - Open conflicted files
   - Look for conflict markers (<<<<<<, =======, >>>>>>>)
   - Choose correct code
   - Remove conflict markers
   - Save files

3. Complete merge

   ```bash
   git add .
   git commit -m "fix: resolve merge conflicts"
   git push origin your-branch
   ```

#### Stashing Changes

```bash
# Save changes for later
git stash

# List stashed changes
git stash list

# Apply most recent stash
git stash pop

# Apply specific stash
git stash apply stash@{n}
```

### Best Practices

1. **Keep branches updated**
   - Regularly pull changes from develop
   - Resolve conflicts early

2. **Commit Guidelines**
   - Commit related changes together
   - Commit often
   - Write clear commit messages
   - Don't commit broken code

3. **Pull Request Guidelines**
   - Keep PRs focused and small
   - Write clear descriptions
   - Include screenshots for UI changes
   - Respond to review comments promptly

4. **Code Review Guidelines**
   - Review code thoroughly
   - Be constructive in feedback
   - Approve only when satisfied
   - Test changes locally if needed

### Need Help?

- Ask team members for help
- Check Git documentation

## Branching Guide

### Main Branches

We have two important branches:

- `main` - Our live, working code
  - This is what our users see
  - We keep this branch super safe
  - No direct changes allowed here

- `develop` - Where we build new stuff
  - This is where all new work starts
  - Think of it as our testing ground

### Making Changes (3 Simple Steps)

1. **Start Your Work**

   ```bash
   git checkout develop           # Go to develop branch
   git pull                      # Get latest changes
   git checkout -b my-new-work   # Create your working branch
   ```

2. **Do Your Work**
   - Make your changes
   - Test to make sure everything works
   - Save your changes:

     ```bash
     git add .
     git commit -m "describe what you did"
     ```

3. **Share Your Work**

   ```bash
   git push origin my-new-work   # Upload your changes
   ```

   Then go to GitHub and create a Pull Request

### Branch Naming

Keep it simple and descriptive:

- For new features: `feature/what-youre-adding`
  - Example: `feature/login-page`
- For fixing bugs: `fix/what-youre-fixing`
  - Example: `fix/login-button`
- For documentation: `docs/what-youre-documenting`
  - Example: `docs/readme-update`

### Basic Rules to Remember

1. Always start from `develop`
2. Give your branch a clear name
3. Test your changes before sharing
4. Ask for help if you get stuck!

### Helpful Git Commands

```bash
# See what you've changed
git status

# Switch to a branch
git checkout branch-name

# Get latest changes
git pull

# See your branches
git branch

#Cancel changes on a file
git checkout -- filename
```

### TO ADD

- [ ] Add ReactJS Component Structure
- [ ] Add File/Folder Naming Convention
