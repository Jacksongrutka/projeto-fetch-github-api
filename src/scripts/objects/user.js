const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName:'',
    repositories:[],
    events:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(events){
        let onlyCreateAndPushEvent = events.filter(function(event){
            return event.type === 'PushEvent' || event.type === 'CreateEvent'
        })

        let eventsQuantity = []

        onlyCreateAndPushEvent.forEach(function(event){
            if(eventsQuantity.length <= 9){
                eventsQuantity.push(event)
            }
        })
        this.events = eventsQuantity
        
    },
}
export { user }