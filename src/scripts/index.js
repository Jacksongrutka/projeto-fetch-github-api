const btn = document.getElementById("btn-search")
const input = document.getElementById("input-search")
async function user(userProfile){
    const response = await fetch(`https://api.github.com/users/${userProfile}`)
    return await response.json()
}
function getUserProfile(userProfile){
    user(userProfile).then(userData => {
        let userInfo = `<img src="${userData.avatar_url} alt="foto do perfil do usuario" />"
                        <div class="data">
                            <h1>${userData.name ?? "não tem nome cadastrado 😢"}</h1>
                            <p>${userData.bio ?? "nao tem bio cadastrada 😢"}</p>
                        </div>`;
        document.querySelector('.profile-data').innerHTML = userInfo
    })
}
btn.addEventListener('click', () => {
    let userProfile = input.value
    getUserProfile(userProfile)
})