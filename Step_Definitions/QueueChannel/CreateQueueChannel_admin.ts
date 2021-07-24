import { When, Then } from "cucumber"
import { browser, element, by, protractor } from "protractor"
import { ProjectListingPage } from '../../PageObjects/ProjectListing';
import { ProjectConfiguration } from "../../PageObjects/ProjectConfiguration";
import chai from "chai";
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objProjectListing = new ProjectListingPage();
let objProjectConfi = new ProjectConfiguration();
var fetch = require("node-fetch");
const { async } = require("q");
var ChannnelNameText;
var Global_ProjectName


When('{string} Creates Queue Channel {string}, {string}, {string}, {string}, {string}', async function (userRole, username, password, channelName, projectID, projectName) {
  ChannnelNameText = channelName;
 
  var userInfo =
  {
    "realm": "ustglobal",
    "userName": username,
    "password": password
  };
  var channelInfo =
  {
    "channelName": channelName,
    "orgId": 1,
    "active": true,
    "projectId": projectID,
    "projectName": projectName,
    "source": "PWF",
    "destinations": [
      {
        "destinationType": "API",
        "apiRequestMethod": "POST",
        "apiUrl": "https://smartops-qa01.eastus.cloudapp.azure.com/paas/itops/alertmapping/api/invokerealtime",
        "apiHeaders": {
          "organization-key": 1,
          "offline-token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhODdjYzgwOS02YTA1LTQyY2MtOTY3YS0zNjk3OGFjZGFkZTUifQ.eyJqdGkiOiJkODVjY2VlMC02ODg0LTQ5MzMtYTU5Yy0zZDVhNjhmM2JhMDYiLCJleHAiOjAsIm5iZiI6MCwiaWF0IjoxNjIzMTIxOTMzLCJpc3MiOiJodHRwczovL3NtYXJ0b3BzLXFhMDEuZWFzdHVzLmNsb3VkYXBwLmF6dXJlLmNvbS9wYWFzL2l0b3BzL2tleWNsb2FrL2F1dGgvcmVhbG1zL3VzdGdsb2JhbCIsImF1ZCI6Imh0dHBzOi8vc21hcnRvcHMtcWEwMS5lYXN0dXMuY2xvdWRhcHAuYXp1cmUuY29tL3BhYXMvaXRvcHMva2V5Y2xvYWsvYXV0aC9yZWFsbXMvdXN0Z2xvYmFsIiwic3ViIjoiYjdiYTUxZWUtOTMxZi00NzA4LTgzYjYtZmRkYTA3ODk1MDQxIiwidHlwIjoiT2ZmbGluZSIsImF6cCI6InNtYXJ0b3BzLWZyb250ZW5kIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiNmFhZGFkNDAtZTNkMy00ODRlLTg3NWQtNjcxZWY1Zjc1ZGM2IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIl19LCJzY29wZSI6Im9mZmxpbmVfYWNjZXNzIn0.S0XFtwiomYsxzgxfIaSfxDoNWR0ucRVyDOgEAsvJ1cQ",
          "Organization-name": "USTGlobal",
          "user": "smartops"
        },
        "apiAuthType": "NO_AUTH",
        "jsonMappings": {
          "jsonSpecs": [
            {
              "operation": "shift",
              "mappings": {
                "ObjectStatus": "senseParams.objectStatus",
                "Object Type": "senseParams.objectType",
                "Alert Name": "senseParams.alertName",
                "Service Name": "senseParams.alertMetric",
                "Node Name": "senseParams.nodeName",
                "Alert Severity": "senseParams.severity",
                "Alert Details URL": "senseParams.alertDetailsURL",
                "Alert Message": "senseParams.alertMessage",
                "ObjectName": "senseParams.objectName",
                "Resource Type": "senseParams.resourceType",
                "NodeIP Address": "senseParams.ipAddress",
                "ResourceGroup": "senseParams.resourceGroup",
                "Alert time": "senseParams.alertTime"
              }
            },
            {
              "operation": "default",
              "mappings": {
                "senseParams/source": "Solarwinds",
                "senseParams/dateFormat": "%Y-%m-%dT%H:%M:%S.%f",
                "senseParams/timezone": "IST"
              }
            }
          ]
        },
        "apiFilterParams": null
      }
    ],
    "includeRequestReceivedTime": true,
    "requestReceivedTimeFormat": "2021-06-24'T'14:50:09.002",
    "processInputasList": true
  };
  const token_URL = "https://smartops-qa01.eastus.cloudapp.azure.com/paas/itops/pwf/api/smartops/login";
  const tokenPostRequest = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  await fetch(token_URL, tokenPostRequest).then(res => res.json()).then(res => {

    if (true) {
      return Promise.resolve(res);
    }
    else {
      return Promise.reject(res);
    }
  }).then(async function (userData) {

    var bearerToken = "Bearer " + userData.access_token;

    const chennalCreation_URL = "https://smartops-qa01.eastus.cloudapp.azure.com/paas/itops/ihubservice/api/smartops/ihub/channel";
    const channelCreationPosrRequest = {
      method: 'POST',
      body: JSON.stringify(channelInfo),
      headers: {
        'Content-Type': 'application/json',
        'organization-key': '1',
        'Authorization': bearerToken,
        'user': 'Itops_admin_new',
        'organization-name': 'ustglobal',
      }
    };
    await fetch(chennalCreation_URL, channelCreationPosrRequest)
      .then(response => response.json()).then(data => {
      }).catch((error) => {
        console.error('Error:', error);
      });
  }).catch(function (error) {
    console.warn(error);
  });
});
 

When('{string} enters project name in project search feild {string}', async function (userRole, projectName) {
  try {
    await objProjectListing.Project_search(projectName);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    Global_ProjectName = projectName;
  }
  catch (error) {
    throw "IE is unable to ener project name in project search feild"
  }
});

When('{string} click dotmenu icon', async function (userRole) {
  try {
    await browser.sleep(5000)
    await objProjectListing.ThreeDots(Global_ProjectName);
  }
  catch (error) {
    throw "User is not able to click Three dot menu"
  }
});

When('{string} click editProject', async function (userRole) {
  try {
    await objProjectListing.EditProject()
  }
  catch {
    throw "User is not able to click Edit Project"
  }

});

When('{string} clicks on channel configuration', async function (userRole) {
  try {
    await browser.sleep(3000)
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Channel Configuration"]'))), 100000);
    await objProjectConfi.channelConfiguration();
  }
  catch (error) {
    throw "User is not able to click on Channel Configuration"
  }
});

Then('new Queue channel must be available in Channel configuration page {string}', async function (Toaster) {
  try {
    await element(by.xpath('//h3[text()="' + ChannnelNameText + '"]')).getText().then(function (text) {
      expect(text).to.include(ChannnelNameText);
    });
  }
  catch (error) {
    throw "Newly created channel name should be displayed in list. But the new queue channel is not exist"
  };
});