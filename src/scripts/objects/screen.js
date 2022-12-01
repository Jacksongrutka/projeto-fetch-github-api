const screen = {
    userProfile : document.querySelector('.profile-data'),
    renderUse(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="foto do perfil do usuario" />"
                                        <div class="data">
                                            <h1>${user.name ?? "não tem nome cadastrado 😢"}</h1>
                                            <p>${user.bio ?? "nao tem bio cadastrada 😢"}</p>
                                            <div class ="follow">
                                                <h3>seguidores: ${user.followers}</h3>
                                                <h3>seguindo: ${user.following}</h3>
                                            </div>
                                        </div>
                                      </div>`
        let repositoriesItens = ""
            user.repositories.forEach(repo => repositoriesItens += `<li><a href ="${repo.html_url}" targer_blank>${repo.name}</a></li>`)

            if(user.repositories.length > 0){
                this.userProfile.innerHTML +=   `<div class ="section repositories">
                                                    <h2>Repositories</h2>
                                                    <ul>
                                                        ${repositoriesItens}
                                                    </ul>
                                                </div>`
            }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>usuario nao encontrado<h3>"
    }
}

export { screen }