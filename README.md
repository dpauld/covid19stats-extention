# covid19stats-extention
Building Aan extention is alomost identical to building a web application. A web app is made of HTML, CSS, Javascript files, and some JSON files. The only difference is that the Chrome extension requires a special file named manifest.json, which contains all the configurations.

In this project there are 3 files.
1. index.html: main file that contains all the html scipts including a bootstrap cdn for styling.
2. script.js: this is the only javascript file that will fetch the data from uk covid api (https://api.coronavirus.data.gov.uk/v1/data) and then show them accordingly.
  ```
  async function fetchData() {
    const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    const record=await res.json();
    document.getElementById("date").innerHTML=record.data[0].date;
    document.getElementById("areaName").innerHTML=record.data[0].areaName;
    document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}
fetchData();
  ```
3. manifest.json: this file contains all the configurations required to run the programm by the browser. Have a look at googles documentation about *manifest.json* (https://developer.chrome.com/docs/extensions/mv3/manifest/) file.
  ```
  {
    "name": "Covid-19 Stats UK",
    "version": "1.0.0",
    "description": "latest covid data of UK",
    "manifest_version": 3,
    "author": "Sampurna Chapagain",
    "action":{
        "default_popup": "index.html",
        "default_title": "Latest Covid Report"
    }
}
  ```
  
  #### How to add this extention to chrome browser?
  Select More Tools -> Extensions. Then do the followings,
    * enable the Developer mode 
    * Click Load unpacked and then load the project in the Chrome extension store. 
