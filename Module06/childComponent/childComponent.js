import { LightningElement,api,track } from 'lwc';

export default class ChildComponent extends LightningElement 
{
    @api
    childName;

    @track
    buttonLabel = 'Select';
    variant = 'success';

    handleClick(event)
    {
        this.buttonLabel = event.target.label == 'Select' ? 'Deselect' : 'Select';
        this.variant = event.target.label == 'Select' ? 'destructive' : 'success';

        let childEvnt = new CustomEvent('childbtnclick', {
            bubbles: true,
            composed: true,
            detail : {childName: this.childName, status: event.target.label}
            
        });

        this.dispatchEvent(childEvnt);
    }

    @api
    childComponentReset(){
        this.buttonLabel = 'Select';
        this.variant = 'success';
    }
}