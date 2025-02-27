# black-rose-project

## Important Notice

**Warning:** Please do not run `npm install` or `npm install 'packageName'` outside of the `client` directory. Doing so may lead to unexpected behavior and issues with your project setup.

Make sure to not push any commits with the node_modules folder.

## Project Status

The project is being developed to connect the front and back ends, as well as the admin panel.
Developmental features will be merged to the develop branch. Stable features will then be merged to the main branch.

### Current Stack

- ReactJS @ Vite
- TailwindCSS, React-Bootstrap
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

### Branch Naming

Keep it simple and descriptive:

- For new features: `feature/what-youre-adding`
  - Example: `feature/login-page`
- For fixing bugs: `fix/what-youre-fixing`
  - Example: `fix/login-button`
- For documentation: `docs/what-youre-documenting`
  - Example: `docs/readme-update`
