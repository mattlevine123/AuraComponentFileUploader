({
    createCases : function(component, event, helper) {
        
        let origin = component.get("v.originVal");
        let priority = component.get("v.priorityVal");
        let subject = component.find('subject').get("v.value");
        let attachmentIds = component.get("v.attacmentIds");
        let acctId = component.get("v.recordId")
        let action = component.get("c.crcase");
        action.setParams({
            "origin" : origin,
            "priority" : priority,
            "subject" : subject,
            "acctId" : acctId,
            "attachmentIds" : attachmentIds
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state == "SUCCESS"){
                location.reload();
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("UnknownError")
                }
            }
        });
        $A.enqueueAction(action);
    }
})
