import { baseUrl, eventsQuantity } from '../variables.js'

async function getUserEvents (userProfile){
    const response = await fetch(`${baseUrl}/${userProfile}/events`)
    return await response.json()
}

export { getUserEvents }