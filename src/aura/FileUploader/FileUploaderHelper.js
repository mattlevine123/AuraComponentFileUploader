({
    getuploadedFiles : function(component) {
        let action = component.get("c.getFiles");
        action.setParams({
            "recordId":component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state == "SUCCESS"){
                let result = response.getReturnValue();
                component.set("v.files", result);
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },

    delUploadedFiles : function(component, docIds){
        let action = component.get("c.deleteFiles");
        action.setParams({
            "deleteIds":docIds
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state == "SUCCESS"){
                this.getuploadedFiles(component);
                component.set("v.Spinner", false);
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
})