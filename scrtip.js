var quotes = [
    "ўзимга кўп айтиб тураман, агар менда бор имкониятлар ўзга бир одамда бўлганида ҳозиргача муваффаққиятга эришиб бўлган бўлар эди деб .).",
    "TSavdo qilishda maqsad-natija emas jarayonda zavq olish .",
    "O'zingizga yoqqan narsani qiling. Oqing, o'rganing, rivojlaning. O'zingizni ichingizdan o'zgartiring. Haqiqiy zavq keltiradigan ishni qiling, shunda siz yanada baxtli bo'lasiz..",
    "O‘zingizni xursand qiladigan ishlarni tanlang. Doimo o‘qing, o‘rganing va o‘sishga intiling. O‘zgarishni o‘zingizdan boshlang. Hayotingizga ma’no va quvonch keltiradigan ishni qiling — shunda chinakam baxtni his qilasi."
  ];
  var  generateBtn = document.getElementById('generate-btn');
  var quoteDisplay = document.getElementById('quote-display');
  
  generateBtn.addEventListener('click', () => {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  });