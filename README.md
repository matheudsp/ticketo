## Nestjs + React Monorepo with pnpm workspaces

implementation steps:

- setup the node project with "npm init -y"
- init git repo with "git init"
- add .gitignore file
- add pnpm-workspace.yaml file, setting the workspaces to /apps dir
- create /apps folder
- setup nestjs via cli using --skip-git command
- change nestjs port to the production environment variabel
- set nestjs global prefix to 'api'
- create client folder with vite@latest
- delete .git folder and .gitignore file from client folder
- delte all node_modules folders
- run pnpm install to install dependencies in all workspaces
- add dev, start, and build commands to root package.json
- change nestjs start:dev command to just "dev" and add --preserveWatchOutput flag
- add nestjs useStatic and trace it to ['../..', 'client', 'dist']
- add vite proxy to redirect /api requests to nestjs port
- push structure to git repo

additional info

- running npm run dev will run both dev commands for server and client apps
- must build before running npm install
- after build command, run npm start (nestjs port should render vite interface)

recommendations

- all commits must be made from root directory
- to install dependencies --filter flag from pnpm add can be used on root
