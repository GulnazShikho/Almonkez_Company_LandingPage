function confirmInput() {
  SubmitBut = document.forms[0].SubmitBut.value;
  alert("هل تريد إرسال هذه الرسالة بالتأكيد!!");
}
function myFunction() {
  var x = document.getElementById("mailup");
  x.value = x.value.toUpperCase();
}
function message() {
  alert("هل تريد حقاً إعادة  تعيين النموذج !! (هذا قد يعني مسح جميع البيانات التي تم إدخالها)");
}
function bigImg(x) {
  x.style.height = "130px";
  x.style.width = "130px";
}

function normalImg(x) {
  x.style.height = "105px";
  x.style.width = "105px";
}