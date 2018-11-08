class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(response => response.data);
  }

  getOneRegister(charID) {
    console.log(charID);
    return axios.get(`${this.BASE_URL}/characters/${charID}`)
      .then(response => response.data);
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    const newChar = {
      name,
      occupation,
      weapon,
      cartoon,
    };
    console.log(newChar);

    axios.post(`${this.BASE_URL}/characters`, newChar)
      .then((response) => {
        console.log('post success');
        console.log(response);
      });
  }

  updateOneRegister(ID, name, occupation, weapon, cartoon) {
    const updateInfo = {
      name,
      occupation,
      weapon,
      cartoon,
    };

    axios.put(`${this.BASE_URL}/characters/${ID}`, updateInfo)
      .then((response) => {
        console.log(response);
        console.log('character update');
      });
  }

  deleteOneRegister(charID) {
    console.log(charID);
    axios.delete(`${this.BASE_URL}/characters/${charID}`)
      .then((response) => {
        console.log(response);
        console.log(`Character id ${charID}`);
      });
  }
}
