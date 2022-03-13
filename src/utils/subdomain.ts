export const getSubdomain = () => {
    let subdomain;
    const host = window.location.host;
    const array = host.split(".").slice(0, host.includes('localhost') ? -1 : -2);
    if(array.length > 0) subdomain = array[0] ;
    
    if(subdomain === undefined) subdomain =  new Error("Subdomain did not finded")

    return subdomain
}