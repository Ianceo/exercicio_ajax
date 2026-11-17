document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const repos = document.getElementById('repositorio');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('link');

    const endpoint = 'https://api.github.com/users/Ianceo';

    fetch(endpoint)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao buscar dados do GitHub');
            }
            return response.json();
        })
        .then((json) => {
            avatar.src = json.avatar_url;
            name.innerText = json.name || 'Sem nome';
            username.innerText = `@${json.login}`;
            repos.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            linkElement.href = json.html_url;
        })
});