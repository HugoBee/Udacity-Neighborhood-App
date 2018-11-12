class Helper {
  static baseURL () {
    return "https://api.foursquare.com/v2";
  }

  static auth() {
    const keys = {
      client_id:"EKT4Z5ZCB5JWEE0XIC24NBPIHEIAA3RZPLHCOSB4HNXTTEP1",
      client_secret:"2Y54IO5QQF5HABTFDDHPF30O4F1N25SQ2OQEOLEVZAYOWZ5C",
      v:"20181108"
    };
    return Object.keys(keys)
    .map(key => `${key}=${keys[key]}`)
    .join("&");
  }

  static urlBuilder(urlPrams) {
    if(!urlPrams){
      return ""
    }
    return Object.keys(urlPrams)
    .map(key => `${key}=${urlPrams[key]}`)
    .join("&");
  }

  static headers() {
    return {
      Accept: "application/json"
    };
  }

  static simpleFetch(endPoint,method,urlPrams){
    let requestData = {
      method,
      headers: Helper.headers()
    };
    return fetch(
      `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlPrams)}`,
      requestData
    ).then(res => res.json());
  }
}
export default class FoursquareAPI {
  static search(urlPrams){
    return Helper.simpleFetch("/venues/search","GET",urlPrams);
  }
  static getVenueDetails(VENUE_ID){
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
  }
  static getVenuePhotos(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET")
  }
}
