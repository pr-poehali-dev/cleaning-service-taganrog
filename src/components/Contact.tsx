import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Оставьте заявку или свяжитесь с нами
            удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Оставьте заявку
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" className="border-gray-300" />
                </div>
                <div>
                  <Input placeholder="Телефон" className="border-gray-300" />
                </div>
                <div>
                  <Input
                    placeholder="Email (необязательно)"
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите ваши потребности в уборке..."
                    className="border-gray-300 min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Контактная информация
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="MapPin"
                    className="text-blue-500 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-gray-900">Адрес</p>
                    <p className="text-gray-600">
                      г. Таганрог, ул. Петровская, 45
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Phone" className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Телефон</p>
                    <p className="text-gray-600">+7 (8634) 123-45-67</p>
                    <p className="text-gray-600">+7 (900) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Mail" className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@klinservis-taganrog.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Clock" className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Режим работы</p>
                    <p className="text-gray-600">Ежедневно с 8:00 до 22:00</p>
                    <p className="text-gray-600">Экстренные вызовы 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2">Быстрый заказ</h3>
              <p className="mb-4 opacity-90">
                Позвоните прямо сейчас и получите скидку 10% на первую уборку!
              </p>
              <Button
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить сейчас
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
