function aumentarLikes(id){
    const likesElement = document.getElementById(id);
    let currentLikes= parseInt(likesElement.textContent)
    currentLikes++;
    likesElement.textContent = (currentLikes === 1 ? 'like' : 'like')
}