1 - yarn/npm init

2 - yarn add typescript -D / npm i typescript -D

3 - npx tsc --init to initialize the typescript configuration file.
4 - In tsconfig.json file remove comment from outDir (outDir: ./dist) and give a location to where this code will be translated to the javascript
5 - give target javascript to which typescript will be converted (es5, es6 ... )
6 - uncomment moduleResolution: node 

7 - below compilerOptions write
 "exclude": [
     "node_modules"
 ]

below is optional to include some individual files 

"include" : [
    "src", //directory
//files which can be outside of that src directory
    "app.ts",
    "server.ts"
]

8 -  Now check your settings by writing in ther terminal of the project directory
        
        npx tsc

    this will compile all the typescript files to the targeted javascript in a outDir directory.

9 - install nodemon (yarn add nodemon -D / npm i nodemon -D) to avoid starting server again and again by doing some changes . it will start the server automatically

10 -  install ts-node (yarn add ts-node -D / npm i ts-node -D) to run the typescript files with this module with nodemon and compile it with typescript

11 - nodemon configuration
    => create a nodemon.json file
    => write the following code in it
    {
        //directories to watch file changes in it
        "watch" : ["src"],
        // file extenstion to watch changes for ("ext": "ts,js,hbs,pug,ejs") etc
        "ext" : "ts",
        //exclude directory to watch changes for
        "exclude":[
            "node_modules"
        ],
        // execute the npm script on every change in specified files
        // ts-node for typescript files , babel for javascript files if setting was for babel
        "exec": "ts-node" // "exec" : "cmd-env ./config/.env  ts-node"
        in exec script
            cmd-env development dependency is used to set the environment variables which is define in config folder of .env file
    }

12 -  for scripts objects in package.json
        "scripts": {
            "build": "tsc",
            "start": "tsc && node ./dist/server.js",

            "clean": "rimraf ./dist",
            "dev": "nodemon ./src/server.ts"
        }

        
            

13 - to copy public and views directory also install ncp(package -D) or npx(pacakge -D)(for files ex.. (cpx "src/**/*.{html,png,jpg}" ./dist)) and write script in package.json file
{
            "start": "tsc && node ./dist/server.js",
            "public:copy": "ncp ./src/public/  ./dist/public/",
            "views:copy": "ncp ./src/views/  ./dist/views/",
            "clean": "rimraf ./dist",
            //For development
    "build:dev": "yarn run clean && tsc && yarn run public:copy && yarn run views:copy",
    "build": "yarn public:copy && yarn views:copy",

            "dev": "nodemon ./src/server.ts"
}

14 - in production set the environment variables which are defined in .env file