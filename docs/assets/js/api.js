

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/BrunoDev2003/Javascript-developer-dio/portfolio-projeto/docs/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}