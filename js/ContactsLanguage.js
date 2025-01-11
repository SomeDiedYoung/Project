const translations = {
    "en":{
        "login" : "Login",
        "button" : "Login",
        "text" : "If you haven't an account, you can",
        "loginRegister" : "Register",
        "Register" : "Register",
        "registerButton" : "Register",
        "registerText" : "Already have an account?",
        "registerLogin" : "Login"
    },
    "ka":{
        "login" : "ავტორიზაცია",
        "button" : "ავტორიზაცია",
        "text" : "თუ არ გაქვთ ექაუნთი შექმნა შეგიძლიათ",
        "loginRegister" : "რეგისტრაცია",
        "Register" : "რეგისტრაცია",
        "registerButton" : "რეგისტრაცია",
        "registerText" : "უკვე გაქვთ აქოუნთი?",
        "registerLogin" : "ავტორიზაცია"

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