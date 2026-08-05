Notes Episode 2 :- 

--> npm = it manages packagess, but it does'nt stand for node package manager.

    or we can say that npm is package manager, which manage packages.

--> package.json is configuration for npm.

--> packages and dependencies are all the same things.

# All About Bundler

--> the most important package in our project is nothing but "bundler".

    Q- So, what is a bundler ?
    Ans- A tool that takes your project's modules/files and their dependencies, processes them, and produces optimized output that can be served to the browser.  

                                OR

    Bundler ek tool hota hai jo tumhare project ki multiple files ko analyze karke, unhe optimize karke, browser ke liye usable files/bundles mein convert karta hai.

    Suppose tumhare project and code mein file and dependencies bhi ho skti hai and Bundler in sab relationships ko samajhta hai aur build process ke through required code ko bundle/transform/optimize karta hai.

🔥 Popular bundlers :- 

    You'll hear these names a lot:

    Webpack
    Parcel
    Rollup
    esbuild
    Turbopack

    "Vite" itself is not exactly a bundler. "Vite" is a development/build tool that uses tools such as esbuild and Rollup (with newer versions also using Rolldown in parts of its architecture) under the hood.


# About dependecies

-> there are two types of dependencies :- 
        1. dev dependencies -> so it is only required when our projects is in development phase.

        2. normal dependencies -> But this requires in production also.

-> so "parcel" is installed in our project, and after it if you want to confirm then in package.json you will se like this :-

            "devDependencies": {
            "parcel": "^2.16.4"
        } 

    -> so 2.16.4 is version and "^" this is a caret sign, so in the future if any minor upgrade comes then by the help of caret parcel will automatically upgrade it's version.

        2.16.4 -> 3.16.4 (so it will be a major upgrade), but

        2.16.4 -> 2.16.5 (then it will be a minor upgrade)

    -> and sometime you also have seen like this  "parcel": "~2.16.4", so here this "~" tilde sign will automatically upgrade the major version.

# Difference between package.json and package-lock.json ?

    -> package.json :- so it is configuration for npm, as we already know. So it keeps a track of approx what version of that package is installed on our system.

    -> package-lock.json :- it keep track of all the exact version of all the dependencies and transitive dependencies.

    Q- search abput difference between package.json and package-lock.json on chatgpt on your own.

    -> under parcel in package-lock.json you will see "integrity", which basically take a hash of all the version and dependencies on our system. by which when this code will goes into production then if any version will changed then it will detect these things.

        so the more corrected form of upper

    -> In package-lock.json mein "integrity" field ek cryptographic hash hota hai jo package ke content ka hota hai. Iska use is baat ko verify karne ke liye kiya jata hai ki installation ke time jo package download hua hai, woh corrupt ya unexpectedly modify nahi hua hai. package-lock.json exact dependency versions ko bhi record karta hai, jisse different environments mein consistent installations ensure hoti hain.

    -> now here when you install parcel then you will see @node_modules in you folder so, bascially it is like a database, it contains all the data of the dependencies/packages.

    

 #   Transitive dependencies :-

    ### Transitive Dependency

    A transitive dependency is a dependency that your project gets indirectly through another dependency.

    For example, suppose your project uses Package A:
    
    Your Project
        ↓
    Package A
   

    Package A itself needs Package B to work:

    Your Project
        ↓
    Package A
        ↓
    Package B

    You installed Package A, but you did not install Package B yourself. Package A needs B, so B is automatically installed as well.

    Here:

    Package A → Direct dependency
    Package B → Transitive dependency

    There can also be multiple levels:

    Your Project
        ↓
    Package A
        ↓
    Package B
        ↓
    Package C

    In this case, A is your direct dependency, while B and C are transitive dependencies.

    In simple words:
    A transitive dependency is a package that your project uses because another package depends on it.

# Note :-
    
    -> you don't have to push "node_modules" in git, so put this into ".gitignore" file. But but you should have to push package.json and package_lock.json in your git. 
    
    -> so if you have package.json and package_lock.json in your git then by the help of this it will recreate all the "node_modules" on it's own.

    -> so whatever you can regenerate don't put this on git. for example :- if i delete my "node_modules" from that folder, then there is my package.json and package_lock.json in my folder and by which i can simply install all that "node_modules" stuff again by simply type "npm install" in my terminal, that's it. 

    -> only put essential things on git.

#so just like we have npm same as this we have npx.

-> npm - in uses to install the packages in our system.
-> npx- it uses to execute that package.

    -> cdn links is not the good way to import react in our code 

-> HMR = Hot module replacement
    and this HMR is done by file watching algorithm which is written in C++.


    ==> Read parcel documentation.

### Parcel features:

- Dev Build - parcel provides us develop build
- Local Server - parcel also provides us a local server, which can be used to see live changes in our application.
- HMR = Hot Module Replacement - exchanges, adds, or removes modules while an application is running, without a full reload

and some of more cool features of Parcel are:

- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Build for dev and prod bundles


## Q: What is `browserlists`?

A: Browserslist defines and shares the list of target browsers between various frontend build tools.
