# nextjs-boilerplate-typescript
Next JS Boilerplate with Typescript.

### Tools
- Framework: `Next JS`
- Language: `Typescript`
- Styling: `Styled Components`
- Fetch API: `Axios`

### How to run
```bash
# Install Package
yarn
```
```bash
# Development
yarn dev 

# localhost:3000
```

```bash
# Production
yarn build
yarn start 

# localhost:3000
```

### Project Structure
```bash
src
├── pages                   # pages folder
│   ├── index.tsx           # main file in this project
│   ├── _app.tsx            # custom App Component to initialize pages
│   └── _document.tsx       # custom Document to augment <html> and <body> tags
├── components              # components folder
│   ├── GlobalStyles.tsx    # handle Global Styles using styled components 
│   └── xxxx.tsx            # you can add new global component here
└── themes.ts               # declare themes and styled components config for typescript
```
