public with sharing class LocalCodeSchoolSearch {
  /**
   * getNearbyCodeSchools Allows us to query the current records location based
   * on it's distance from local code schools. It calls out to the endpoint, passing the
   * lat and lon from the record. It then parses the data using teh CodeSchoolJSONParser
   * @param  propertyLatitude  propertyLatitude the latituded of the property record
   * @param  propertyLongitude propertyLongitude the longitude of the property record
   * @return                   return a list of nearby Schools from the Property object
   */
  @AuraEnabled(cacheable=true)
  public static String getNearbyCodeSchools(Decimal propertyLatitude, Decimal propertyLongitude) {
    // Construct our Callout URL with our Lat and Lon from the component
    String calloutURL = 'https://enigmatic-gorge-00974.herokuapp.com/?lat=' + propertyLatitude + '&lon=' + propertyLongitude;
    String response = calloutToGoServer(calloutUrl);
    return response;
  }

  /**
   * calloutToGoServer The callout to our endpoint to get our nearby school data
   * @param  url url the url passed from getNearbyCodeSchools
   * @return     return the response body
   */
  public static String calloutToGoServer(String url) {
    // Instantiate a new http object
    Http h = new Http();

    // Instantiate a new HTTP request, specify the method (GET) as well as the endpoint
    HttpRequest req = new HttpRequest();
    req.setEndpoint(url);
    req.setMethod('GET');

    // Send the request, and return a response
    HttpResponse res = h.send(req);
    return res.getBody();
  }
}
