document.querySelector('#logout-link').addEventListener('click', function(){
    deleteCookie('access_token')
    location.reload()
})

// Функция для удаления куки по имени
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
