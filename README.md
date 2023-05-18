# React-props

## Objectives:

- Pass, access, and display props.
- Utilize props to create conditional statements.
- Define event handlers in a component and pass them to other components.
- Work with a component's children.
- Set default values for props.

## Intro:

In a React application, components act as small building blocks that come together to form the user interface.

Each component has a specific role in the interface, and there are times when components need to communicate with each other.

In this lesson, we will explore another way for components to interact: passing information from one component to another.

This information passed from one component to another is known as props.

Props allow us to customize the output of each component based on the information that is passed in.

By enabling components to communicate and share data through props, we can introduce a higher level of flexibility that was not possible before.

Let's dive in and get started with props!


![nested componenets](https://phil.jost.rocks/images/react-state1.png)

![props data flow](https://phil.jost.rocks/images/react-state2.png)


## Accessing a Component's Props

Every component in React has something called props.

Props for a component is an object that holds information specific to that component.

You might have encountered props before without realizing it! Let's take a look at the HTML `<button>` tag. We can pass various pieces of information to the button tag, such as the button type.

```html
<button type="submit" value="Submit">Submit</button>
```

In this example, we have passed two pieces of information to the button tag: a type and a value. Depending on the type attribute we give to the `<button>` element, it will behave differently within a form. Similarly, we can pass information to our own components to specify their behavior!

Props serve the same purpose for components as arguments do for functions.

To access a component's props object, you can refer to the props object using dot notation for its properties. Here's an example:

```jsx
props.name
```

This will retrieve the `name` property from the props object.

### Exercise

* In [`PropsDisplayer.js`](./src/components/PropsDisplayer.js), we have a component called `PropsDisplayer` that receives `props` as a parameter. Inside the function body, we define a `stringProps` variable that holds the string representation of the `props` object.

To display the `stringProps` on the screen, inject it between the `<h2></h2>` tags.

* In `App.js`, we import the `PropsDisplayer` component. Render it within the `App` component's return statement.

When you run the code, you might see an empty object displayed. This is because the `props` object may have properties that are not detected by `JSON.stringify()`. Even if you could see those properties, the `props` object doesn't have much to show at this point.

Let's continue and see what else we need to do.

## Passing `props` to a Component

To utilize props, we need to pass information to a React component. In the previous exercise, we rendered an empty props object because no props were passed to our `PropsDisplayer` component.

So how do we pass props? By providing the component with an attribute:

```jsx
<Greeting name="Jamel" />
```

Let's say you want to pass the message "We're great!" to a component. Here's how you can do it:

```jsx
<SloganDisplay message="We're great!" />
```

As you can see, when passing information to a component, you need to assign a name to the information you want to pass. In the example above, we used the name `message`. You can choose any name you prefer.

If you want to pass information that isn't a string, you can wrap it in curly braces. Here's an example of passing an array:

```jsx
<Greeting myInfo={["Astronaut", "Narek", "43"]} />
```

In the next example, we pass multiple pieces of information to the `<Greeting />` component. Values that are not strings are enclosed in curly braces:

```jsx
<Greeting name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />
```

Remember, props allow us to pass information and customize the behavior of our components.

### Exercise

In the `App` top-level component, find the line where we call the `PropsDisplayer` component. Modify this line by passing a prop named `myProp` with the string value `"Hello"`.

By passing the `myProp` prop with the value of `"Hello"`, we are providing the `PropsDisplayer` component with a prop that it can access and display.

Save your changes to rerender your app in the browser.


## Rendering a Component's Props

Props allow us to customize a component by passing it information.

To ensure that a function component can use the props object, define your function component with `props` as the parameter:

```jsx
function Button(props) {
  return <button>{props.displayText}</button>;
}
```

In the above example, `props` is accepted as a parameter, and the values from the props object are accessed using dot notation (e.g., `props.displayText`).

Alternatively, since `props` is an object, you can use destructuring syntax to directly extract the specific prop values you need:

```jsx
function Button({ displayText }) {
  return <button>{displayText}</button>;
}
```

Using destructuring, you can directly access the `displayText` prop without explicitly referencing `props.displayText`.

Both approaches are valid and achieve the same result. Choose the one that feels more convenient for your use case.

### Exercise

* In `Product.js`, modify the `Product` component to accept `props` in the function definition. 

* Within the component, use the dot notation to access the specific prop values and inject them into the appropriate elements.

- Inject `props.name` into the `<h1></h1>` tag to display the name of the product.
- Inject `props.price` into the `<h2></h2>` tag to display the price of the product.
- Inject `props.rating` into the `<h3></h3>` tags to display the rating of the product.

* In `App.js`, the `Product` component is called with three pieces of information: `name`, `price`, and `rating`. The values are passed as props to the `Product` component.
To test the code, you can tweak the values of `name`, `price`, and `rating` in `App.js`. When you run the code, the browser will refresh and display the updated information about the product on the screen.

## Passing Props from Component to Component

In React, props are commonly used to pass information from a parent component to a child component. Props travel in a one-way direction, from the top (parent) component to the bottom (child) component.

![react data flow](https://cdn1.scalablepath.com/_next/image?url=https%3A%2F%2Fcdn-blog.scalablepath.com%2Fuploads%2F2022%2F08%2Fjavascript-framework-data-pass-components-1.webp&w=1200&q=75)


You already have experoence with passing props from a parent component (`App`) to a child component (`Product`):

```jsx
function App() {
  return <Product name="Apple Watch" price={399} rating="4.5/5.0" />;
}
```

In this example, `App` is the parent component, and `Product` is the child component. The `name`, `price`, and `rating` props are passed from `App` to `Product`.

Inside the child component (`Product`), you can access and display the passed-in props using `props.propertyName`. For example:

```jsx
function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h3>{props.rating}</h3>
    </div>
  );
}
```

In the `Product` component, the values of `name`, `price`, and `rating` are accessed from `props` using dot notation (`props.name`, `props.price`, `props.rating`), and then they are displayed in the appropriate elements.

It's important to note that props passed to a component are immutable, meaning they cannot be changed within the component itself. If a component needs new values for its props, it should rely on the parent component to pass updated props.

By passing props from component to component, you can effectively share information and customize the behavior and rendering of child components based on the provided data.

### Group Activity

Pass the props `songName`, and `artist` to the `Player` component from the `App` component.

*[Need help?](./hints/player.md)


