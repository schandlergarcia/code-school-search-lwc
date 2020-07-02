# Code.org Local School Search Lightning Web Component

This Lightning Web Component demonstrates a method for bringing external data into a Lightning Web Component. This component utilizes the code.org computer science school & program database to display the nearest 3 schools to a given property.

<img src="screenshots/property-overview.png" alt="Nearby Computer Science Schools LWC"/>

## About

Using the [Dreamhouse Sample App](https://github.com/trailheadapps/dreamhouse-lwc) from the [Trailhead Sample Gallery](https://trailhead.salesforce.com/sample-gallery) we can demonstrate how to bring data into a Lighting Web Component from a 3rd Party Library. Using the `Property__c` record in the app, we can pull a list of nearby computer science schools using the [Code.org Local Schools Databases API](https://code.org/learn/find-school/json).

This project relies on an API that is hosted on heroku, you can find the code and deploy your own version of the API in the [Code.org Schools Geolocation API](https://github.com/schandlergarcia/code-schools-api-golang) repo.

<img src="screenshots/local-code-school-component.png" alt="Local Code School Component" width="350" align="right"/>

## Features

The component consists of the following:

- An Apex Callout to a 3rd Party API
- Lightning Data Services for getting a records details
- Apex wire adaptor to get data for a LWC
- Using base components to power a UI
- lightning-card
- lightning-tile
- lightning-badge
- lightning-spinner
- Using SLDS css utilities
  - slds-grid
  - vertical-list
  - horizontal-list
- Lightning Navigation Service
- Lightning Messaging Utility from [Salesforce Labs](https://github.com/schandlergarcia/lightning-messaging-utility)
  - Illustrations
  - Inline Error Handling

### Prerequisites

This component requires that you have installed the [Dreamhouse Sample App](https://github.com/trailheadapps/dreamhouse-lwc)
To start developing with this model in Visual Studio Code, see [Org Development Model with VS Code](https://forcedotcom.github.io/salesforcedx-vscode/articles/user-guide/org-development-model). For details about the model, see the [Org Development Model](https://trailhead.salesforce.com/content/learn/modules/org-development-model) Trailhead module.

## The `sfdx-project.json` File

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

The most important parts of this file for getting started are the `sfdcLoginUrl` and `packageDirectories` properties.

The `sfdcLoginUrl` specifies the default login URL to use when authorizing an org.

The `packageDirectories` filepath tells VS Code and Salesforce CLI where the metadata files for your project are stored. You need at least one package directory set in your file. The default setting is shown below. If you set the value of the `packageDirectories` property called `path` to `force-app`, by default your metadata goes in the `force-app` directory. If you want to change that directory to something like `src`, simply change the `path` value and make sure the directory you’re pointing to exists.

```json
"packageDirectories" : [
    {
      "path": "force-app",
      "default": true
    }
]
```

## Part 2: Working with Source

For details about developing against scratch orgs, see the [Package Development Model](https://trailhead.salesforce.com/en/content/learn/modules/sfdx_dev_model) module on Trailhead or [Package Development Model with VS Code](https://forcedotcom.github.io/salesforcedx-vscode/articles/user-guide/package-development-model).

For details about developing against orgs that don’t have source tracking, see the [Org Development Model](https://trailhead.salesforce.com/content/learn/modules/org-development-model) module on Trailhead or [Org Development Model with VS Code](https://forcedotcom.github.io/salesforcedx-vscode/articles/user-guide/org-development-model).

## Part 3: Deploying to Production

Don’t deploy your code to production directly from Visual Studio Code. The deploy and retrieve commands do not support transactional operations, which means that a deployment can fail in a partial state. Also, the deploy and retrieve commands don’t run the tests needed for production deployments. The push and pull commands are disabled for orgs that don’t have source tracking, including production orgs.

Deploy your changes to production using [packaging](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_dev2gp.htm) or by [converting your source](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_convert) into metadata format and using the [metadata deploy command](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_mdapi.htm#cli_reference_deploy).
