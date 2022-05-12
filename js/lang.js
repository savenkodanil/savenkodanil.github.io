/******************************
**********ВИБІР МОВИ***********
******************************/
$(document).ready(function() {
  $('.button__language').click(function(event) {
      $('.button__language , .language , .flags').toggleClass('open');
  });
});

document.addEventListener('DOMContentLoaded', getLocalLang);

const arrLang = {
    "en": {
      "hi": "Hello",
      "name": "my name is Danilo Savenko",
      "work": "I develop business card sites, landings, corporate sites, refine and correct other peoples sites, develop various banners, business cards, booklets, etc., as well as create site designs in Figma." ,
      "portfolio": "Portfolio",
      "skills": "Skills",
      "services": "Services",
      "reviews": "Reviews",
      "contact": "Contact me",
      "my-contacts": "MY CONTACTS",
      "mail-gm": "My mail gmail",
      "mail-uk": "My mail ukr.net",
      "my-skills": "— My skills",
      "choose-me": "Why should you choose me?",
      "choose-1": "· I approach each project responsibly and complete the work.",
      "choose-2": "· During development, I sometimes transfer some of the work already done to the customer.",
      "choose-3": "· I understand what and how to do so that everything works properly and there are no difficulties.",
      "choose-4": "· I know well html , css(sass) , js , bootstrap , photoshop , figma , illustrator , premiere pro",
      "choose-5": "· I write clean and clear code according to BEM methodology.",
      "choose-6": "· I upload the project to the hosting and completely adjust everything (the cost of hosting and domain is not included in the cost of my work) ",
      "project-1": "— Project 1",
      "landing-1": "Landing site for the sale of building materials and windows.",
      "about-site-1": "Beautiful, informative site that I made from design to layout and placement. Fully adapted to all devices. Content can be easily modified without worrying about architectural errors.",
      "visit-site": "Visit the site",
      "project-2": "— Project 2",
      "landing-2": "Landing site for the sale of furniture.",
      "about-site-2": "Another good, informative site that I did the same from design to layout and landing on the hosting. Fully adapted to all devices. Content can be easily modified without worrying about architectural errors.",
      "project-3": "— Project 3",
      "photoshop-3": "Pillar design of a construction company.",
      "about-design-3": "The original design of the pillar is made in my performance. The work was done in 2 days. The customer is satisfied.",
      "project-4": "— Project 4",
      "photoshop-4": "A3 banner design",
      "about-design-4": "The original design of the A3 banner was made by me. The work is performed in 1 day. The customer is satisfied.",
      "view-all": "View all",
      "close": "Close",
      "project-5": "— Project 5",
      "photoshop-5": "Accordion booklet design",
      "about-design-5": "The original design of the accordion booklet was made by me. The work was completed in 2 days. The customer is also satisfied.",
      "project-6": "— Project 6",
      "photoshop-6": "Business card design",
      "about-design-6": "The design of the business card is made in my performance. The work was completed in a few hours. The customer is also satisfied.",
      "all-skills": "My skills",
      "prices": "Services and prices",
      "about-1": "Creating a landing site",
      "about-prices-1": "Beautiful, informative, adaptive site. Deadline from two days",
      "order": "Order",
      "about-2": "Development of a business card site",
      "about-prices-2": "A small site that usually consists of a single web page and contains basic information. Deadline 1 day",
      "about-3": "Corporate web-site",
      "about-prices-3": "Information site for the company, agency for 4-6 pages. Deadline from 5 days.",
      "about-4": "Creating a site layout in Figma",
      "about-prices-4": "Modern layout for all devices. Term from two days.",
      "reviews-about-my": "REVIEWS",
      "customers-say-about-me": "What customers say about me",
      "customers-say": "“Danilo is responsible for any job, he is a very promising guy, as I saw, he loves to work and develop his skills, he did his job well and relatively quickly. He created a site for me to sell building materials and windows. He also worked on the design of banners, business cards, logos, billboards, booklets for my company. I managed all this in a week. ",
      "customers": "Sergey Kvach",
      "go-to-site": "Go to the site",
      "back-to-top": "TO TOP"
    },
    "ua": {
      "hi": "Вітаю",
      "name": "мене звати Данило Савенко",
      "work": "Я займаюся розробкою сайтів візиток , лендінгів , корпоративних сайтів, допрацьовую і виправляю чужі сайти, розробляю різні банери, візитки, буклети тощо, а також створюю дизайни сайтів у Figma.",
      "portfolio": "Портфоліо",
      "skills": "Навички",
      "services": "Послуги",
      "reviews": "Відгуки",
      "contact": "Зв'язок зі мною",
      "my-contacts": "МОЇ КОНТАКТИ",
      "mail-gm": "Моя пошта gmail",
      "mail-uk": "Моя пошта ukr.net",
      "my-skills": "— Мої навички",
      "choose-me": "Чому вам варто обрати мене ?",
      "choose-1": "· Я відповідально підходжу до кожного проекту і роблю роботу до кінця.",
      "choose-2": "· Під час розробки іноді я скидаю частину вже виконаної роботи замовнику.",
      "choose-3": "· Розумію, що і як треба робити, щоб все працювало коректно і не виникало труднощів.",
      "choose-4": "· Добре володію html , css(sass) , js , bootstrap , photoshop , figma , illustrator , premiere pro",
      "choose-5": "· Пишу чистий та зрозумілий код за методологією БЭМ .",
      "choose-6": "· Заливаю проект на хостинг і повністю все налаштовую (вартісь хостингу та домену не входить в вартісь моєї роботи)",
      "project-1": "— Проект 1",
      "landing-1": "Сайт лендінг з продажу будівельних матеріалів та вікон.",
      "about-site-1": "Красивий, інформаційний сайт, який я робив від дизайну до верстки та посадки на хостинг. Зроблений повністю адаптивно під усі пристрої. Контент спокійно можна змінювати не турбуючись за сбій в архітектурі.",
      "visit-site": "Відвідати сайт",
      "project-2": "— Проект 2",
      "landing-2": "Сайт лендинг по продажу меблів.",
      "about-site-2": " Ще один гарний, інформаційний сайт, який я робив так само від дизайну до верстки та посадки на хостинг. Зроблений повністю адаптивно під усі пристрої. Контент спокійно можна змінювати не турбуючись за сбій в архітектурі.",
      "project-3": "— Проект 3",
      "photoshop-3": "Дизайн штендера будівельної компанії .",
      "about-design-3": "Оригінальний дизайн штендера виконаний у моєму виконанні. Робота виконана за 2 дні. Замовник задоволений.",
      "project-4": "— Проект 4",
      "photoshop-4": "Дизайн компанії для A3 формата",
      "about-design-4": "Оригінальний дизайн баннера A3 формату виконаний у моєму виконанні. Робота зроблена за 1 день. Замовник задоволений.",
      "view-all": "Подивитись все",
      "close": "Закрити",
      "project-5": "— Проект 5",
      "photoshop-5": "Дизайн буклета гармошки",
      "about-design-5": "Оригінальний дизайн буклету гармошки виконаний у моєму виконанні. Роботу виконано за 2 дні. Замовник також задоволений.",
      "project-6": "— Проект 6",
      "photoshop-6": "Дизайн візитки",
      "about-design-6": "Дизайн візитки виконаний у моєму виконанні. Робота виконана за кілька годин. Замовник також задоволений .",
      "all-skills": "Мої навички",
      "prices": "Послуги та ціни",
      "about-1": "Створення сайту лендінгу",
      "about-prices-1": "Красивий, адаптивний сайт лендінг. Термін виконання від двох днів",
      "order": "Замовити",
      "about-2": "Розробка сайта візитки",
      "about-prices-2": "Невеликий сайт, що зазвичай складається з однієї веб-сторінок і містить основну інформацію . Термін виконання 1 день",
      "about-3": "Корпоративний сайт",
      "about-prices-3": "Інформаційний сайт для фірми, компанії, агенції на 4-6 сторінок. Термін виконання від 5 днів.",
      "about-4": "Створення макета сайта в Figma",
      "about-prices-4": "Сучасний макет під усі пристрої. Термін виконання від двох днів.",
      "reviews-about-my": "ВІДГУКИ",
      "customers-say-about-me": "Що клієнти говорять про мене",
      "customers-say": "“Данило відповідально береться за будь-яку роботу, дуже перспективний хлопець, як я побачив він любить працювати і рости у своїх вміннях, завдання зробив якісно та відносно швидко. Він створював мені сайт з продажу будівельних матеріалів та вікон. Також він працював над створенням дизайнів банерів, візиток, логотипу, штендерів, буклетів для моєї компанії. З усім цим впорався за тиждень.”",
      "customers": "Сергій Квач",
      "go-to-site": "Перейти на сайт",
      "back-to-top":"ВГОРУ"
    }
  }
  
  $(function() {
    $('.btn__language').click(function() {
      const lang = $(this).attr('id');
      saveLocalLang(lang)

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });    
  

// LOCAL STORAGE

function saveLocalLang(language) {
  let langs
  if (localStorage.getItem('langs') === null) {
      langs = []
  } else {
      langs = JSON.parse(localStorage.getItem('langs'))
  }
  langs.push(language)
  localStorage.setItem('langs', JSON.stringify(langs))
}

function getLocalLang() {
  let langs
  if (localStorage.getItem('langs') === null) {
      langs = []
  } else {
      langs = JSON.parse(localStorage.getItem('langs'))
  }
  langs.forEach(function (language) {
      let lang = langs[langs.length - 1]
      setTimeout(() => {
          $('.lang').each(function(index, item) {
              $(this).text(arrLang[lang][$(this).attr('key')]);
          });
      }, 0)
  })
}