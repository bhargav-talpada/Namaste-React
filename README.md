# Namaste React 🚀

# Parcel 📦
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algoritham - Written in C++
- Caching - Faster Building
- Image Optimization
- Minification
- Bandling
- Compress
- Cinsistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and production bundle

# Food Order App 🍕
-> Header
    - Logo
    - Nav Items
-> Body
    - Search
    - Resturent Cards

# Import/Export
-> Two types pf import/export.

1. Named Import/Export
    export const var_name/component_name
    import {var_name/component_name} from 'path'

2. Default Import/Export
    export defult component
    import component from 'path'

# React Hooks
- Normal JS utilities function
- wrote by Meta developers
- Very important hooks is 
    1. useState() - it generate superpowerfull state variables in react
    2. useEffect()

# 2 types of routing
- Client side routing
- Server side routing

# Life Cycle of react
- 3 phase of life cycle
    1. Mounting
        - Constructor call (dummy data)
        - Render() call (dummy data)
        - HTML (dummy data)
        - ComponentDidMount
        - API call 
        - this.setState -> state variable is updateed

    2. Updating
        - Render() call (API data)
        - HTML (API data)
        - ComponentsDidUpdate

    3. Unmounting
        - data removed from the screen
        - ComponentWillUnmount

# Custom Hooks
- You create your own hook
- Must write statefully logical code, api calling, etc..
- File name start with use keyword
- eg, useOnlineStatus.js

# Important topics
- Chunking
- Code Spliting
- Lazy Loading

# Tailwind Css
- tailwind.config.js : configuration of tailwind
- postcssrc : configuration of css
- npm install -D tailwindcss
- npx tailwindcss init

# HOC
- Higher Order Component
- It Takes components as a input
- And return components

# useContext
- passing data to multiple component without help of props.
- handle multiple state
- create using createContext()
- access context to use of useContext() hook
- access context in class components using of contextName.Consumer
- modify your context using contextName.Provider

# Redux ToolKit (RTK)
- Install R@reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (CartSlice)
- Dispatch (action)
- Selector

# Types of Testing for developer 🧪
- Unit Testing
- Integration Testing
- End to End Testing (E2E)

# Setting up testing in our app
- Install React Testing Library
- Install Jest
- Install Babel depenencies
- Configure Babel
- Configure Parcel config file to disable default babel transpilation
- Jest configuration : npx jest --init
- Install jsdom library : npm i -D jest-environment-jsdom
- Install @babel/preset-react : to make JSX work in tast cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom

# Netflix-GPT 🎦🎬
- Create React App
- Configure Tailwind Css
- Header
- Login From

# Features
- Login/SignUp page
    - SignIn / SignUp form
    - redirect to browse page
- Browse (after authentication)
    - Header
    - Main Movie
        - Triler in background
        - Title & discription
        - Movie Suggestions
            - Movie List * N
- NetflixGPT
    - Search Bar
    - Movie Suggetions