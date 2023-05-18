Follow the steps to successfuly render the `Player` component in `App.js`

1. In the `Player.js` file, make sure that the `Player` component is defined with `props` as a parameter:



2. Display the name of the song passed via props by injecting the `songName` prop value between the `<h1></h1>` tags:



3. Display the name of the artist passed via props by injecting the `artist` prop value between the `<h2></h2>` tags:

 

4. Export the `Player` component at the end of the `Player.js` file:



5. In the `App.js` file, import the `Player` component at the top:

 

6. Inside the `App` component, call the `Player` component and pass the `songName` and `artist` props with their respective values:



By following these steps, you will successfully pass the `songName` and `artist` props from the `App` component to the `Player` component. The `Player` component will then render the song name and artist name based on the passed props.
