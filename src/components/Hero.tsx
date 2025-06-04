import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Профессиональная
            <span className="text-blue-500 block">химчистка в Таганроге</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Качественная уборка квартир, домов и химчистка мебели. Опытные
            специалисты, современное оборудование, гарантия результата.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 text-lg"
            >
              <Icon name="Calendar" size={20} className="mr-3" />
              Записаться на уборку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg"
            >
              <Icon name="Calculator" size={20} className="mr-3" />
              Рассчитать стоимость
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="flex flex-col items-center space-y-3 p-6">
              <div className="p-4 bg-green-100 rounded-full">
                <Icon name="Shield" className="text-green-600" size={32} />
              </div>
              <span className="text-lg font-semibold text-gray-800">
                Гарантия качества
              </span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Icon name="Clock" className="text-blue-600" size={32} />
              </div>
              <span className="text-lg font-semibold text-gray-800">
                Работаем 24/7
              </span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6">
              <div className="p-4 bg-purple-100 rounded-full">
                <Icon name="Award" className="text-purple-600" size={32} />
              </div>
              <span className="text-lg font-semibold text-gray-800">
                7+ лет опыта
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
