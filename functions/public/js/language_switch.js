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
    home.textContent = "হোম"
    order.href = "/order#bn"
    order.textContent = "জীবাণুমুক্ত করুন"
    sub.href = "/sub#bn"
    sub.textContent = "সাবস্ক্রাইব"
    recruit.href = "/recruit#bn"
    recruit.textContent = "ক্যারিয়ার"
    lang.innerHTML = `English`
    lang.href = "#en"
    disin.textContent = "জীবাণুনাশক তথ্য"
    // about.href = "/about#bn"
  }
}
document.getElementById("lang").addEventListener("click", function() {
  window.location.href = lang.href;
  location.reload(true);
});
if(window.location.pathname === "/about") {
  if (window.location.hash === "#bn"){
    abt.innerHTML =`<span>ডিসিফ্যাক্টরস ইনক একটি বেসরকারী অর্থায়নে ছয় মাসের উদ্যোগ যা জীবাণুমুক্ত পরিবেশ নিশ্চিত করে ঢাকাকে নিয়মিত যাতায়াত ও সহবাসের জন্য আরও নিরাপদ করে তোলার লক্ষ্য কাজ করবে। COVID-19 এর বিশ্বব্যাপী মহামারীর প্রতিক্রিয়া হিসাবে এটি একটি সক্রিয় প্রচেষ্টা, কেবলমাত্র একটি ফোন কল দূরে, এটি এমন একটি পরিষেবা যা কোনও প্রাইভেট / সার্বজনীন জায়গার চাহিদা সাপেক্ষে নির্বীজন সরবরাহ করে।</span><br><pre>\n\n</pre><span>এই পরিমিত উদ্যোগটি দক্ষতা, প্রশিক্ষণ এবং প্রয়োজনীয় দক্ষতা সম্পন্ন সাম্প্রতিক বেকারদের সাথে স্বাস্থ্যকর-সচেতন ক্লায়েন্টকে সংযুক্ত করে চলমান স্বাস্থ্য ও অর্থনৈতিক সঙ্কট থেকে বাংলাদেশকে পুনরুদ্ধারে সহায়তা করার অদম্য কার্যকে মোকাবিলার প্রত্যাশায়।</span><br><pre>\n\n</pre><span>স্থানীয় জনগোষ্ঠীর পাশাপাশি কাজ করা, ডিসিফ্যাক্টরস ইনক আমাদের দেশের স্বাস্থ্যঝুঁকি এবং অর্থনৈতিক স্থবিরতা উভয়ই নির্মূল করতে সচেষ্ট হবে যার কারণে আমরা প্রতিদিন অপরিমেয় ক্ষতির মুখোমুখি হই।</span><pre>\n\n</pre><br>#DISINFECTORSINC #DISINFECTION  #PANDEMICSOLUTIONS <br>`
    tit.innerHTML = "সেভিং বাংলাদেশ<pre>\n\n</pre>"
  }
}
if(window.location.pathname === "/about") {
  if (window.location.hash === "#bn"){
    try{
      abut.href = "/about#bn"
    }catch(e){
      console.log(e)
    }
  }
}
if(window.location.pathname === "/") {
  if (window.location.hash === "#bn"){
    // abt.innerHTML ="<h1>test</h1><p>language change success</p><br><p>next line working?</p>"
    guidetit.textContent = "প্রত্যয়িত স্বাস্থ্য নির্দেশিকা"
    guidedesc.textContent="ইউনিসেফ স্বীকৃত COVID-19 সংক্রমণ নিয়ন্ত্রণ ও নিয়ন্ত্রণের জন্য সামাজিক ও প্রাতিষ্ঠানিক গাইডলাইন।"
    guidebtn.innerHTML = `<button type="button" class="btn btn-warning mt-5 w-100" >ডাউনলোড</button>`
  }
}
if(window.location.pathname === "/recruit") {
  if (window.location.hash === "#bn"){
    // abt.innerHTML ="<h1>test</h1><p>language change success</p><br><p>next line working?</p>"

    camp.textContent = "আমাদের প্রচারে যোগ দিন"
    infan.innerHTML = `<h3 class="mb-4">পদাতিক্য</h3>\n<div class="mb-4"><img src="img/sword.png" class="image mb-3" height="120px"></div>\n<p class="mb-4">"পদাতিক্য" হ'ল আমাদের গ্রাহকের পছন্দসই জায়গাগুলিতে নির্বীজন সেবা সরবরাহের জন্য দায়বদ্ধ কর্মী</p>\n<a href="https://docs.google.com/forms/d/e/1FAIpQLSd22gxBY89YWuEG2CPhxs5W52dvo8Rw2Yv7NbSH0PglqzmnjA/viewform?fbclid=IwAR14uWGIITWZ4ZEvBVbz2h_biketk8GqIFvdKaZd2DTd5h8GZmScKcgl2KQ" >আবেদন করুন</a>`
    knight.innerHTML = `<h3 class="mb-4">নাইট</h3>\n<div class="mb-4"><img src="img/shield.png" class="image mb-3" height="120px"></div>\n<p class="mb-4">"নাইট" আমাদের ছয় মাস ব্যাপী অনন্য পরিচালনার প্রশিক্ষণার্থী প্রোগ্রাম যা আপনাকে পরিচালনা, বিপণন, বিক্রয়, মানবসম্পদ এবং জনসংযোগ সম্পর্কে বিস্তৃত জ্ঞান এবং ক্ষেত্রের অভিজ্ঞতার সাথে সজ্জিত করবে।</p>\n<a href="https://docs.google.com/forms/d/e/1FAIpQLSd22gxBY89YWuEG2CPhxs5W52dvo8Rw2Yv7NbSH0PglqzmnjA/viewform?fbclid=IwAR14uWGIITWZ4ZEvBVbz2h_biketk8GqIFvdKaZd2DTd5h8GZmScKcgl2KQ" >আবেদন করুন</a>`
  }
}
/*  */
