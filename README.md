# Fix the error with React Material UI when being used with Webpack create the Invalid hook call in the browser

## Problem 
- when using Webpack to pack a project with Material UI, the bundle file shows the error in the browser about Invalid hook call 
- version of React in browser and in Node JS not matching 

## Solution 
- Brief video: https://www.youtube.com/watch?v=r03i-nRd4nM
- In the webpack.config.js file, modify or add the external section to have react and react-dom inside the rules section
```
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
```

## Step to generate the error 
- cd inside the project and run npm install 
- run npm start or npm build to see the working solution with a simple button taking from the Button component from Material UI when openning in the index.html file to see a simple button showing on the page  
- to make the error, go to webpack.config.js and comment out the external part in the rules section then run npm start or npm run-script build again. There will be no button showing on the page but the error will be shown in the console 
- when it is error, you go to the file src/index.js and verify it is using the Button Component from Material UI 
- as a quick test, simply comment out the export window.SimpleButton = Button and uncomment the window.SimpleButton = SimpleButton
	```
	window.SimpleButton = SimpleButton; 
	// window.SimpleButton = Button; 
	```
	- window.SimpleButton is the export for the button to be used in the index.html file 
	- Button is the Material UI button get imported from the library 
	- SimmpleButton class is just a simple React class with a render of a button which is writen in the index.js file 
- run npm start or npm build again to restart the bundle 
- reload the index.html file and the error will disappear and a button will be shown 
