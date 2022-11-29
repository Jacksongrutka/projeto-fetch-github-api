import { baseUrl , repositoriesQuantity } from '/src/scripts/variables.js'

async function getUserRepos(userProfile){
    const response = await fetch(`${baseUrl}/${userProfile}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { getUserRepos }