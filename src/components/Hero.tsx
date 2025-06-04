import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Профессиональная
            <span className="text-blue-500 block">химчистка в Таганроге</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Качественная уборка квартир, домов и химчистка мебели. Опытные
            специалисты, современное оборудование, гарантия результата.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на уборку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Shield" className="text-green-500" size={24} />
              <span className="text-gray-700">Гарантия качества</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Clock" className="text-blue-500" size={24} />
              <span className="text-gray-700">Работаем 24/7</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Award" className="text-purple-500" size={24} />
              <span className="text-gray-700">5+ лет опыта</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
