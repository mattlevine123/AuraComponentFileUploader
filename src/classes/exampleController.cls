public with sharing class exampleController {
    @AuraEnabled
    public static void crcase(string origin, string priority, string subject, List<string> attachmentIds, string acctId){ //string caseData, List<string> attachmentIds
        //System.debug('case Data === ' + caseData);
        System.debug('attachment Ids === ' + attachmentIds);
        Set<string> attchIds = new Set<String>();
        //Remove Duplicate Ids
        if(attachmentIds != null){
            attchIds = new Set<string>(attachmentIds);
            attachmentIds = new List<String>(attchIds);
        }

        Case caseRec = new Case(Origin = origin, AccountId = acctId, Subject = subject, Status = 'New');
        upsert caseRec;
        //attach docs to case records
        if(attachmentIds != null){
            list<ContentDocumentLink> conDocList = new list<ContentDocumentLink>();
            for(integer i = 0; i < attachmentIds.size(); i++){
                ContentDocumentLink cdl = new ContentDocumentLink();
                Id docId = id.valueOf(attachmentIds[i]);
                cdl.LinkedEntityId = CaseRec.Id;
                cdl.ContentDocumentId = docId;
                conDocList.add(cdl);
            }
            upsert conDocList;
        }
    }
}