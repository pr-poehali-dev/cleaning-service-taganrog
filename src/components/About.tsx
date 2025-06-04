import Icon from "@/components/ui/icon";

const About = () => {
  const advantages = [
    {
      icon: "Users",
      title: "Опытная команда",
      description:
        "Наши специалисты имеют опыт работы более 5 лет в сфере клининга",
    },
    {
      icon: "Zap",
      title: "Современное оборудование",
      description: "Используем профессиональные моющие средства и оборудование",
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      description: "Учитываем особенности каждого объекта и пожелания клиентов",
    },
    {
      icon: "Shield",
      title: "Застрахованы",
      description: "Все работы застрахованы, предоставляем гарантию на услуги",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              О компании КлинСервис
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Мы — ведущая клининговая компания в Таганроге, специализирующаяся
              на профессиональной уборке помещений и химчистке. За годы работы
              мы помогли тысячам клиентов поддерживать чистоту и порядок в их
              домах и офисах.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Наша миссия — освободить ваше время для важных дел, взяв на себя
              заботу о чистоте. Мы используем только экологически безопасные
              средства и современные технологии уборки.
            </p>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">1000+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">5+</div>
                <div className="text-gray-600">Лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">24/7</div>
                <div className="text-gray-600">Режим работы</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border"
              >
                <div className="mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg w-fit">
                    <Icon
                      name={advantage.icon as any}
                      className="text-purple-500"
                      size={24}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
