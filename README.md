# MarsDex Client Repository
Welcome to the Client Repository of the MarsDex. This README.md file will instruct you to run a local version of the MarsDex Client.

|Version|
|---|
|[![Generic badge](https://img.shields.io/badge/Version-Live-blue.svg)](https://shields.io/)|

## Important URLs

* [Server Repository](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/server)
* [Client Repository](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/client)
* [Public Web Project](https://project-ii.ti.howest.be/mars-23/)

## Features
At the time of writing, the following features are implemented:
* All HTML pages with CSS
* Colonies Page with JavaScript

**The remaining pages without JavaScript will be implemented in the Beta Phase.**

## Bugs
### Global map
- If a marker's popup is opened, but the user opens another maker without closing the first one, the link to go to the details of a colony, doesn't work anymore.
    This is because Leaflet doesn't have any way to detect if a pop has been closed **implicit** (e.g. The pop-up is closed because another one was selected). The popup needs to be closed implicit.
  
  The workaround is to close the original popup that has been closed implicit or to close the new pop-up that has been opened. 

## Instructions for running locally
* Clone the [Client Repository](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/client) to your machine.
* Open the Client Repository in your IDE of choice, make sure it is a gradle project.
* Navigate to `index.html` and click on a browser icon to host the mars-client in intelij.

## Instruction for running the web client locally with a deployed mars-server
* Make sure you also cloned the mars-server with the instructions on the Server Repository [README.md](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/server/-/blob/master/README.md) file.
* Clone the [Client Repository](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/client) to your machine.
* Open the Client Repository in your IDE of choice, make sure it is a gradle project.
* Add a new file in the project root and call it `config.json`, add the following JSON code:
```json
{
  "host": "http://localhost:8080",
  "folder": "",
  "group": ""
}
```
* Navigate to `index.html` and click on a browser icon to host the mars-client in intelij.

## Default files

### CSS 
The `reset.css` is a short, often compressed set of CSS rules that resets the styling of all HTML elements to a consistent baseline.


## Contributing
Found a fault in the code, that isn't a duplicated issue? Message Yarne Savaete and we investigate the issue in our team.
