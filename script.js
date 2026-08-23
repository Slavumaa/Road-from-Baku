const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => navLinks.classList.toggle("is-open"));

const translations = {
  ru: {
    nav: ["Туры", "О нас", "Контакты"], contact: "Связаться",
    eyebrow: "Путешествия по Азербайджану", title: "Выходные, которые<br>хочется <em>запомнить</em>",
    intro: "Комфортные туры из Баку в горы, старинные города и самые красивые уголки страны.", choose: "Выбрать тур <span>→</span>", how: "<i>▶</i> Как проходят туры",
    stats: ["направлений", "довольных гостей", "средняя оценка"], popular: "Популярные направления", where: "Куда отправимся?", lead: "Выберите маршрут по настроению — свежий горный воздух, восточная история или спокойствие у озера.",
    tours: [
      ["Горы и природа", "Гусар", "Шахдаг, канатная дорога и невероятные горные виды.", "от 35 AZN"],
      ["История и культура", "Шеки", "Ханский дворец, караван-сарай и знаменитая пахлава.", "от 40 AZN"],
      ["Лес и традиции", "Исмаиллы", "Лагич, ремесленные улочки и тишина горных лесов.", "от 35 AZN"],
      ["Озёра и отдых", "Габала", "Озеро Нохур, Туфандаг и день среди зелёных гор.", "от 40 AZN"],
      ["История и звёзды", "Шамаха", "Джума-мечеть, виноградники и знаменитая обсерватория.", "от 35 AZN"]
    ], details: "Подробнее →", ready: "Всё уже продумано", enjoy: "Вам остаётся только наслаждаться дорогой", about: "Забираем из удобной точки в Баку, сопровождаем весь день и возвращаем домой с новыми впечатлениями.",
    benefits: [["Комфортный транспорт", "Чистые автомобили и опытные водители."], ["Небольшие группы", "Больше внимания и никакой спешки."], ["Честная стоимость", "Все условия известны до начала поездки."]],
    ctaTop: "Готовы к путешествию?", cta: "Давайте выберем ваш следующий маршрут", whatsapp: "Написать в WhatsApp <span>↗</span>", footer: "Туры из Баку по Азербайджану"
  },
  az: {
    nav: ["Turlar", "Haqqımızda", "Əlaqə"], contact: "Əlaqə saxla",
    eyebrow: "Azərbaycan üzrə səyahətlər", title: "Yadda qalacaq<br><em>həftə sonları</em>", intro: "Bakıdan dağlara, qədim şəhərlərə və ölkənin ən gözəl guşələrinə rahat turlar.", choose: "Tur seç <span>→</span>", how: "<i>▶</i> Turlar necə keçir",
    stats: ["istiqamət", "məmnun qonaq", "orta qiymət"], popular: "Populyar istiqamətlər", where: "Hara gedək?", lead: "Əhvalınıza uyğun marşrut seçin — dağ havası, qədim tarix və ya göl kənarında sakitlik.",
    tours: [
      ["Dağlar və təbiət", "Qusar", "Şahdağ, kanat yolu və möhtəşəm dağ mənzərələri.", "35 AZN-dən"],
      ["Tarix və mədəniyyət", "Şəki", "Xan sarayı, karvansara və məşhur Şəki paxlavası.", "40 AZN-dən"],
      ["Meşə və ənənələr", "İsmayıllı", "Lahıc, sənətkar küçələri və dağ meşələrinin sakitliyi.", "35 AZN-dən"],
      ["Göllər və istirahət", "Qəbələ", "Nohur gölü, Tufandağ və yaşıl dağlar arasında bir gün.", "40 AZN-dən"],
      ["Tarix və ulduzlar", "Şamaxı", "Cümə məscidi, üzüm bağları və məşhur rəsədxana.", "35 AZN-dən"]
    ], details: "Ətraflı →", ready: "Hər şey düşünüldü", enjoy: "Sizə yalnız yolun dadını çıxarmaq qalır", about: "Sizi Bakıda rahat nöqtədən götürür, bütün gün müşayiət edir və yeni təəssüratlarla geri qaytarırıq.",
    benefits: [["Rahat nəqliyyat", "Təmiz avtomobillər və təcrübəli sürücülər."], ["Kiçik qruplar", "Daha çox diqqət və heç bir tələskənlik."], ["Dürüst qiymət", "Bütün şərtlər səfərdən əvvəl məlumdur."]],
    ctaTop: "Səyahətə hazırsınız?", cta: "Növbəti marşrutunuzu birlikdə seçək", whatsapp: "WhatsApp-da yazın <span>↗</span>", footer: "Bakıdan Azərbaycan üzrə turlar"
  },
  en: {
    nav: ["Tours", "About", "Contacts"], contact: "Contact us",
    eyebrow: "Travel across Azerbaijan", title: "Weekends worth<br><em>remembering</em>", intro: "Comfortable tours from Baku to mountains, historic towns and the country's most beautiful places.", choose: "Choose a tour <span>→</span>", how: "<i>▶</i> How our tours work",
    stats: ["destinations", "happy guests", "average rating"], popular: "Popular destinations", where: "Where shall we go?", lead: "Choose your mood — fresh mountain air, eastern history or a peaceful day by the lake.",
    tours: [
      ["Mountains & nature", "Gusar", "Shahdag, cable cars and unforgettable mountain views.", "from 35 AZN"],
      ["History & culture", "Sheki", "Khan's Palace, caravanserai and the famous local baklava.", "from 40 AZN"],
      ["Forest & traditions", "Ismayilli", "Lahij, artisan streets and the calm of mountain forests.", "from 35 AZN"],
      ["Lakes & leisure", "Gabala", "Nohur Lake, Tufandag and a day among green mountains.", "from 40 AZN"],
      ["History & stars", "Shamakhi", "Juma Mosque, vineyards and the famous observatory.", "from 35 AZN"]
    ], details: "Details →", ready: "Everything is arranged", enjoy: "All you need to do is enjoy the journey", about: "We pick you up at a convenient point in Baku, accompany you all day and bring you home with new memories.",
    benefits: [["Comfortable transport", "Clean vehicles and experienced drivers."], ["Small groups", "More attention and no rushing."], ["Clear pricing", "All terms are known before the journey."]],
    ctaTop: "Ready to travel?", cta: "Let's choose your next destination", whatsapp: "Message us on WhatsApp <span>↗</span>", footer: "Tours from Baku across Azerbaijan"
  }
};

function setLanguage(language) {
  const t = translations[language];
  const messages = {
    ru: (tour) => `Здравствуйте! Меня интересует тур: ${tour}. Расскажите, пожалуйста, подробнее.`,
    az: (tour) => `Salam! ${tour} turu ilə maraqlanıram. Zəhmət olmasa, ətraflı məlumat verin.`,
    en: (tour) => `Hello! I am interested in the ${tour} tour. Please tell me more.`
  };
  document.documentElement.lang = language;
  document.querySelectorAll(".nav-links a").forEach((el, i) => el.textContent = t.nav[i]);
  document.querySelector(".nav-button").textContent = t.contact;
  document.querySelector(".hero-content .eyebrow").textContent = t.eyebrow;
  document.querySelector("h1").innerHTML = t.title;
  document.querySelector(".hero-copy").textContent = t.intro;
  document.querySelector(".hero-actions .primary-button").innerHTML = t.choose;
  document.querySelector(".text-button").innerHTML = t.how;
  document.querySelectorAll(".hero-stats span").forEach((el, i) => el.textContent = t.stats[i]);
  document.querySelector(".section-heading .eyebrow").textContent = t.popular;
  document.querySelector(".section-heading h2").textContent = t.where;
  document.querySelector(".section-heading > p").textContent = t.lead;
  document.querySelectorAll(".tour-card").forEach((card, i) => {
    card.querySelector(".tag").textContent = t.tours[i][0]; card.querySelector("h3").textContent = t.tours[i][1]; card.querySelector("p").textContent = t.tours[i][2]; card.querySelector(".card-bottom span").textContent = t.tours[i][3]; card.querySelector(".card-bottom a").textContent = t.details;
    card.querySelector(".card-bottom a").href = `https://wa.me/994992280705?text=${encodeURIComponent(messages[language](t.tours[i][1]))}`;
  });
  document.querySelector(".why-copy .eyebrow").textContent = t.ready;
  document.querySelector(".why-copy h2").textContent = t.enjoy;
  document.querySelector(".why-copy > p:last-child").textContent = t.about;
  document.querySelectorAll(".benefits > div").forEach((el, i) => { el.querySelector("h3").textContent = t.benefits[i][0]; el.querySelector("p").textContent = t.benefits[i][1]; });
  document.querySelector(".cta .eyebrow").textContent = t.ctaTop;
  document.querySelector(".cta h2").textContent = t.cta;
  document.querySelector(".cta .primary-button").innerHTML = t.whatsapp;
  document.querySelector(".cta .primary-button").href = `https://wa.me/994992280705?text=${encodeURIComponent(messages[language](t.where))}`;
  document.querySelector(".footer-content p").textContent = t.footer;
  document.querySelectorAll(".language-switch button").forEach(button => button.classList.toggle("active", button.dataset.lang === language));
  localStorage.setItem("yolda-language", language);
}

document.querySelectorAll(".language-switch button").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem("yolda-language") || "ru");
