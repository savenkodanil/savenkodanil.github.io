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
      "work": "I am a young and promising specialist in the field of website development. I specialize in the development of business card sites, landings pages, image sites, promotional sites, corporate sites. And also, I create designs of sites in Figma, I develop designs of banners, business cards, booklets, etc." ,
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
      "choose": "· I have advanced technical thinking, technology stack and can solve problems rationally.",
      "choose-1": "· I approach responsibly and solve work tasks in accordance with the requirements of the project. During the development of the site I fill it with the necessary functionality, taking into account the wishes of the customer.",
      "choose-2": "· I ensure the correct operation of all site functions. Write clean and clear code according to the BEM methodology.",
      "choose-3": "· I have good skills of soft-skills, html, css (sass), js (jquery), bootstrap, GitHub, photoshop, figma, illustrator, premiere pro.",
      "choose-4": "· Adapts sites to different devices.",
      "choose-5": "· The finished web resource is transferred to the working domain and immediately ready to work (the cost of hosting and domain is not included in the cost of my work) ",
      "project-1": "— Project 1",
      "landing-1": "Landing page for the sale of building materials and windows.",
      "about-site-1": "A modern information site that I made from design to layout and hosting. Fully adapted to all devices. Content can be easily modified without worrying about architectural errors.",
      "visit-site": "Visit the site",
      "project-2": "— Project 2",
      "landing-2": "Landing page for the sale of furniture.",
      "about-site-2": "Another great information site that I did the same from design to layout and hosting. Fully adapted to all devices. Content can be easily modified without worrying about architectural errors.",
      "project-3": "— Project 5",
      "photoshop-3": "Pillar design of a construction company.",
      "about-design-3": "The original design of the pillar in my performance using modern trends, technologies and rules of influence on the audience. The work was completed in 2 days. The customer is satisfied.",
      "project-4": "— Project 6",
      "photoshop-4": "A3 banner design",
      "about-design-4": "The original design of the A3 banner. The work is performed in 2 day. The customer is satisfied.",
      "view-all": "View all",
      "close": "Close",
      "project-5": "— Project 7",
      "photoshop-5": "Accordion booklet design",
      "about-design-5": "The unique design of the accordion booklet was made in 2 days. The work uses graphic editors Photoshop and Illustrator. The customer is also satisfied.",
      "project-6": "— Project 8",
      "photoshop-6": "Business card design",
      "about-design-6": "A business card is an integral part of business communication and one of the brand's points of contact with the target audience. A quality business card with a bright original design can increase sales and speed them up. The work was done in a couple of hours. The work uses graphic editors Photoshop and Illustrator. The customer is satisfied.",
      "project-9": "— Project 9",
      "photoshop-9": "Business card design",
      "about-design-9": "A business card is an integral part of business communication and one of the brand's points of contact with the target audience. A quality business card with a bright original design can increase sales and speed them up. The work was done in a couple of hours. The work uses graphic editors Photoshop and Illustrator. The customer is satisfied.",
      "project-7": "— Project 3",
      "landing-7": "Bright, modern, informational Landing Page",
      "about-site-7": "Modern information site. Made fully responsive for all devices. You can easily change content without worrying about breaking the architecture.",
      "project-8": "— Project 4",
      "landing-8": "This Landing is made as a test task.",
      "about-site-8": "Fully adapted to all devices. You can easily change content without worrying about breaking the architecture.",
      "all-skills": "My skills",
      "prices": "Services and prices",
      "about-1": "Creating a landing site",
      "about-prices-1": "Modern, adaptive landing site. Deadline from two days",
      "order": "Order",
      "about-2": "Development of a business card site",
      "about-prices-2": "A small site that usually consists of a single web page and contains basic information. Deadline 1 day",
      "about-3": "Corporate web-site",
      "about-prices-3": "Information site for the company, agency for 4-6 pages. Deadline from 5 days",
      "about-4": "Creating a site layout in Figma",
      "about-prices-4": "Modern and original layout for various devices. Deadline from two days",
      "reviews-about-my": "REVIEWS",
      "customers-say-about-me": "What customers say about me",
      "first-customers-say": "“Danilo is responsible for any job, he is a very promising guy, as I saw, he loves to work and develop his skills, he did his job well and relatively quickly. He created a site for me to sell building materials and windows. He also worked on the design of banners, business cards, logos, billboards, booklets for my company. I managed all this in 2 weeks. ",
      "second-customers-say": "“Danilo has developed a website advertising furniture. He did everything well, taking into account the nuances, wishes and on time. I especially want to note the careful attitude to solving the tasks. It is a pleasure to work with such people. coped with the task in 3 days.“",
      "first-customers": "Sergey Kvach",
      "second-customers": "Oleg Shugailo",
      "go-to-site": "Go to the site",
      "back-to-top": "TO TOP",
      "go-site":"go to site",
    },
    "ua": {
      "hi": "Вітаю",
      "name": "мене звати Данило Савенко",
      "work": "Я молодий та перспективний спеціаліст в сфері розробки сайтів. Спеціалізуюсь на розробці сайтів-візиток, лендінгів, іміджевих сайтів, промо-сайтів, корпоративних сайтів. А також, створюю дизайни сайтів у Figma, розробляю дизайни банерів, візиток, буклетів тощо.",
      "portfolio": "Портфоліо",
      "skills": "Навички",
      "services": "Послуги",
      "reviews": "Відгуки",
      "contact": "Зв'язок зі мною",
      "my-contacts": "МОЇ КОНТАКТИ",
      "mail-gm": "Моя пошта gmail",
      "mail-uk": "Моя пошта ukr.net",
      "my-skills": "— Мої навички",
      "choose-me": "Чому Вам варто обрати мене ?",
      "choose": "· Я володію розвинутим технічним мисленням, стек технологіями та вмію раціонально вирішувати поставлені завдання.",
      "choose-1": "· Відповідально підходжу та вирішую робочі завдання відповідно до вимог проекту. У період розробки сайту наповнюю його необхідним функціоналом з урахуванням побажань замовника.",
      "choose-2": "· Забезпечую коректну роботу всіх функцій сайту. Пишу чистий та зрозумілий код за методологією БЭМ . ",
      "choose-3": "· Добре володію навичками soft-skills, html, css(sass), js(jquery), bootstrap, GitHub, photoshop, figma, illustrator, premiere pro. ",
      "choose-4": "· Адаптую сайти під різні пристої.",
      "choose-5": "· Готовий веб-ресурс переноситься на робочий домен і відразу готовий до роботи (вартісь хостингу та домену не входить в вартісь моєї роботи)",
      "project-1": "— Проект 1",
      "landing-1": "Landing Page з продажу будівельних матеріалів та вікон",
      "about-site-1": "Сучасний інформаційний сайт, який я робив від дизайну до верстки та посадки на хостинг. Зроблений повністю адаптивно під усі пристрої. Контент спокійно можна змінювати не турбуючись за сбій в архітектурі.",
      "visit-site": "Відвідати сайт",
      "project-2": "— Проект 2",
      "landing-2": "Landing Page з продажу меблів",
      "about-site-2": " Ще один яскравий інформаційний сайт, який я робив так само від дизайну до верстки та посадки на хостинг. Зроблений повністю адаптивно під усі пристрої. Контент спокійно можна змінювати не турбуючись за сбій в архітектурі.",
      "project-3": "— Проект 5",
      "photoshop-3": "Дизайн штендера будівельної компанії",
      "about-design-3": "Оригінальний дизайн штендера у моєму виконанні, з використанням сучасних тенденцій, технологій та правил впливу на аудиторію. Робота виконана за 2 дні. Замовник задоволений.",
      "project-4": "— Проект 6",
      "photoshop-4": "Дизайн баннера для компанії A3 формата",
      "about-design-4": "Оригінальний дизайн баннера A3 формату. Робота виконана за 2 дні. Замовник задоволений.",
      "view-all": "Подивитись все",
      "close": "Закрити",
      "project-5": "— Проект 7",
      "photoshop-5": "Дизайн буклета-гармошки",
      "about-design-5": "Унікальний дизайн буклету-гармошки виконаний за 2 дні. В роботі використано графічні редактори Photoshop , Illustrator. Замовник також задоволений.",
      "project-6": "— Проект 8",
      "photoshop-6": "Дизайн візитки",
      "about-design-6": "Візитна картка - невід'ємна частина ділового спілкування та одна з точок контакту бренду з цільовою аудиторією. Якісно зроблена візитівка з яскравим оригінальним дизайном здатна збільшити продажі та прискорити їх. Робота виконана за пару годин. В роботі використано графічні редактори Photoshop , Illustrator. Замовник задоволений.",
      "project-7": "— Проект 3",
      "landing-7": "Яскравий сучасний Landing Page. Виконаний як тестове завдання",
      "about-site-7": "Сучасний інформаційний сайт. Зроблений повністю адаптивно під усі пристрої. Контент спокійно можна змінювати не турбуючись за сбій в архітектурі.",
      "project-8": "— Проект 4",
      "landing-8": "Цей Лендінг зроблений як тестове завдання.",
      "about-site-8": "Повністю адаптовано під всі пристрої. Контент спокійно можна змінювати не турбуючись за сбій в архітектурі.",
      "project-9": "— Проект 9",
      "photoshop-9": "Дизайн візитки",
      "about-design-9": "Візитна картка - невід'ємна частина ділового спілкування та одна з точок контакту бренду з цільовою аудиторією. Якісно зроблена візитівка з яскравим оригінальним дизайном здатна збільшити продажі та прискорити їх. Робота виконана за пару годин. В роботі використано графічні редактори Photoshop , Illustrator. Замовник задоволений.",
      "all-skills": "Мої навички",
      "prices": "Послуги та ціни",
      "about-1": "Створення сайту лендінгу",
      "about-prices-1": "Сучасний, адаптивний сайт лендінг. Термін виконання від двох днів",
      "order": "Замовити",
      "about-2": "Розробка сайта візитки",
      "about-prices-2": "Невеликий сайт, що зазвичай складається з однієї веб-сторінок і містить основну інформацію . Термін виконання 1 день",
      "about-3": "Корпоративний сайт",
      "about-prices-3": "Інформаційний сайт для фірми, компанії, агенції на 4-6 сторінок. Термін виконання від 5 днів",
      "about-4": "Створення макета сайта в Figma",
      "about-prices-4": "Сучасний та оригінальний макет під різноманітні пристрої. Термін виконання від двох днів",
      "reviews-about-my": "ВІДГУКИ",
      "customers-say-about-me": "Що клієнти говорять про мене",
      "first-customers-say": "“Данило відповідально береться за будь-яку роботу, дуже перспективний хлопець, як я побачив він любить працювати і рости у своїх вміннях, завдання зробив якісно та відносно швидко. Він створював мені сайт з продажу будівельних матеріалів та вікон. Також він працював над створенням дизайнів банерів, візиток, логотипу, штендерів, буклетів для моєї компанії. З усім цим впорався за 2 неділі.”",
      "second-customers-say": "“Данило розробляв рекламний меблевий сайт. Зробив все якісно, з урахуванням нюансів, побажань та в обговорені терміни. Особливо хочу відзначити акуратне ставлення до вирішення поставлених завдань. Із такими людьми приємно працювати. Впорався із завданням за 3 дні.“",
      "first-customers": "Сергій Квач",
      "second-customers": "Олег Шугайло",
      "go-to-site": "Перейти на сайт",
      "back-to-top":"ВГОРУ",
      "go-site":"перейти на сайт",
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