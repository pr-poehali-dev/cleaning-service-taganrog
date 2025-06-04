import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Sparkles" className="text-blue-400" size={24} />
              <span className="text-xl font-bold">КлинСервис</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональная химчистка и клининговые услуги в Таганроге
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                className="text-gray-400 hover:text-white cursor-pointer"
                size={20}
              />
              <Icon
                name="MessageCircle"
                className="text-gray-400 hover:text-white cursor-pointer"
                size={20}
              />
              <Icon
                name="Phone"
                className="text-gray-400 hover:text-white cursor-pointer"
                size={20}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Уборка квартир
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Уборка домов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Химчистка мебели
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Клининг офисов
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                г. Таганрог, ул. Петровская, 45
              </li>
              <li className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (8634) 123-45-67
              </li>
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                info@klinservis-taganrog.ru
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Наши гарантии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Отзывы клиентов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 КлинСервис Таганрог. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
