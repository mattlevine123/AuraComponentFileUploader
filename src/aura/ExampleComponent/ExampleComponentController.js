({
    priorityChange : function(component, event, helper){
        let pickVal = event.getSource().get("v.value");
        component.set("v.priorityVal", pickVal);
    },

    originChange : function(component, event, helper){
        let pickVal = event.getSource().get("v.value");
        component.set("v.originVal", pickVal);
    },

    handleClick : function(component, event, helper){
        helper.createCases(component, event, helper);
    },

    handleFileUpload : function(component, event, helper) {
        let attachmentIds = event.getParam('attachmentIds');
        let del = event.getParam('delete');
        let currentIds = component.get("v.attacmentIds");
        if(del){
            if(currentIds.length > 1){
                for(let i = 0; i < currentIds.length; i++){
                    if (attachmentIds == currentIds[i]){
                        currentIds.splice(i, 1);
                    }
                    currentIds = Array.from(currentIds);
                    component.set("v.attacmentIds", currentIds);
                }
            } else{
                component.set("v.attacmentIds", [])
            }
        } else{
            component.set("v.attacmentIds", attachmentIds);
        }
    }
})