"use strict"

var getPosts = function() {
    const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=3';
    loading.style.display = 'block';
    axios.get(POSTS_URL, {
            responseType: 'json'
        })
        .then(function(res) {
            if (res.status == 200) {
                first_testimonial.innerHTML = res.data[0].body;
                second_testimonial.innerHTML = res.data[1].body;
                third_testimonial.innerHTML = res.data[2].body;
            }
        })
        .catch(function(err) {
            console.log(err);
        })
        .then(function() {
            loading.style.display = 'none';
        });
}
getPosts()

var getUsers = function() {
    const USERS_URL = 'https://jsonplaceholder.typicode.com/users?_limit=3';
    loading.style.display = 'block';
    axios.get(USERS_URL, {
            responseType: 'json'
        })
        .then(function(res) {
            if (res.status == 200) {
                first_person.innerHTML = res.data[0].name
                second_person.innerHTML = res.data[1].name
                third_person.innerHTML = res.data[2].name
            }
        })
        .catch(function(err) {
            console.log(err);
        })
        .then(function() {
            loading.style.display = 'none';
        });
}
getUsers()

// Carrusel
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});