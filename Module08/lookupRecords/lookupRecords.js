import { LightningElement, wire, api} from 'lwc';
import findAcc from "@salesforce/apex/lookupRecordHandler.findAcc";
import getCon from "@salesforce/apex/lookupRecordHandler.getCon";
import getAcc from "@salesforce/apex/lookupRecordHandler.getAcc";

const columns=[
    {
        label: 'Name',
        fieldName: 'Name'
    },
    {
        label: 'Title',
        fieldName: 'Title'
    },
    {
        label: 'Email',
        fieldName: 'Email',
        type: 'email'
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone'
    }
];

export default class LookupRecords extends LightningElement {
    searchKey='';
    accountId = "null";
    columns = columns;
    showCon = false;
    accountName = '';

    @wire(findAcc, {searchKey: "$searchKey"})
    acc;

    @wire(getCon, {accountId: "$accountId"})
    con;

    @wire(getAcc, {accountId: "$accountId"})
    currentAcc;

    handleKeyChange(event){
        this.searchKey = event.target.value;
    }

    handleClick(event){
        this.showCon = true;
        this.accountId = event.currentTarget.value;
        
    }

    handleReset(){
        this.showCon = false;
        this.searchKey='';
    }
}