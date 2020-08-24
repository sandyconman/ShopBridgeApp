


<!-- PROJECT Name -->
<br />
<p align="center">
   <h3 align="center">ShopBridge App</h3>

  <p align="center">
    A ASP.NET Core web api and Angular based Inventory app to show my technical skills for ThinkBridge assessment
    <br />
    <a href="https://github.com/sandyconman/InventoryApp"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Tracking](#tracking)
* [Known Issues](#issues)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

This project is solely made for assessmentof ThinkBridge. I tried to include everything that can be considered as a plus point in evaluation. In addition to completing the functionality requirements, I have spent a significant time to employ best practices in this project. I have adhered to SOLID principles and since ASP.NET Core allows a great service-based architecture, I used it to employ a lot of techniques in building this project. The frontend of this project is made in Angular which provides a wonderful SPA architecture to build apps. The app is production ready.
This app also uses SQLite which is a light weight database and can ve chnaged to MySQl or Sql Server, since it ustilized CodeFirst technique of Entity Framework. We just need to change connection string, install a package (eg : Microsoft.EntityFrameworkCore.SqlServer) and run migrations.

Here are the techniques used in this app:
* Dependency Injection
* Multithreading operations using async/await
* Repository pattern
* Global Exception Handling (In Startup class)
* CodeFirst technique of EF

Of Course, a project is never ever complete. There are always ways to improvement. This is the first thing we understand by AGILE approach. However. I tried to do everything mentioned in the requirements given. I apologize if I missed something.

A list of resources that I utilized are listed in the acknowledgements.

### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [ASP.NET Core v-3.0](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.1)
* [Enity Framework](https://docs.microsoft.com/en-us/ef/)
* [Angular 9](https://angular.io)
* [SQLite](https://www.sqlite.org/index.html)
* [Bootstrap](https://getbootstrap.com)
* [Alertify JS](https://alertifyjs.com/)

<!-- GETTING STARTED -->
## Getting Started

In this repository, I have included all the files of Frontend and Backend applications in different sections. The section named 'InventoryApp.API' is comlete in itself. It has wwwroot section in it. Since, it is not being uploaded to the deployment server, I am including all files to test the application.

### Prerequisites

* download [.NET CORE CLI](https://dotnet.microsoft.com/download)

* npm
```sh
npm install npm@latest -g
```
or download [node.js](https://nodejs.org/en/)

* angular cli (use for frontend evaluation purpose only. Not required to run the application)
```sh
npm install -g @angular/cli
```


### Installation

1. Clone the repo
```sh
git clone https://github.com/sandyconman/InventoryApp.git
```
2. Navigate to InventoryApp.SPA directory and Install NPM packages (not required for running of application. Just for testing Frontend.)
```sh
npm install
```
3. Navigate to the InventoryApp.API directory and run command
```JS
dotnet run
```
4. Visit url 'http://localhost:5000/' to see the application running. Add items through inventory form and view the list below.


<!-- tracking -->
## Tracking
Total Time taken to create this application is 3 days. (Note: I was not continously creating the application. I am working as a developer in a company.)
Creating Backend: Roughly 12 hours. Work included
* FileHelper to upload photo. Photos are uploaded in database is file size is less than 2 mb while put in a content directory on server if the file size is larger. 
* DbContext
* Repository to query database. (Created interface and concrete implementation of repository and apssed the inventory as service container in the controller)
* API controller to serve requests
* Exception handler
* Fallback Controller

Creating Frontend: Roughly 2 days. It took me more time to work on front end - especially on designing and css. Work included
* Angular Routing
* Angular service to query api
* Components (of course :smile:)
* File uploader interface and Dom Sanitizer to convert 'byte[]' to eye friendly images.
* Template Form (to add new item)
* Alerify Js (as notification service and confirm box)

Fronted Presentation. Slyling and animation took a significant amount of time in frontend creation. Work Included
* Bootstrap installation
* font awesome installation
* Bootstrap card
* Bootstrap containers and panels

Backend-Frontend Integration: Roughly 6 hours. I was stuck at a point where photo needs to be passed to the API. After a while I decided to pass it as form data. Otherwise creating angular services and Backend api annotations was fairly simple and quick. Work included
* Add item MVC action with photo uploader.
* Angular itemservice

Unit Test coverage: Roughly 2 hours. I tested the API's using POSTMAN to check for anomalies.


<!-- KNOWN ISSUES -->
## Issues

There are some issues which are known to me:

* Project created on VS Code instead of Visual Studio, so .sln file is not present. 

* Use of SQLite. This is a developer friendly file based relational database provider. I am aware of the issues in production environment due to file nature. But I assure you that it is simple to migrate this project to MySQL or SQLServer anytime since it utilizes Codefirst technique of Entity Framework. SQLite is used to make it simpler for development and evalution. You won't require to change any connection string or install any database provider. Simply run and use.

* It's not release build. Release build is fairly simple to make using 'dotnet build' command in CLI.

* Project Name is InventoryApp instead of ShopBridge.


<!-- CONTACT -->
## Contact

Sandeep Kumar- [LinkedIn](https://www.linkedin.com/in/sandeep-kumar-mishra-100295/)-sandeep10.95mishra@gmail.com

Project Link: [https://github.com/sandyconman/InventoryApp](https://github.com/sandyconman/InventoryApp)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [ASP.NET Core v-3.0](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.1)
* [Enity Framework](https://docs.microsoft.com/en-us/ef/)
* [Angular 9](https://angular.io)
* [SQLite](https://www.sqlite.org/index.html)
* [Bootstrap](https://getbootstrap.com)
* [Alertify JS](https://alertifyjs.com/)
* [Font Awesome](https://fontawesome.com)

