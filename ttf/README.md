This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Front Start

To start front:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Server Start
To start server :
```bash
npm run mock

```

## Tools
1) The application was created using NextJS + Typescript.
2) For state management used Redux.
3) JSON-Server is used to store data.
4) nextjs-progressbar is used for visualization of loading progress.
5) The application is responsive.

## Process
1) I didn't create a pixel-perfect app, but I tried to make the app look like a picture.
2) I have created a responsive application. It works well up to a screen resolution of 320 pixels.
3) For style writing I used Styled components + SCSS.

## Solutions
1) After creating the application, a page opens with a button that leads to the filter page.
2) On the filter page, all elements are interactive, except for the rows with products. From the requirements, there is no understanding of whether this is necessary.
3) First, a page opens with the "Walzstahl" tab active. The "Alle produkten" block displays all products with the "Walzstahl" parameter. These products are filtered from the database by a query parameter.
Above the block "Alle produkten" there is a block for filtered products. Initially, if no filtering options are selected, it is empty.
4) A filter is opened to filter products. When you click on the required cell, the products are filtered by the selected parameter. Redax is used to store the filter parameters. In the React component, to track changes in filter data and product data, the useEffect hook is used, which is triggered only when these data change.
5) Filter parameters can be reset by clicking on the cross under the filter table.
Additionally, I implemented the ability to cancel pressing the filter parameter by clicking on the required cell again.

