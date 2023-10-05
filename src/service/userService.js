import axios from "axios";



class UserServices {

  async getPaises(data) {
    console.log('estou no service')
    return axios({
      url: "https://api-paises.pages.dev/paises.json",
      method: "GET",
      timeout: 5000,
      data: data,
      headers: { "Content-Type": "application/json"}})
      .then((response) => {

        return Promise.resolve(response);
      })
      .catch((error) => {
        console.log(error)
        return Promise.reject(error);
      });
  };


}

const userService = new UserServices();
export default userService;
