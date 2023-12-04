# Eulerity Hackathon by Daniel Wong

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Make sure you cd into the my-app directory:

### `npm install`

Installs all required packages listed in package.json.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Features/Requirements and Thought Process

1. "Display a list of images. Make a GET request to /pets to retrieve a JSON array of JSON objects that represent pet objects. These JSON objects will include properties like an image URL, title, description, entity creation date. You need to present these images and associated data in a compelling and interactive way. Use fetch for fetching data."

After reviewing the requirements of this project, it immediately reminded me of a stock image site like Getty Images. My approach was to use useEffect to run a fetch request on mount and to useState to store the array. I ended up making this into a custom hook, useFetchPets. I then stored the array of pets into a useContext hook so that all my components had access to it.

2. "Allow the user to select several images and download them."

After researching different ways to download images, I decided on using a Blob type approach. I first fetched the pet's url and created a blob type out of it. I then appended an invisible anchor tag with the href pointing to the blob url and invoking a click event. Lastly, I cleaned up by removing the appended anchor and the blob url.

3. "Ability to: Select All, Clear Selection"

I approached this by creating a new context that held the selected pets in an array. I also created functions that would change the state of the selected pets (addPet, removePet, selectAllPets, clearAllPets). When the select all or clear selection buttons are clicked, it would invoke these methods.

4. "Ability to: Sort by Name A-Z, Sort by Name Z-A"

In an attempt to optmize performance, I sorted the pets alphabetically by title right after the fetch so that the default state is a Sort by A-Z. When the user clicks on Sort by Z-A, I simply reversed the pets to prevent another O(n log(n)) calculation. Ideally, the API would have an endpoint that would query by DESC vs ASC to enhance the frontend performance.

5. "Searchbar to filter displayed images by title or description"

At first, I created a searchbar that would exactly match the keyword against the title or description. However, I wanted to create a fuzzy match because I was only given a small dataset of pets. I utilized the fuse.js library and set a threshold of how loosely the search term would match. I also created a new context for my search results.

6. "Use of styled-components for the UI"

I enjoyed using this library for the first time. I allowed me to tie in some logic with my styling.

7. "Use of react-router-dom - add additional About Me page or any other page you think would be relevant"

I followed the suggested use case and created a route for my /about page. As for the /pets/:petid route, it was extra difficult because the pet objects did not have a UUID to work with. I tried working around this by using the uuid library to map the pet array and giving each pet object their own uuid. But the issue was that once you clicked on a pet card and it took you to /pets/:petid, it would render correctly until you refreshed the page. When refreshing, a new uuid would be assigned and result in a 404 page. A possible work around was storing these uuid's in the local storage, but this would not be practical in a real-life application with larger data sets. I had no choice but to change my route to /:petTitle. The issue would be when there were duplicate titles, then only the first matching petTitle would render.

8. "Create a Custom Hook for Loading and Managing Data"

As stated above, I created a useFetchPets custom hook to handle the fetch and to decouple it from my component code, making it much easier to read.

9. "Manage Global and Local State Effectively (can use context, redux, hooks, etc)"

I chose not to use Redux because of its inheritly large code overhead. I figured I'd only need about 1 - 2 contexts for this small application. If I had to work with more than just pets data, I would've opted for Redux.

## Libraries Used

- uuid : https://www.npmjs.com/package/uuid
- styled-components : https://styled-components.com/
- react-router-dom : https://reactrouter.com/en/main
- fuse.js : https://www.fusejs.io/
