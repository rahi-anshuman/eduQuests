import { hooks } from "../Data/React/Hooks";
function getComponetReactData(url_data){
    if(url_data === "/react/hooks")
        return hooks;
    else if(url_data === "/react/forms")
        return [{"title":"form content is in progress"}];
    else if(url_data === "/react/customhooks")
        return [{"title":"custom hooks content is in progress"}];
    else if(url_data === "/react/router")
        return [{"title":"router content is in progress"}];
    else if(url_data === "/react/basics")
        return [{"title":"basics content is in progress"}];
    else if(url_data === "/react/statemanagement")
        return [{"title":"state management content is in progress"}];
}

export {getComponetReactData};
