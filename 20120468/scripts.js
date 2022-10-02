$(document).ready(function () {
  // sự kiện slide up, dowm
  $(".side button").click(function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass("isChose");
  });

  // sự kiện chọn vào 1 li
  $("li").click(function (e) {
    e.preventDefault();
    $("ul .isChose").removeClass("isChose");
    $(this).toggleClass("isChose");
  });
  let id = $("#ID");
  let name = $("#name");
  let address = $("#address");
  let phone = $("#phone");
  let g = document.getElementsByName("gender");
  let email = $("#email");
  let bd = $("#birthday");
  //code kieemr tra mail
  let regexMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // code kiểm tra phone
  var regexPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  function removeInformation() {
    document.getElementById("ID").value = "";
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("phone").value = "";
    for (var i = 0; i < g.length; i++) {
      g[i].checked = false;
    }
  }
  // sự kiện ấn nút đăng kí
  $(".register").on("click", function (e) {
    $(".error").removeClass("error");
    var gender = undefined;
    for (var i = 0; i < g.length; i++) {
      if (g[i].checked == true) gender = g[i].value;
    }

    console.log(
      id.val(),
      name.val(),
      address.val(),
      gender,
      phone.val(),
      email.val(),
      bd.val()
    );

    var checkError = false;
    if (id.val() == "") {
      id.addClass("error");
      checkError = true;
    }
    if (name.val() == "") {
      name.addClass("error");
      checkError = true;
    }

    if (email.val() == "" || !regexMail.test(email.val())) {
      email.addClass("error");
      checkError = true;
    }

    if (phone.val() == "" || !regexPhone.test(phone.val())) {
      phone.addClass("error");
      checkError = true;
    }

    if (gender == undefined) {
      $("#forgender").addClass("error");
      checkError = true;
    }

    if (address.val() == "") {
      address.addClass("error");
      checkError = true;
    }

    if (bd.val() == "") {
      bd.addClass("error");
      checkError = true;
    }
    var temp = "";
    if (gender == "male") temp = "Nam";
    else temp = "Nữ";

    if (checkError == false) {
      $(".listStudent").append(
        '<tr class="child" > ' +
          "<th>" +
          id.val() +
          "</th>" +
          "<th>" +
          name.val() +
          "</th>" +
          "<th>" +
          temp +
          "</th>" +
          "<th>" +
          bd.val() +
          "</th> </tr>"
      );
      removeInformation();
    }
    e.preventDefault();
  });

  $(".remove").click(function (e) {
    e.preventDefault();
    removeInformation();
  });

  // sự kiện khi click vào các môn học
  $(".subJ1").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("isSelect1");
  });

  $(".subJ2").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("isSelect2");
  });

  //sự kiện cho 4 nút để đăng kí môn học
  $(".but1").click(function (e) {
    e.preventDefault();
    var listSub1 = $(".isSelect1");
    console.log(listSub1[0]);
  });
});
