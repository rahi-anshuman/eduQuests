function getImageUrl(name){
    if (name === "Custom Hooks")
        name = "Custom_Hooks";
    else if(name === "State Management")
        name = "State_Management"
    return new URL(`../static/img/${name}.png`,import.meta.url).href;
}

export {getImageUrl}