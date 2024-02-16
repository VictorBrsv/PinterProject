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
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Parties", null, {});
  },
};
