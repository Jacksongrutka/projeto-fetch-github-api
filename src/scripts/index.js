import {getUser} from '/src/scripts/services/user.js'
import {getUserRepos} from '/src/scripts/services/userRepos.js'
import { getUserEvents } from '/src/scripts/services/events.js'
import {user} from '/src/scripts/objects/user.js'
import {screen} from '/src/scripts/objects/screen.js'

const btn = document.getElementById("btn-search")
const input = document.getElementById("input-search")

async function getUserData(userProfile){
    const userResponse = await getUser(userProfile)
    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getUserRepos(userProfile)
    const eventsResponse = await getUserEvents(userProfile)
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)
    console.log(user)
    screen.renderUse(user)
}
function validateEmptyInput(userProfile){
    if(userProfile.length === 0){
        alert("preencha com o nome de um usuario do gitHub")
        return true
    }
}
btn.addEventListener('click', () => {
    let userProfile = input.value
    if(validateEmptyInput(userProfile)) return
    getUserData(userProfile)

})
input.addEventListener('keyup', (e) => {
    const key = e.keyCode
    let userProfile = e.target.value
    if (key === 13){
        if(validateEmptyInput(userProfile)) return
        getUserData(userProfile)
    }
})
getUserData("devemdobro")