## Tools
1) The application was created using NextJS + Typescript. 

I hadn't worked with next.js before, so I was interested to try and figure it out. I have been working with typescript for the last year on almost all projects. I'm used to it, it avoids most errors and gives additional hints when writing code.

2) For state management used Redux.

I've been working with redux and decided to use it to be able to access state from different components.
Considering the scale and the implemented architecture of the task, I implemented the synchronous work of the redux without additional handlers.

3) JSON-Server is used to store data.

To implement imitation of requests to the server, I used a solution with a JSON-Server, since the task was more on the frontend and this was the simplest solution

4) nextjs-progressbar is used for visualization of loading progress.

To visualize the loading process, I used a ready-made solution from nextjs-progressbar.

5) The application is responsive.

It works well up to a screen resolution of 320 pixels.
Responsiveness of the application was tested in Google Chrome browser Version 102.0.5005.115 (64-bit) up to a screen resolution of 320 pixels (Device-type == mobile)
I didn't create a pixel-perfect app, but I tried to make the app look like a picture.
For style writing, I used Styled components + SCSS.

6) Semantic layout
When laying out the application, semantic tags were used: header, main, button, and h1 (for the main title).

7) The application is built as a SPA.


## Application operation and applied solutions
1) After creating the application, a page opens with a button that leads to the filter page.
2) On the filter page, all elements are interactive, except for the rows with products. From the requirements, there is no understanding of whether this is necessary. All clickable elements are implemented like buttons.
3) First, a page opens with the "Walzstahl" tab active. The "Alle produkten" block displays all products with the "Walzstahl" parameter. These products are filtered from the database by a query parameter.
When you click on the "Blankstahl" tab, you go to another page where products are filtered from the database by the "Blankstahl" parameter.
Above the block "Alle produkten" there is a block for filtered products. Initially, if no filtering options are selected, it is empty.
4) A filter is opened to filter products. When you click on the required cell, the products are filtered by the selected parameter. Redax is used to store the filter parameters. In the React component, to track changes in filter data and product data, the useEffect hook is used, which is triggered only when these data change.
5) Filter parameters can be reset by clicking on the cross under the filter table.
Additionally, I implemented the ability to cancel pressing the filter parameter by clicking on the required cell again.
6) All elements for setting/resetting filter parameters, all tabs are implemented as buttons
