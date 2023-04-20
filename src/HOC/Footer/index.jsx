import style from './style.module.scss';
import cn from 'classnames';
import logo from '../../source/Flogo.svg'
import {SlSocialVkontakte} from 'react-icons/sl';
import {TbBrandTelegram} from 'react-icons/tb';


function Footer() {
  return (
        <div className={cn(style.Footer)}>
            <div className={cn(style.header)}>
                <img src={logo} alt="" />
                <div className={cn(style.socialBtn)}>
                    <TbBrandTelegram/>
                </div>
                <div className={cn(style.socialBtn)}>
                    <SlSocialVkontakte/>
                </div>
            </div>
            <div className={cn(style.Maintext)}>
                <div className="">
                    <div className={cn(style.text)}>
                        <h4>Юридический адрес</h4>
                        <p>Республика Татарстан, г. Набережные Челны,
                            ул. Альметьевский тракт, д. 6а</p>
                    </div>
                    <div className={cn(style.orgInfo)}>
                        <div className={cn(style.text)}>
                            <h4>Телефон</h4>
                            <a href="tel:++7 (800) 511-93-90">+7 (800) 511-93-90</a>
                        </div>
                        <div className={cn(style.text)}>
                            <h4>Email</h4>
                        <a href="mailto:info@zaryad-hockey.ru"> info@zaryad-hockey.ru</a>
                        </div>
                        <div className={cn(style.text)}>
                            <h4>ИНН</h4>
                            <p>1646040440</p>
                        </div>
                        <div className={cn(style.text)}>
                            <h4>ОГРН</h4>
                            <p>1151674001632</p>
                        </div>
                    </div>
                    <div className={cn(style.textend)}>
                        <p>© 2017-2023 Заряд</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </div>
                <div className={cn(style.blockTwo)}>
                    <div className={cn(style.textnav)}>
                        <h4>О бренде</h4>
                        <a href='#'>История бренда</a>
                        <a href='#'>Технологии производства</a>
                        <a href='#'>Производство</a>
                        <a href='#'>Контакты магазинов</a>
                    </div>
                    <div className={cn(style.textnav)}>
                        <h4>Партнерам</h4>
                        <a href='#'>Как стать партнером</a>
                        <a href='#'>Как мы работаем</a>
                        <a href='#'>Информация о выборе контрагентов</a>
                    </div>

                    <div className={cn(style.textnav)}>
                        <h4>Покупателям</h4>
                        <a href='#'>Доставка и оплата</a>
                        <a href='#'>Обмен и возврат</a>
                        <a href='#'>Гарантия</a>
                    </div>
                        <div className={cn(style.textnav, style.last)}>
                        <h4>Покупателям</h4>
                        <a href='#'>Бонусная программа</a>
                        <a href='#'>Таблица размов</a>
                        <a href='#'>Подарочный сертификат</a>
                    </div>
                   
                </div>
                <div className={cn(style.blockThree)}>
                    <button>Связаться с нами</button>
                    <div className={cn(style.develop)}>
                        <p>developed by:</p>
                        <a target="_blank" href='https://github.com/fishruff'>fish_ruff</a>
                    </div>
                </div>
            </div>
        </div>

  );
}

export default Footer;
