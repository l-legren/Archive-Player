# Player Archive

## What's this?

This project is a search tool for football players  made for browser and mobile application.

The project is built with React, a widely used JavaScript framework for building user interfaces from small and isolated pieces of code called components. 

In this case, I used React 17, a version of React that enables the use of React Hooks and functional components instead of class components. Hooks enhances the readability and reusability of code as well as simplifies lifecycles methods of the virtual DOM.  

There is no need to backend here, so I decided to build the website as a Single Page Application with create-react-app. Since the project should be written in Typescript it was built with the Typescript template of CRA. There was no need of navigation in this case. Just one screen that depending the results of que query to the API will render different components.

Passing props between components in this case is also pretty cheap, consisting only on one level of depth. There is no need of using any state management tool like Redux or React Context. The props are passed directly from Parent Component to Child Component.

In order to make React components more readable and better structured I decided to implement styled components. Every component has its own folder inside src/components and styles files are separated from the file of the functional commponent.

As already mentiones the application is completely responsive so it can be used from a small screen or a mobile phone.

TESTINGG

## Technologies I used

- HTML5, CSS3
- Typescript
- Jest, React Testing Library
- React.js
- styled-components

## Set Up

To make it run just clone the repository, install all the dependencies with ```npm install```. You just need to run the server and the client in you local directory with the command ```npm start```.

## Screenshots

### Screen 1

![Screen 1]()

### Screen 2

![Screen 2]()
