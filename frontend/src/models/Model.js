import { Model as BaseModel } from "vue-api-query";

export default class Model extends BaseModel {
  baseURL() {
    // return "http://localhost:3000";
    return "https://7lmeq.sse.codesandbox.io";
  }

  request(config) {
    return this.$http.request(config);
  }
}