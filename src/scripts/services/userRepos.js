import { baseUrl , repositoriesQuantity } from '../variables.js'

async function getUserRepos(userProfile){
    const response = await fetch(`${baseUrl}/${userProfile}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { getUserRepos }