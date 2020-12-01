import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class QuickCreate extends NavigationMixin(LightningElement) {
    showAllAcc=false;
    showAllCon=false;
    showAllOpp=false;
    createObjRecord = true;
    createAcc = false;
    createCon = false;
    createOpp = false;

    selectedObj = "None";

    handleSelectedObj(event)
    {
        const obj_Selected = event.target.name;
        if (obj_Selected === 'objSelected') 
        {
            this.selectedObj = event.target.value;
        }
    }

    handleQuickCreate()
    {
        if(this.selectedObj === "Account")
        {
            this.createObjRecord = false;
            this.createAcc = true;
            this.createCon = false;
            this.createOpp = false;
        }
        else if(this.selectedObj === "Contact")
        {
            this.createObjRecord = false;
            this.createAcc = false;
            this.createCon = true;
            this.createOpp = false;
        }
        else if(this.selectedObj === "Opportunity")
        {
            this.createObjRecord = false;
            this.createAcc = false;
            this.createCon = false;
            this.createOpp = true;
        }
        else if(this.selectedObj === "None")
        {
            alert("Please select an object");
        }
    }

    handleNewRecord(){
        if(this.selectedObj === "Account")
        {
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'new'
                }
            })
        }
        else if(this.selectedObj === "Contact")
        {
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Contact',
                    actionName: 'new'
                }
            })
        }
        else if(this.selectedObj === "Opportunity")
        {
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Opportunity',
                    actionName: 'new'
                }
            })
        }
        else if(this.selectedObj === "None")
        {
            alert("Please select an object");
        }
    }

    handleAccSuccess(event)
    {
        this.handleAccReset();
    }

    handleConSuccess(event)
    {
        this.handleConReset();
    }

    handleOppSuccess(event)
    {
        this.handleOppReset();
    }

    handleShow(event)
    {
        if(event.target.name === "allAcc")
        {
            this.showAllAcc = !this.showAllAcc;
        }
        else if(event.target.name === "allCon")
        {
            this.showAllCon = !this.showAllCon;
        }
        else if(event.target.name === "allOpp")
        {
            this.showAllOpp = !this.showAllOpp;
        }
    }

    handleAccReset(){
        const accinputFields = this.template.querySelectorAll('.acc');
        if(accinputFields)
        {
            accinputFields.forEach(field => {
                field.reset();
            });
        }
        this.createObjRecord = true;
        this.createAcc = false;
        this.createCon = false;
        this.createOpp = false;
        this.selectedObj = "None";   
    }

    handleConReset()
    {
        const coninputFields = this.template.querySelectorAll('.con');
        if(coninputFields){
            coninputFields.forEach(field => {
                field.reset();
            });
        }
        this.createObjRecord = true;
        this.createAcc = false;
        this.createCon = false;
        this.createOpp = false;  
        this.selectedObj = "None";    
    }

    handleOppReset()
    {
        const oppinputFields = this.template.querySelectorAll('.opp');
        if(oppinputFields){
            oppinputFields.forEach(field => {
                field.reset();
            });
        }
        this.createObjRecord = true;
        this.createAcc = false;
        this.createCon = false;
        this.createOpp = false;   
        this.selectedObj = "None";  
    }

    handleSave(event)
    {
        if(event.target.name === "saveAcc")
        {
            this.template.querySelectorAll('.acc').submit();
            
        }
        else if(event.target.name === "saveCon")
        {
            this.template.querySelectorAll('.con').submit();
            
        }
        else if(event.target.name === "saveOpp")
        {
            this.template.querySelectorAll('.opp').submit();
            
        }
    }
}