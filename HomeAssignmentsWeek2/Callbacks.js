let browser = 'Chrome'  //Global variable declaration

//callback function - Invoke
function checkBrowserVersion(callback){
    setTimeout(()=>{
        callback(browser)},2000)     
}
//callback function    
function logBrowserVersion(version){
    console.log(`Browser Version: ${version}`)
}

checkBrowserVersion(logBrowserVersion)