import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Icon name="Sparkles" className="text-blue-500" size={28} />
            <span className="text-2xl font-bold text-gray-900">ЧистоДом</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-500 transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-500 transition-colors font-medium"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-500 transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
