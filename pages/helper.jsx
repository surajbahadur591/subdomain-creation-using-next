export const getSubDomain = (host) => {
    console.log('from helper function', host)
    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
    return arr
}