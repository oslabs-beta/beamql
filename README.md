# BeamQL
Seamlessly visualize your PostgreSQL database and transform your REST API into GraphQL in less than 15 minutes.
Live demo, docs, and more info [_here_](https://www.beamql.com). 

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Usage](#usage)
* [To Do](#to-do)
* [Acknowledgements](#acknowledgements)
* [Contributors](#contact)



## General Information
- BeamQL is on a mission to improve developers' workflow by helping them visualize their databases and transform their REST APIs to GraphQL.



## Technologies Used
- React.js (React Hooks) - v17.0.2
- React-flow-renderer - v5.2.0
- Node.js - v14.17.6
- Express - v4.17.1
- jest - v27.1.0
- supertest - v6.1.6
- Docker
- AWS
- Travis.ci



## Features
- Visualize user's PostgreSQL database by instantly creating an entity relationship diagram
- Generate GraphQL complete type schema
- Create GraphQL all resolvers


## Screenshots
![Example screenshot](./assets/getstarted.gif)
<!-- If you have screenshots you'd like to share, include them here. -->



## Usage
1. Copy your PostgreSQL database URI into [beamql.com](www.beamql.com).
2. View and interact with the graphical visualization of the database and use it in API documentation to give users a better understanding of what they are working with.
3. Open NodeJS backend codebase in a code editor.
4. Use the schema and resolvers that BeamQL produces with [Apollo Server](https://www.npmjs.com/package/apollo-server-express) or a similar GraphQL server that suits your Node.js server.
5. Start server and navigate to localhost:X000/graphql
6. Behold the glory of your database accessible through the query language of the future!


## To Do
- Migrate codebase to TypeScript!
- Add support for every single SQL data type, options for custom types in GraphQL
- Integrate [GraphiQL](https://github.com/graphql/graphiql) so users can test their endpoints with the generated schema and resolvers


## Acknowledgements
- Many thanks to the tech accelerator [Open Source Labs](https://opensourcelabs.io/) for their continued support and sponsorship throughout this whole process.

## Contributors
- [Brian Grosso](https://github.com/modelB) | [LinkedIn](https://www.linkedin.com/in/newarkbg/)
- [Eric Askew](https://github.com/moonwalker5823) | [LinkedIn](https://www.linkedin.com/in/eric-askew-8a91714a/)
- [Adam Goodman](https://github.com/AdamrG1) | [LinkedIn](https://www.linkedin.com/in/adam-goodman1/)
- [Mark Liu](https://github.com/markyliu) | [LinkedIn](https://www.linkedin.com/in/markyliu1/)

