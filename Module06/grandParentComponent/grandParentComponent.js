import { LightningElement } from 'lwc';

export default class GrandParentComponent extends LightningElement 
{

    count = 0;
    
    handleChildClick(event)
    {
        if(event.detail.status == 'Select')
        {
            this.count = this.count + 1;
        }
        else{
            this.count = this.count - 1;
        }
    }
    handleReset(){
        this.count = 0;
        this.template.querySelector("c-parent-component").parentComponentReset();
    }
}