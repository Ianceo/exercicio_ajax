document.addEventListener('DOMContentLoaded', async () => {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const repositorio = document.getElementById('repos');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('link');

    const endpoint = 'https://api.github.com/users/Ianceo';

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados do GitHub (status ${response.status})`);
        }

        const json = await response.json();

        avatar.src = json.avatar_url;
        name.innerText = json.name || 'Sem nome';
        username.innerText = `@${json.login}`;
        repositorio.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        link.href = json.html_url;
    } catch (error) {
        console.error(error);
        name.innerText = 'Não foi possível carregar o perfil';
    }
});