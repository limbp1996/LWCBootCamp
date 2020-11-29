public with sharing class lookupRecordHandler {
    public lookupRecordHandler() 
    {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAcc(String searchKey) {
        string key = '%' + searchKey + '%';
        List<Account> acctList = [SELECT Id, Name, AccountNumber, Type, Industry, AnnualRevenue FROM Account WHERE Name LIKE :key LIMIT 10];
        if(acctList.size()>0){
            return acctList;
        }
        return null;
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getCon(string accountId) {
        List<Contact> conList = [SELECT Id, Name, Title, Email, Phone FROM Contact WHERE AccountId =: accountId];
        if(conList.size()>0){
            return conList;
        }
        return null;
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAcc(string accountId) {
        List<Account> acctList = [SELECT Id, Name, AccountNumber, Type, Industry, AnnualRevenue FROM Account WHERE Id =: accountId];
        if(acctList.size()>0){
            return acctList;
        }
        return null;
    }
}


