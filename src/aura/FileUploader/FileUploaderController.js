({
    doInit : function(component, event, helper) {
        helper.getuploadedFiles(component);
    },

    previewFile : function(component, event, helper){
        let recId = event.currentTarget.id;
        $A.get('e.lightning:openFiles').fire({
            recordIds: [recId]
        })
    },

    UploadFinished : function(component, event, helper){
        let uploadedFiles = event.getParam("files");
        let docIds = component.get("v.recordId");
        docIds.push(uploadedFiles[0].documentId);
        let fileEvent = component.getEvent("FileUploaderEvent")
        component.set("v.recordId", docIds);
        helper.getuploadedFiles(component);
        component.find('notifLib').showNotice({
            "variant" : "info",
            "header" : "Success",
            "message" : "File Uploaded Successfully!",
            closeCallback: function(){}
        });
        fileEvent.setParams({
            "attachmentIds" : docIds
        });
        fileEvent.fire();
    },

    delFiles : function(component, event, helper){
        let docIds = event.currentTarget.id;
        component.set("v.Spinner", true);
        let fileEvent = component.getEvent("FileUploaderEvent")
        helper.delUploadedFiles(component, docIds);
        fileEvent.setParams({
            "attachmentIds" : docIds,
            "delete" : true
        });
        fileEvent.fire();

    },
})