# Project Nutrition

A app that shows allergens and nutrients in a food product using React and Redux. Either scan with a camera or write it manually to show result 🍳🌱🔦🙋‍♀️

## Code
I've used:
  * **JSX**
  * **React.js**
  * **Redux**
  * **API**
  * **CSS**
  * **Pair-programming**

## The problem
Using the API from the Open food facts to get information about products via barcode. Built a reducer with Redux also containing a thunk with the fetch to get the info on dispatch. The input could either be written by hand on scanned through a camera using Quagga.js.
The biggest problems were to find consistent result from the json since different products contained different results to read from. The bumps were few and we overcame and worked through all of them. A lot of conditional rendering since some products might not trigger allergens and also to navigate a bit if you wanted to scan a new product etc. 
Happy about the result and it sure does fulfill its functionality!


## View it live

Deployed site: https://barcode-scanner-bealun.netlify.app 
