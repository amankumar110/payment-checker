function saveInLocal(object){
   
    localStorage.setItem("accountInfos",JSON.stringify(object));

}
function makeUserPremium(object){
    const firstname = object.firstname.trim();
    const password = object.password.trim();
    const plan = object.plan.trim();
    const localObj =  JSON.parse(localStorage.getItem("accountInfos"));
        if (localObj.firstname === firstname && localObj.password === password){
            if (plan.toLowerCase() === "silver") {
                localObj.premium.paid = true;
                localObj.premium.isSilver = true;

            } else
            if(plan.toLowerCase() === "golden"){
                localObj.premium.paid = true;
                localObj.premium.isGolden = true;
            } else {
                localObj.premium.paid = true;
                localObj.premium.isDiamond = true;
            }
        } else{
            alert("invalid inormation")
        }
    localStorage.setItem("accountInfos",JSON.stringify(localObj));
    };



export {saveInLocal , makeUserPremium};