import { baseUrl } from '../variables.js'

async function getUser(userProfile){
    const response = await fetch(`${baseUrl}/${userProfile}`)
    return await response.json()
}

export { getUser }