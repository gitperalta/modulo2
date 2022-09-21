let url = "http://localhost:5000/amigos";

let showFriends = () => {
  $("#lista").empty();
  $.get(`${url}`, (data) => {
    console.log(data);
    data.forEach((element) => {
      // let amigo = document.createElement("li");
      // amigo.textContent = `Nombre: ${element.name} Edad: ${element.age} años ${(
      //   <button>X</button>
      // )}`;
      $("#lista").append(
        `<li id="${element.id}">${element.name} <button id="${element.id}" onclick="deleteFriend(${element.id})">X</button></li>`
      );
    });
  });
};

$("#boton").click(showFriends);

let searchFriend = () => {
  let id = $("#input").val();
  if (id) {
    $.get(`${url}/${id}`, (friend) => {
      console.log(friend);
      $("#amigo").text(`${friend.name}`);
      $("#input").val("");
    });
  }
  $("#amigo").text(`Ingresa un Id`);
};

$("#search").click(searchFriend);

let deleteFriend = (idEquis) => {
  let id;
  if (typeof idEquis === "number") {
    id = idEquis;
  } else {
    id = $("#inputDelete").val();
  }
  if (id) {
    $.ajax({
      url: `${url}/${id}`,
      type: "DELETE",
      success: () => {
        $("#success").text("Tu amigo fue eliminado correctamente");
        $("#inputDelete").val("");
        showFriends();
      },
    });
  } else {
    $("#success").text("Ingresa un Id");
  }
};

$("#delete").click(deleteFriend);
