import Card from '../../Components/Card';
import style from './style.module.scss';
import cn from 'classnames';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'

function CatalogBlock() {
  return (
        <div className={cn(style.CatalogBlock)}>
            <div className={cn(style.Slider)}>
                <h2>Выбор наших клиентов</h2>
                <div className={cn(style.navBtn)}>
                    <button><MdKeyboardArrowLeft/></button>
                    <button><MdKeyboardArrowRight/></button>
                </div>
            </div>
                <div className={cn(style.SliderItems)}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            <div className={cn(style.stripes)}>
                <div className={cn(style.marquee)}>
                    <p>Клюшки для маленьких чемпионов - 
                    Уникальная клюшка с твоим именем - 
                        Клюшки для маленьких чемпионов - 
                        Уникальная клюшка с твоим именем -
                    </p> 
                </div>    
            </div>    
            <div className={cn(style.stripes, style.stripes2)}> 
                <div className={cn(style.marquee)}>
                    <h4>
                        Аксессуары - одежда - клюшки - 
                        Аксессуары - одежда - клюшки - 
                        Аксессуары - одежда - клюшки - 
                        Аксессуары - одежда - клюшки - 
                    </h4> 
                </div>            
            </div>
        </div>
  );
}

export default CatalogBlock;
