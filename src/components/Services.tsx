import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Home",
      title: "Уборка квартир",
      description: "Генеральная и поддерживающая уборка квартир любой площади",
      price: "от 2500 ₽",
      features: ["Влажная уборка", "Мытье окон", "Уборка ванной", "Пылесос"],
    },
    {
      icon: "Building",
      title: "Уборка домов",
      description: "Комплексная уборка частных домов и коттеджей",
      price: "от 4000 ₽",
      features: [
        "Уборка всех комнат",
        "Мытье фасадов",
        "Уборка участка",
        "Дезинфекция",
      ],
    },
    {
      icon: "Sofa",
      title: "Химчистка мебели",
      description: "Профессиональная химчистка диванов, кресел, ковров",
      price: "от 1500 ₽",
      features: [
        "Удаление пятен",
        "Антибактериальная обработка",
        "Сушка",
        "Защита ткани",
      ],
    },
    {
      icon: "Car",
      title: "Мойка авто",
      description: "Детейлинг и химчистка автомобилей",
      price: "от 2000 ₽",
      features: [
        "Внешняя мойка",
        "Химчистка салона",
        "Полировка",
        "Защитные покрытия",
      ],
    },
    {
      icon: "Briefcase",
      title: "Клининг офисов",
      description: "Профессиональная уборка офисных помещений",
      price: "от 150 ₽/м²",
      features: [
        "Ежедневная уборка",
        "Генеральная уборка",
        "Мытье окон",
        "Дезинфекция",
      ],
    },
    {
      icon: "Droplets",
      title: "После ремонта",
      description: "Уборка помещений после строительных и ремонтных работ",
      price: "от 300 ₽/м²",
      features: [
        "Удаление пыли",
        "Мытье поверхностей",
        "Уборка мусора",
        "Полировка",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр клининговых услуг в Таганроге с гарантией качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-gray-200"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Icon
                    name={service.icon as any}
                    className="text-blue-500"
                    size={24}
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <p className="text-2xl font-bold text-blue-500 mt-3">
                  {service.price}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Icon
                        name="Check"
                        className="text-green-500 mr-2"
                        size={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Заказать услугу
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
