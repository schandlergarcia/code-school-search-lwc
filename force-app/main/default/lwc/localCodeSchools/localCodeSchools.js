import { LightningElement, api, track, wire } from "lwc";
import { NavigationMixin } from "lightning/navigation";

import { getRecord } from "lightning/uiRecordApi";
const fields = ["Property__c.Location__Latitude__s", "Property__c.Location__Longitude__s"];

import getNearbyCodeSchools from "@salesforce/apex/LocalCodeSchoolSearch.getNearbyCodeSchools";

export default class LocalCodeSchools extends NavigationMixin(LightningElement) {
  // Current Record
  @api recordId;
  latitude;
  longitude;

  // Error Handling
  showError;
  errorMessage;

  // Data
  @track schools;

  // Loading
  loading = true;

  // Get data from the current record
  @wire(getRecord, { recordId: "$recordId", fields })
  wiredRecord({ error, data }) {
    if (data) {
      const property = data.fields;
      this.latitude = property.Location__Latitude__s.value;
      this.longitude = property.Location__Longitude__s.value;
    } else if (error) {
      this.stopLoading(500);
      this.showError = true;
      this.errorMessage = error.message;
    }
  }

  // Get the nearby schools from the API once the lat and lon are populated
  @wire(getNearbyCodeSchools, {
    propertyLatitude: "$latitude",
    propertyLongitude: "$longitude"
  })
  wiredSchools({ error, data }) {
    if (data) {
      this.stopLoading(500);
      console.log(JSON.parse(data));
      this.schools = JSON.parse(data);
    } else if (error) {
      this.stopLoading(500);
      this.showError = true;
      this.error = error.message;
      this.schools = undefined;
    }
  }

  // Navigate to a URL when selected
  navigateToUrl(event) {
    const url = event.currentTarget.dataset.url;
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: url
      }
    });
  }

  // Handle loading
  stopLoading(timeoutValue) {
    setTimeout(() => {
      this.loading = false;
    }, timeoutValue);
  }
}
