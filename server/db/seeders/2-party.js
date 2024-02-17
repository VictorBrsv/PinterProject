"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Parties",
      [
        {
          category: "Кино",
          title: "Фильм: Гарри Поттер",
          description: "Гарри Поттер вновь с нами",
          image:
            "https://cybersport.metaratings.ru/storage/images/47/5a/475a79b6f064e089aed622ef35e7dde1.png",
          date: "2024-02-15",
          time: "18:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Бары",
          title: "Довлатов",
          description:
            "Вы столько читали о вреде алкоголя, что просто бросайте уже читать и приезжайте!",
          image:
            "https://optim.tildacdn.com/tild6138-6539-4764-b466-343264323139/-/format/webp/Davlatov22032023_022.jpg",
          date: "Каждый день",
          time: "12:00-24:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Рестораны",
          title: "Torro Grill",
          description:
            "Однажды попробовав блюда в Torro Grill, вы точно к нам вернетесь!",
          image: "https://torrogrill.ru/assets/gimg/1553_39740570239a.jpg",
          date: "Каждый день",
          time: "12:00-00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Театры",
          title: "Московский театр на таганке",
          description: "Искусство, воплощенное на сцене Таганки, оживляет души.",
          image: "https://s2.afisha.ru/mediastorage/b4/ca/86facdbb1a84482e9751fe8ecab4.jpg",
          date: "Каждый день",
          time: "12:00-20:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Кино",
          title: "Кинопоказ: Властелин колец",
          description: "Погрузитесь в эпическое путешествие по Средиземью вместе с нами",
          image: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/a2d5bcae-a1a9-442f-8195-f5373a5ba77f/600x900",
          date: "2024-02-20",
          time: "19:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Бары",
          title: "Стимпанк бар",
          description: "Уникальная атмосфера стимпанка и отличный выбор напитков",
          image: "https://insighthub.ru/media/k2/items/cache/fd57315048b2a0e2ee02ed04b0927842_XL.jpg",
          date: "Каждый день",
          time: "18:00-02:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Рестораны",
          title: "Sushi Master",
          description: "Лучшие суши и роллы, которые только можно найти",
          image: "https://media-cdn.tripadvisor.com/media/photo-s/19/2e/60/c0/caption.jpg",
          date: "Каждый день",
          time: "10:00-22:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Театры",
          title: "Большой театр",
          description: "Живите волшебством классического искусства в Большом театре",
          image: "https://aspo.ru/upload/iblock/d40/2rvyerjz94wtm0pb0mhezy2prkaxzrv1.jpg",
          date: "Каждый день",
          time: "19:00-23:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Концерты",
          title: "Jazz Evening",
          description: "Насладитесь вечером джаза с лучшими музыкантами города",
          image: "https://i.scdn.co/image/ab67616d0000b27380fec79ede3a874af870165d",
          date: "2024-02-25",
          time: "20:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Parties", null, {});
  },
};
