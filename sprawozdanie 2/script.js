function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var input = document.createElement("input");
  input.type = "text";
  input.value = inputValue;
  li.appendChild(input);
  // adding list item
  if (inputValue === "") {
    alert("You can't add an empty item!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";
  //adding close button
  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);
  // adding close function
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var b = this.parentElement;
      b.style.display = "none";
    };
  }
  // adding edit function
  var list = document.getElementsByTagNames("ul");
  var editlist = document.querySelector(".editlist");
  editlist.onclick = function2();
  {
    list.contentEditable = true;
  }
}
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}