import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000/api"
});
// export default axios.create({
//   baseURL: "http://uniteadministrative.kognishare.com/api"
// });
