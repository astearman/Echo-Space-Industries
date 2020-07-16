## Andy Stearman's Front End Development Website Project
### My website is for the space charter company, Echo.

---

**Feature Project Requirements On My Site:**
  
  **1. A navigation menu that collapses into a responsive mobile-friendly menu (such as a “hamburger” menu)**
  
Responsive mobile-friendly hamburger menu that appears when screen size is less than 769px.
  
  **2. Use Flexbox or CSS Grid to rearrange 2 or more content areas on your page as the screen changes sizes** 
  
I used flexbox on most of the site. There are multiple instances of rearranging rows/columns and images.
  
  **3. Use media queries to switch from a one-column mobile layout to a two or more column desktop layout** 

Used media queries to switch layout as screen size shrinks/expands. Mainly used min-width:769px and min-width:1030px with a few extra media queries thrown in that were only used for special cases.
     
  **4. Create a JavaScript function whose return value is used in your site. The function must be triggered by user action (ex: clicking a button).** 
  **5. Use JavaScript to perform math operations and display the result on your site** 
  
There is a trip price calculator Javascript function under the button "more info on pricing" in the pricing section. There are a few different fields and options to chose from. By selecting some options and clicking the "calculate" button, you will be shown your total price.

I think this function would count for two requirements (as listed above).

   **6. Create and populate a JavaScript array, then retrieve and display one or more values from it** 

There is an array under the "learn more" button in the about section. I listed all the adjectives in the array and then used 'pop' to drop the last adjective out. Then I called back the popped adjective and listed it on its own.
     
   **7. Create an image carousel with at least 3 images that it rotates through** 

At the top of the page is an image carousel. When you click the 'next' and 'previous' buttons it jumps between 5 different images. It does this by applying the class ".current" to each image. The images are all set to an opacity of 0 and when the 'next' or 'previous' button is clicked, it applies the class ".current", which changes the opacity to 1.


**Special Notes:**

I used 4 graphics from font awesome - the left/right buttons in the carousel as well as the mail and phone icons at the bottom of the page. I included this in the head tag to link them:

     <script src="https://kit.fontawesome.com/968f9825cc.js" crossorigin="anonymous"></script>

I don't believe there will be any issues viewing the icons but just wanted to make note of it.
