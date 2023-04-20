import style from './style.module.scss';
import cn from 'classnames';
import MainLogo from '../../source/MainLogo.svg';
import MainPhoto from '../../source/MainPhoto.png';


function MainBlock() {
  return (
    <div className={cn(style.MainBlock)}>
        <img className={cn(style.Zaryad)} src={MainLogo} alt="" />
        <div className={cn(style.bgEffect)}>
            <div></div>
            <div></div>
        </div>
        <div className={cn(style.Slider)}>
            <div className={cn(style.MainPhoto)}>
            <img src={MainPhoto} alt="" />
            <div className={cn(style.CircleBtn)}>
                <p>В каталог</p>
            </div>
            </div>
            <div className={cn(style.desk)}>
                <p>Константин Константинович</p>
                <p>Крутой хоккеист такой-то команды</p>
            </div>
        </div>
    </div>
    );
}

export default MainBlock;