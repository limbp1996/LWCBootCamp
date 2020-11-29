import { LightningElement,api,track } from 'lwc';

export default class ParentComponent extends LightningElement
{
    @track
    childs = [{name:'Child One', status:'Deselected'}, {name:'Child Two', status:'Deselected'}, {name:'Child Three', status:'Deselected'}];

    handleChildClick(event)
    {
        let child = event.detail.childName;
        this.childs.forEach(element => {
            
            if(child == element.name)
            {
                element.status = event.detail.status;
            }
        });
    }
    @api
    parentComponentReset()
    {
        this.template.querySelector("c-child-component").childComponentReset();
    }
}