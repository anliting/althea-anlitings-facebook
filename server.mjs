function pagemodule(env){
    if(!env.althea.allowOrigin(env.envVars,env.request.headers.origin))
        return 403
    if(env.request.method=='GET')
        return get(env)
    env.headers.allow='GET'
    return{
        status:405,
        headers:env.headers,
    }
}
function get(env){
    env.headers.location='https://www.facebook.com/anlitingcom'
    return{
        status:303,
        headers:env.headers,
    }
}
function Plugin(althea){
    this._althea=althea
    althea.addPagemodule('/fb',pagemodule)
    althea.addPagemodule('/facebook',pagemodule)
}
Plugin.prototype.end=function(){
    this._althea.cutPagemodule('/fb')
    this._althea.cutPagemodule('/facebook')
}
Plugin.prototype.shutdownEnd=function(){
}
export default Plugin
