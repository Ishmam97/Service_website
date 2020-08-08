var language = {
  en: {
    about: "hello"
  },
  bn: {
    about: "Salam"
  }
};

if (window.location.hash) {
  if (window.location.hash === "#bn") {
    home.href = "/#bn"
    order.href = "/order#bn"
    sub.href = "/sub#bn"
    recruit.href = "/recruit#bn"
    lang.innerHTML = `English`
    lang.href = "#en"
  }
}
document.getElementById("lang").addEventListener("click", function() {
  window.location.href = lang.href;
  location.reload(true);
});
if(window.location.pathname === "/about") {
  if (window.location.hash === "#bn"){
    abt.innerHTML ="<h1>test</h1><p>language change success</p><br><p>next line working?</p>"
  }
}
