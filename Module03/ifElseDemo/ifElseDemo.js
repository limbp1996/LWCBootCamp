import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement 
{
    showTom = true;

    Tom="https://i.pinimg.com/originals/9f/ba/ae/9fbaaefb449e248ed975e1fde1169f8d.png";
    Jerry="https://i.pinimg.com/originals/83/56/96/835696578e94b4f710f241e81f19b8cf.png";
    handleClick()
    {
        this.showTom = !this.showTom;
    }
}