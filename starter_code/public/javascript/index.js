// Create < tr > for all characters in table inside the HTML
function add(character) {
  // for (let i = 0; i < characters.length; i++) {
  //   console.log(characters.length);

  // document.getElementsByClassName('characters-container')[0].innerHTML += `
  // <div class="character-info">
  //   <div class="name">${characters[i].name}</div>
  //   <div class="occupation">${characters[i].name}</div>
  //   <div class="cartoon">${characters[i].cartoon}</div>
  //   <div class="weapon">${characters[i].weapon}</div>
  // </div>`;
  // }

  $('.characters-container').append(`
    <div class="character-info">
      <div class="name">${character.name}</div>
      <div class="occupation">${character.name}</div>
      <div class="cartoon">${character.cartoon}</div>
      <div class="weapon">${character.weapon}</div>
    </div>`);
}

const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = () => {
    $('.character-info').detach();
    charactersAPI.getFullList()
      .then((characters) => {
        // console.log(characters);
        characters.forEach((character) => {
          add(character);
        });
        // add(characters);
      });
  };

  document.getElementById('fetch-one').onclick = () => {
    $('.character-info').detach();
    const charID = document.getElementById('fetch-one-value').value;
    charactersAPI.getOneRegister(charID)
      .then((character) => {
        add(character);
      });
  };

  document.getElementById('delete-one').onclick = () => {
    const charID = document.getElementById('delete-value').value;
    charactersAPI.deleteOneRegister(charID)
      .then((response) => {
        console.log(response);
      });
  };

  document.getElementById('edit-character-form').onsubmit = () => {
    event.preventDefault();
    $('.character-info').detach();
    const ID = document.getElementById('updateID').value;
    const name = document.getElementById('updateName').value;
    const occupation = document.getElementById('updateOccupation').value;
    const weapon = document.getElementById('updateWeapon').value;
    const cartoon = document.getElementById('updateCartoon').checked;

    charactersAPI.updateOneRegister(ID, name, occupation, weapon, cartoon);
  };

  document.getElementById('new-character-form').onsubmit = () => {
    event.preventDefault();
    $('.character-info').detach();

    const name = document.getElementById('nameCreate').value;
    const occupation = document.getElementById('occupationCreate').value;
    const weapon = document.getElementById('weaponCreate').value;
    const cartoon = document.getElementById('cartoonCreate').checked;

    console.log(name, occupation, weapon, cartoon);

    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  };
});
