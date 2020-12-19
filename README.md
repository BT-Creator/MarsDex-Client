# MarsDex Client Repository (MD-CR)
Welcome to the Client Repository of the MarsDex. This README.md file will instruct you to run a local version of the MarsDex Client.

|Version|Maintenance|
|---|---|
|[![Generic badge](https://img.shields.io/badge/Version-Live-blue.svg)](https://shields.io/)|![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)|

## Index
* [Server](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/server)
* [Client](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/client)
* [Documentation](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/documentation)
## Features
At the time of writing (19/12/20), the following features are implemented:
### Martian
- Listing of all colonies  *(Includes searching & sorting)*
- View details of a colony
- Open a map with 
    - Transport Lines
    - Locations pulled from the database
    - Popup that links to the detail page
- Accessing a contact page
- Viewing more information about our company.
### Company
***Note:** We received a suggestion to lower the priority of the login & register mechanism. While there is a register page & login page, if you try to register/login, you'll be authenticated as MaMiCo automatically.*

Including all the features above, the following functions have been implemented:
- Viewing the resources of your home colony *(Includes searching & sorting)*
- Viewing the resources of your company *(Includes searching & sorting)*
- Adding a new resource
- Editing a new resource
- Deleting a resource
- Accessing an overview of your company

### Bonus features
In addition to these features, the following bonus features were also implemented:
- Geolocation ("You are here" marker on the global map)
- CSS animations (Found throughout the project)
- Service Worker ([`sw.js`](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/client/-/blob/master/src/sw.js), you'll also find that it's registered in your dev tools)
- Push Notifications (This triggers if a resource is lower than 500 KG, a push notification will send to the server)

  ***Note:** If run locally, you'll find that the database does not include an item below 500 KG. If you want to activate a push notification, you can lower the weight of an item to a number below 500 KG to active the push notification.*

## Bugs
### Global map
- If a marker's popup is opened, but the user opens another maker without closing the first one, the link to go to the details of a colony, doesn't work anymore.
  This is because Leaflet doesn't have any way to detect if a pop has been closed **implicit** (e.g. The pop-up is closed because another one was selected). The popup needs to be closed explicit *(With the **X** of the popup)*.
  
  The workaround is to close the original popup that has been closed explicit or to close the new pop-up that has been opened explicit. 
### Resources
- When adding a new resource, we'll add a placeholder picture as photo. We use a XMLHttpRequest(), but this is depreciated. In a more fully fleshed out concept, we'll replace this with an actual link that references a storage location where all the photos are saved.  

## Setup Guide
### Local deployment
#### 1. Configuring the server
See the [Server Startup Guide](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/server#how-to-start)
#### 2. Configuring the web client
1. Clone the client repository to your machine
2. Open the Client Repository in your IDE of choice. This is a plain HTML/CSS/JS application (for the time being)
3. In the `src` directory, add a JSON file and call it `config.json`. This file should be filled with the following code:
```json
{
  "host": "http://localhost:8080",
  "folder": "",
  "group": ""
}
```
4. Using your IDE, open the `index.html` section.
5. Make sure that you allow notifications for the website. You can allow notifications by changing this in the settings in the browser *(Some of them will show you a pop-up for allowing notifications. If not, you can change it by clicking on the padlock & changing the setting)*
6. Reload the page again to make sure you receive your push id.

***Note:** Some IDE's (Like VSCode), will open the HTML itself in the browser, instead of simulating a webserver environment (Like IntelliJ/PHPStorm). This causes some weird behavior, so we suggest using PHPStorm/IntelliJ to inspect the project.*
### Offsite deployment
If you want, you can also visit the [version](https://project-ii.ti.howest.be/mars-23/) that is running on Howest's servers, which is fully working and identical to the one on this repo.

## User Flow
Depending on which actions you want to do, you'll need to do additional actions. You can find a link to a simplified user flow 
[here](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/client/-/wikis/Markdown/Simplified-User-Flow-SVG).

## Development environment
While this application has been made for standard desktop environments (16:9) in mind, the website should be flexible enough to also been used on mobile devices like phones and tablets.

## Account Credentials
In the application, you can choose between creating an account & logging in with an account. At the time of writing (19/12/20), authentication is not yet implemented client-side, but when registering or logging in, you'll be automatically logged in as MaMiCo.

To see all the mock accounts that are available in our DB, you can use the [following page](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/server/-/wikis/Configuration/Credentials#database-credentials) to get their credentials.
## File Structure
```
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── common -> CSS files meant for recurring styling elements
│   │   │   ├── company -> CSS files meant for company side of website
│   │   │   ├── martian -> CSS files meant for martian side of website
│   │   │   └── reset.css -> Reset file for CSS
│   │   │
│   │   ├── images
│   │   │   ├── colony-flags -> images used to represent colonies
│   │   │   ├── resources -> Images used to represent resources
│   │   │   └── Loose files are icons used through the project
│   │   └── js
│   │       ├── application -> Contains general JS that is used through the project
│   │       │   ├── html-generator -> Contains JS files that generates HTML elements
│   │       │   └── modules -> Contains Leaflet methods for constructing a map.
│   │       ├── colonies -> JS files that retrieves & manipulate data relating to colonies
│   │       ├── configuration -> Contains configuration files & calls for the API
│   │       ├── contact -> JS files that are used in contact forms
│   │       ├── overview -> JS files that are used in the company overview
│   │       ├── resources -> JS files that retrieves & manipulate data relating to resources
│   │       │   └── modules -> Contains factory to generate HTML resource elements
│   │       ├── shipments -> JS files that retrieves & manipulate data relating to shipments
│   │       └── util -> Contains JS Subfunctions
│   │
│   ├── index.html -> Starting point
│   ├── martian-*.html -> All HTML files relating to Martian side of website
│   └── company-*.html -> All HTML files relating to company side of website
│   
├── .gitignore
├── .gitlab-ci.yml
├── package.json
├── README.md
└── sonar-project.properties
```
## Contributing
Found a fault in the code, that isn't a duplicated issue? Message Yarne Savaete and we investigate the issue in our team.
