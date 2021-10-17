public with sharing class FileUploaderController {
    @AuraEnabled
    public static list<ContentDocument> getFiles(List<string> recordId){
        return [SELECT Id, Title, FileType FROM ContentDocument WHERE Id IN: recordId];
    }

    @AuraEnabled
    public static void deleteFiles(string deleteIds){
        delete [SELECT Id, Title, FileType FROM ContentDocument WHERE id =: deleteIds];
    }
}