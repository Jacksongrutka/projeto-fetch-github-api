const btn = document.getElementById("btn-search")
const input = document.getElementById("input-search")
async function user(userProfile){
    const response = await fetch(`https://api.github.com/users/${userProfile}`)
    return await response.json()
}
async function userRepos(userProfile){
    const response = await fetch(`https://api.github.com/users/${userProfile}/repos`)
    return await response.json()
}
function getUserProfile(userProfile){
    user(userProfile).then(userData => {
        let userInfo = `<div class="info">
                            <img src="${userData.avatar_url}" alt="foto do perfil do usuario" />"
                                <div class="data">
                                    <h1>${userData.name ?? "não tem nome cadastrado 😢"}</h1>
                                    <p>${userData.bio ?? "nao tem bio cadastrada 😢"}</p>
                                </div>
                        </div>`;
                        
        document.querySelector('.profile-data').innerHTML = userInfo
    })
}
function getUserRepos(userProfile){
    userRepos(userProfile).then( userRepo => {
        let repositoriesItens = ""
        userRepo.forEach(repo => {
            repositoriesItens += `  <li><a href ="${repo.html_url}">${repo.name}</a></li>`
        });
        document.querySelector('.profile-data').innerHTML +=   `<div class ="section repositories">
                                                                    <h2>Repositories</h2>
                                                                    <ul>
                                                                        ${repositoriesItens}
                                                                    </ul>
                                                                </div>`
    })
}
btn.addEventListener('click', () => {
    let userProfile = input.value
    getUserProfile(userProfile)
    getUserRepos(userProfile)
})
input.addEventListener('keyup', (e) => {
    const key = e.keyCode
    let userProfile = e.target.value
    if (key === 13){
        getUserProfile(userProfile)
        getUserRepos(userProfile)
    }
})