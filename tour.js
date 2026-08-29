const tours = {
  gusar: { icon:"🏔️", ru:["Горы и природа","Гусар","Лаза, водопады, Шахдаг, канатная дорога и невероятные горные виды.","35 AZN",["Выезд из Баку","Гусар","Село Лаза","Водопады Лаза","Шахдаг","Канатная дорога","Возвращение в Баку"]], az:["Dağlar və təbiət","Qusar","Laza, şəlalələr, Şahdağ, kanat yolu və möhtəşəm dağ mənzərələri.","35 AZN",["Bakıdan yola düşmə","Qusar","Laza kəndi","Laza şəlalələri","Şahdağ","Kanat yolu","Bakıya qayıdış"]], en:["Mountains & nature","Gusar","Laza, waterfalls, Shahdag, cable cars and unforgettable mountain views.","35 AZN",["Departure from Baku","Gusar","Laza village","Laza waterfalls","Shahdag","Cable car","Return to Baku"]] },
  sheki: { icon:"🏛️", ru:["История и культура","Шеки","Ханский дворец, караван-сарай и знаменитая пахлава.","40 AZN",["Выезд из Баку","Дворец шекинских ханов","Старинный караван-сарай","Возвращение в Баку"]], az:["Tarix və mədəniyyət","Şəki","Xan sarayı, karvansara və məşhur Şəki paxlavası.","40 AZN",["Bakıdan yola düşmə","Şəki Xan Sarayı","Qədim karvansara","Bakıya qayıdış"]], en:["History & culture","Sheki","Khan's Palace, caravanserai and famous local baklava.","40 AZN",["Departure from Baku","Sheki Khan's Palace","Historic caravanserai","Return to Baku"]] },
  ismayilli: { icon:"🌲", ru:["Лес и традиции","Исмаиллы","Лагич, ремесленные улочки и тишина горных лесов.","35 AZN",["Выезд из Баку","Подвесной мост","Старинное село Лагич","Возвращение в Баку"]], az:["Meşə və ənənələr","İsmayıllı","Lahıc, sənətkar küçələri və dağ meşələrinin sakitliyi.","35 AZN",["Bakıdan yola düşmə","Asma körpü","Qədim Lahıc kəndi","Bakıya qayıdış"]], en:["Forest & traditions","Ismayilli","Lahij, artisan streets and peaceful mountain forests.","35 AZN",["Departure from Baku","Suspension bridge","Historic Lahij village","Return to Baku"]] },
  gabala: { icon:"🌊", ru:["Озёра и отдых","Габала","Озеро Нохур, Туфандаг и день среди зелёных гор.","40 AZN",["Выезд из Баку","Озеро Нохур","Канатная дорога Туфандаг","Возвращение в Баку"]], az:["Göllər və istirahət","Qəbələ","Nohur gölü, Tufandağ və yaşıl dağlar arasında bir gün.","40 AZN",["Bakıdan yola düşmə","Nohur gölü","Tufandağ kanat yolu","Bakıya qayıdış"]], en:["Lakes & leisure","Gabala","Nohur Lake, Tufandag and a day among green mountains.","40 AZN",["Departure from Baku","Nohur Lake","Tufandag cable car","Return to Baku"]] },
  shamakhi: { icon:"🕌", ru:["История и звёзды","Шамаха","Джума-мечеть, виноградники и знаменитая обсерватория.","35 AZN",["Выезд из Баку","Джума-мечеть","Шамахинская обсерватория","Возвращение в Баку"]], az:["Tarix və ulduzlar","Şamaxı","Cümə məscidi, üzüm bağları və məşhur rəsədxana.","35 AZN",["Bakıdan yola düşmə","Cümə məscidi","Şamaxı Astrofizika Rəsədxanası","Bakıya qayıdış"]], en:["History & stars","Shamakhi","Juma Mosque, vineyards and the famous observatory.","35 AZN",["Departure from Baku","Juma Mosque","Shamakhi Observatory","Return to Baku"]] },
  baku: { icon:"🏙️", ru:["Город и архитектура","Баку","Старый город, панорамы столицы и главные символы современного Баку.","По запросу",["Пешая прогулка по Старому городу","Девичья башня и Дворец Ширваншахов","Смотровая площадка и Пламенные башни","Центр Гейдара Алиева"]], az:["Şəhər və memarlıq","Bakı","İçərişəhər, şəhər panoramaları və müasir Bakının əsas simvolları.","Sorğu ilə",["İçərişəhərdə piyada gəzinti","Qız qalası və Şirvanşahlar sarayı","Baxış meydançası və Alov qüllələri","Heydər Əliyev Mərkəzi"]], en:["City & architecture","Baku","The Old City, capital panoramas and the main landmarks of modern Baku.","On request",["Walking tour of the Old City","Maiden Tower and Palace of the Shirvanshahs","Panoramic viewpoint and Flame Towers","Heydar Aliyev Center"]] }
};

const attractions = {
  gusar: ["Горный курорт Шахдаг", "Село Лаза и водопады", "Шахдагский национальный парк", "Гора Базардюзю", "Мавзолей Шейха Джунейда", "Село Хазра", "Мечеть Тадж-Махал", "Краеведческий музей Гусара"],
  sheki: ["Дворец шекинских ханов", "Верхний караван-сарай", "Исторический центр и крепость", "Албанский храм в Кише", "Дом Шекихановых", "Ханская мечеть", "Мастерские шебеке", "Дом народных ремёсел"],
  gabala: ["Курорт Туфандаг", "Озеро Нохур", "Водопад Семь красавиц", "Руины древней Кабалы", "Археологический центр", "Село Нидж и Удинский храм", "Лавандовая ферма", "Габалинский стрелковый клуб"],
  shamakhi: ["Джума-мечеть", "Обсерватория в Пиркули", "Мавзолей Дири-Баба", "Комплекс Едди Гюмбез", "Пиркулинский заповедник", "Село Демирчи", "Винодельня Мейсари", "Дом-музей Мирзы Алекпера Сабира"],
  ismayilli: ["Ремесленное село Лагич", "Историческое село Басгал", "Озеро Гаранохур", "Село Ивановка", "Исмаиллинский заповедник", "Подвесной мост в Зернаве", "Озеро Ашигбайрамлы", "Винодельня Château Monolit"],
  baku: ["Старый город Ичери-шехер", "Девичья башня", "Дворец Ширваншахов", "Место съёмки «Бриллиантовой руки»", "Смотровая площадка", "Пламенные башни", "Первая нефтяная скважина", "Центр Гейдара Алиева"]
};

const bakuAttractionImages = [
  "baku-old-city.jpg",
  "baku-maiden-tower.jpg",
  "baku-old-city.jpg",
  "baku-old-city.jpg",
  "baku-flame-towers.jpg",
  "baku-flame-towers.jpg",
  "baku-flame-towers.jpg",
  "baku-heydar-center.jpg"
];

const ui = {
  ru:{back:"← Назад к турам",duration:"Продолжительность",day:"1 день",departure:"Выезд",time:"08:00 из Баку",price:"Стоимость",program:"Программа поездки",see:"Что увидим за день",book:"Бронирование тура",items:["✓ Транспорт из Баку и обратно","✓ Сопровождение в поездке","✓ Остановки по маршруту"],button:"Забронировать в WhatsApp <span>↗</span>",note:"Ответим и уточним свободную дату",sights:"Что посетить",attractions:"Главные достопримечательности",attractionsCopy:"Лучшие природные, исторические и культурные места региона.",place:"Место для посещения во время путешествия.",message:n=>`Здравствуйте! Хочу забронировать тур: ${n}.`},
  az:{back:"← Turlara qayıt",duration:"Müddət",day:"1 gün",departure:"Çıxış",time:"08:00 Bakıdan",price:"Qiymət",program:"Səyahət proqramı",see:"Bir gündə görəcəklərimiz",book:"Turun rezervasiyası",items:["✓ Bakıdan nəqliyyat və geri dönüş","✓ Səyahət boyu müşayiət","✓ Marşrut üzrə dayanacaqlar"],button:"WhatsApp-da rezerv et <span>↗</span>",note:"Cavab verib uyğun tarixi dəqiqləşdirəcəyik",sights:"Görməli yerlər",attractions:"Əsas görməli yerlər",attractionsCopy:"Regionun ən yaxşı təbiət, tarix və mədəniyyət məkanları.",place:"Səyahət zamanı ziyarət ediləcək məkan.",message:n=>`Salam! ${n} turunu rezerv etmək istəyirəm.`},
  en:{back:"← Back to tours",duration:"Duration",day:"1 day",departure:"Departure",time:"08:00 from Baku",price:"Price",program:"Tour program",see:"What we'll see in one day",book:"Book this tour",items:["✓ Transport from Baku and back","✓ Assistance throughout the trip","✓ Stops along the route"],button:"Book on WhatsApp <span>↗</span>",note:"We'll reply and confirm an available date",sights:"Places to visit",attractions:"Main attractions",attractionsCopy:"The region's best natural, historical and cultural places.",place:"A memorable stop during your journey.",message:n=>`Hello! I would like to book the ${n} tour.`}
};

const params = new URLSearchParams(location.search);
const key = tours[params.get("tour")] ? params.get("tour") : "gusar";
const lang = ["ru","az","en"].includes(params.get("lang")) ? params.get("lang") : (localStorage.getItem("yolda-language") || "ru");
const tour = tours[key]; const data = tour[lang]; const text = ui[lang];
const seo = {
  gusar: ["Тур из Баку в Гусар и Шахдаг", "Однодневный тур из Баку в Гусар и Шахдаг: горы, канатная дорога, Красная Слобода и красивые виды. Цена от 35 AZN."],
  sheki: ["Тур из Баку в Шеки", "Однодневный тур из Баку в Шеки: Дворец шекинских ханов, караван-сарай, старый город и знаменитая пахлава. Цена от 40 AZN."],
  ismayilli: ["Тур из Баку в Исмаиллы и Лагич", "Однодневный тур из Баку в Исмаиллы и Лагич: ремесленные улицы, горные леса и исторические сёла. Цена от 35 AZN."],
  gabala: ["Тур из Баку в Габалу", "Однодневный тур из Баку в Габалу: озеро Нохур, канатная дорога Туфандаг и зелёные горы. Цена от 40 AZN."],
  shamakhi: ["Тур из Баку в Шамаху", "Однодневный тур из Баку в Шамаху: Джума-мечеть, Пиркули, обсерватория и исторические места. Цена от 35 AZN."],
  baku: ["Обзорная экскурсия по Баку", "Экскурсия по Баку: Старый город, Девичья башня, Пламенные башни, нефтяное наследие и Центр Гейдара Алиева."]
};
const canonicalUrl=`https://roadfrombaku.com/tour.html?tour=${key}`;
const [seoTitle,seoDescription]=seo[key];
document.documentElement.lang=lang; document.title=`${seoTitle} | Road from Baku`;
document.querySelector('meta[name="description"]').setAttribute("content",seoDescription);
const canonical=document.createElement("link"); canonical.rel="canonical"; canonical.href=canonicalUrl; document.head.appendChild(canonical);
[["og:title",`${seoTitle} | Road from Baku`],["og:description",seoDescription],["og:url",canonicalUrl],["og:image",`https://roadfrombaku.com/assets/attractions/${key}-hero.jpg`]].forEach(([property,content])=>{const meta=document.createElement("meta");meta.setAttribute("property",property);meta.content=content;document.head.appendChild(meta);});
const structuredData={"@context":"https://schema.org","@type":"TouristTrip",name:seoTitle,description:seoDescription,image:`https://roadfrombaku.com/assets/attractions/${key}-hero.jpg`,touristType:"Экскурсионный тур",provider:{"@type":"TravelAgency",name:"Road from Baku",url:"https://roadfrombaku.com/",telephone:"+994998870511"}}; const numericPrice=data[3].match(/\d+/)?.[0]; if(numericPrice) structuredData.offers={"@type":"Offer",price:numericPrice,priceCurrency:"AZN",availability:"https://schema.org/InStock",url:canonicalUrl}; const structured=document.createElement("script"); structured.type="application/ld+json"; structured.textContent=JSON.stringify(structuredData); document.head.appendChild(structured);
document.querySelector("#tour-icon").textContent=tour.icon; document.querySelector("#tour-tag").textContent=data[0]; document.querySelector("#tour-name").textContent=data[1]; document.querySelector("#tour-description").textContent=data[2]; document.querySelector("#tour-price").textContent=data[3]; document.querySelector("#booking-price").textContent=data[3];
document.querySelector("#back-link").textContent=text.back; document.querySelector("#duration-label").textContent=text.duration; document.querySelector("#tour-duration").textContent=text.day; document.querySelector("#departure-label").textContent=text.departure; document.querySelector("#tour-departure").textContent=text.time; document.querySelector("#price-label").textContent=text.price; document.querySelector("#program-label").textContent=text.program; document.querySelector("#program-title").textContent=text.see; document.querySelector("#booking-label").textContent=text.book;
document.querySelectorAll(".booking-card li").forEach((item,i)=>item.textContent=text.items[i]); document.querySelector("#booking-note").textContent=text.note; const whatsapp=document.querySelector("#whatsapp-button"); whatsapp.innerHTML=text.button; whatsapp.href=`https://wa.me/994998870511?text=${encodeURIComponent(text.message(data[1]))}`;
document.querySelector("#timeline").innerHTML=data[4].map((item,i)=>`<div class="timeline-item"><span class="timeline-number">0${i+1}</span><div><h3>${item}</h3><p>${text.day}</p></div></div>`).join("");
document.querySelector(".tour-hero").style.backgroundImage=`url("assets/attractions/${key}-hero.jpg")`;
document.querySelector("#attractions-label").textContent=text.sights; document.querySelector("#attractions-title").textContent=text.attractions; document.querySelector("#attractions-copy").textContent=text.attractionsCopy;
document.querySelector("#attractions-grid").innerHTML=attractions[key].map((name,i)=>{const imageFile=key==="baku"?bakuAttractionImages[i]:`${key}-${(i%3)+1}.jpg`;return `<article class="attraction-card"><img src="assets/attractions/${imageFile}" alt="${name}" loading="lazy"><div class="attraction-card-content"><span class="attraction-card-number">0${i+1}</span><h3>${name}</h3><p>${text.place}</p></div></article>`;}).join("");
