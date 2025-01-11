const translations = {
    "en": {
      "section-title": "Meet Our Team",
      "Team member Sabo": "Sabo",
      "Sabos text": "Carries Ace's legacy by consuming his Devil Fruit",
      "Team member luffy": "Monkey D. Luffy",
      "Luffys text": "Captain of the Straw Hat Pirates",
      "Team member Ace": "Portgas D. Ace",
      "Aces text": "R.I.P My G he was real Man",
      "ContactUs": "Contact Us",
      "ContatcUs text": "Feel free to reach out to us if you have any questions. We are here to help and would love to hear from you.",
      "email" : "Email : ",
      "phone" : "Phone : "
    },
    "ka": {
      "section-title": "გაიცანით ჩვენი გუნდი",
      "Team member Sabo": "საბო",
      "Sabos text": "Ace-ის მემკვიდრეობა გადარჩენილია მისი Devil Fruit-ის მეშვეობით",
      "Team member luffy": "მონკი დ. ლუფი",
      "Luffys text": " Straw Hat Pirates კაპიტანი",
      "Team member Ace": "პორტგას დ. ეისი",
      "Aces text": "R.I.P ჩემი G, ის ნამდვილი კაცი იყო",
      "ContactUs": "დაგვიკავშირდით",
      "ContatcUs text": "მოგესალმებით მარტივად დაგვიკავშირდით თუ გაქვთ რაიმე კითხვა. ჩვენ აქ ვართ, რათა დაგეხმაროთ.",
      "email" : "ემეილი : ",
      "phone" : "ტელ : "

    }
  };
  
  function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
  
    elements.forEach((element) => {
      const key = element.getAttribute('data-translate');
      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });
  }
  
  function setLanguage(language) {
    translatePage(language);
    localStorage.setItem('language', language); 
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    translatePage(savedLanguage);
  
    const langSwitchBtn = document.querySelector('[data-translate="lease_vs_buy"]');
    const langEn = langSwitchBtn.querySelector('.lang-en');
    const langGe = langSwitchBtn.querySelector('.lang-ge');
  
    if (savedLanguage === 'en') {
      langEn.classList.add('active');
      langGe.classList.remove('active');
    } else {
      langEn.classList.remove('active');
      langGe.classList.add('active');
    }
  
    langSwitchBtn.addEventListener('click', (e) => {
      e.preventDefault();
  
      const currentLang = localStorage.getItem('language') || 'en';
      const newLang = currentLang === 'en' ? 'ka' : 'en';
      setLanguage(newLang);
  
      if (newLang === 'en') {
        langEn.classList.add('active');
        langGe.classList.remove('active');
      } else {
        langEn.classList.remove('active');
        langGe.classList.add('active');
      }
    });
  });