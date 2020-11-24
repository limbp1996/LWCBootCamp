import { LightningElement, api } from 'lwc';

export default class calcDemoChild extends LightningElement 
{
    @api
    calcExpression = '';

    @api
    calcResult = '';
}