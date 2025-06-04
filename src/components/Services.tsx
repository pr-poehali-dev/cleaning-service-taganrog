import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Home",
      title: "Уборка квартир",
      description:
        "Генеральная и поддерживающая уборка квартир любой площади с использованием профессиональных средств",
      price: "от 2500 ₽",
      features: [
        "Влажная уборка всех поверхностей",
        "Мытье окон и зеркал",
        "Уборка ванной и санузла",
        "Пылесос и мытье полов",
      ],
    },
    {
      icon: "Building",
      title: "Уборка домов",
      description: "Комплексная уборка частных домов и коттеджей с территорией",
      price: "от 4000 ₽",
      features: [
        "Уборка всех жилых комнат",
        "Мытье фасадных окон",
        "Уборка придомовой территории",
        "Дезинфекция помещений",
      ],
    },
    {
      icon: "Sofa",
      title: "Химчистка мебели",
      description:
        "Профессиональная химчистка диванов, кресел, ковров и матрасов",
      price: "от 1500 ₽",
      features: [
        "Удаление любых пятен",
        "Антибактериальная обработка",
        "Быстрая сушка",
        "Защитная пропитка ткани",
      ],
    },
    {
      icon: "Car",
      title: "Мойка и химчистка авто",
      description: "Детейлинг и профессиональная химчистка автомобилей",
      price: "от 2000 ₽",
      features: [
        "Внешняя мойка кузова",
        "Химчистка салона",
        "Полировка и воск",
        "Защитные покрытия",
      ],
    },
    {
      icon: "Briefcase",
      title: "Клининг офисов",
      description: "Профессиональная уборка офисных и коммерческих помещений",
      price: "от 150 ₽/м²",
      features: [
        "Ежедневная поддерживающая уборка",
        "Генеральная уборка",
        "Мытье панорамных окон",
        "Дезинфекция рабочих мест",
      ],
    },
    {
      icon: "Droplets",
      title: "Уборка после ремонта",
      description: "Уборка помещений после строительных и ремонтных работ",
      price: "от 300 ₽/м²",
      features: [
        "Удаление строительной пыли",
        "Мытье всех поверхностей",
        "Вывоз строительного мусора",
        "Финальная полировка",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр клининговых услуг в Таганроге с гарантией качества и
            индивидуальным подходом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-gray-200 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 p-4 bg-blue-50 rounded-2xl w-fit group-hover:bg-blue-100 transition-colors">
                  <Icon
                    name={service.icon as any}
                    className="text-blue-500"
                    size={32}
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-3xl font-bold text-blue-500 mt-4">
                  {service.price}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <Icon
                        name="Check"
                        className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        size={16}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3">
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
