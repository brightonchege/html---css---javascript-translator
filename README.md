# html-css-and-js-translator by Brighton Chege
Today we will be creatimg a translator using : javascript , html , css and a public api
to get started create a repository then clone it into your computer 


# Step 2

open the repository in your code editor and create the folling files:
      index.html
      index.css
      index.js
Once that has been completed got into your basic stater code for a html document


# STEP 3

create a container for the translator in which all the features will be held 
give the elements your desired class and id names and once you are done you can style them 
so that we can now start our proect offically
  
note your container should be organised so that you do not loose track of your selectors
  
       You can get this code from my    index .js file

# step 4
 After that you should style your html
 you can copy the css code from my     index.css file
 
 # step 5
   Now you translator has taken shape but it does not work when you put in the text.
   The question is how do we make it work ?
     
     Now we need to select all the odjects we need so that we can better manipulate the page 
     for example 
     "
         const output = document.getElementById('output-container')
         const transbutton = document.getElementById('translate')
         const delbutton = document.getElementById('delete-text')
         const select = document.getElementById('languages')
   "
   # step 6
   Now we need to get the value inside the textarea you created 
   example 
      "
        const input = document.getElementById('input').value
        const inputcode = document.getElementById('input-code').value
      "
# step 7  making use of an api
   we have now selected all the objects and value we need now we need to get data from a database so that we can display it on our translator

 This is where we need to  make use of an api. Hopefully you now how  to use the fetch() method. We need to find the perfect api which will give us what we need .
 You can use any api you wish but as for me i used the traslef translator from rapidapi.com.
  Here is the link "https://rapidapi.com/mandus1995/api/translef-translator/"

After all that has been completed you now need to create the functions which will make the  translator work.


 if you have any trouble creating the functions refer to my index,js file 

# step 8 

Now if you have completed all the steps above you should have a working translator
# note if you use my code directly your translator won`t work because my code has no api key insert your key and it will work
