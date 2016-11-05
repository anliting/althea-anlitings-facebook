module.exports=althea=>{
    althea.addPagemodule('/fb',pagemodule)
    althea.addPagemodule('/facebook',pagemodule)
}
function pagemodule(env){
    if(
        env.request.headers.origin&&
        env.request.headers.origin!=env.envVars.allowedOrigin
    )
        return 403
    if(env.request.method=='GET')
        return get(env)
    env.headers['allow']='GET'
    return{
        status:405,
        headers:env.headers,
    }
}
function get(env){
    env.headers['location']=
        'https://www.facebook.com/anlialtting'
    return{
        status:303,
        headers:env.headers,
    }
}