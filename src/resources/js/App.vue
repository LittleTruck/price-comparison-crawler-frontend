<template>
    <div class="app" style="max-width: 400px;margin: 0 auto;">
<!--        <Navbar></Navbar>-->
        <router-view></router-view>
    </div>
</template>

<script>
// import './Styles/app.scss'

export default {
    name: 'app',
    components: {
        Navbar: () => import('./Components/Navbar.vue')
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap');

@media (max-width: 639px) {
    html, body {
        font-size: 12px;
    }
}

@media (min-width: 640px) and (max-width: 767px) {
    html, body {
        font-size: 14px;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    html, body {
        font-size: 14px;
    }
}

@media (min-width: 1024px) and (max-width: 1279px) {
    html, body {
        font-size: 15px;
    }
}

@media (min-width: 1280px) and (max-width: 1535px) {
    html, body {
        font-size: 15px;
    }
}

@media (min-width: 1536px) {
    html, body {
        font-size: 18px;
    }
}

@mixin for-phone {
    @media (max-width: 639px) {
        @content;
    }
}

@mixin for-laptop {
    @media (min-width: 640px) and (max-width: 1023px) {
        @content;
    }
}

@mixin for-desktop {
    @media (min-width: 1024px) and (max-width: 1535px) {
        @content;
    }
}

@mixin for-big-desktop {
    @media (min-width: 1536px) {
        @content;
    }
}

$font-color: #555555;
.mobile {
    display: none;
    @include for-phone {
        display: block;
    }
}

.desktop {
    @include for-phone {
        display: none;
    }
}

body, html, #app, .app {
    padding: 0;
    margin: 0;
    font-family: 'Alata', 'Noto Sans TC';
    background-color: #777;
    text-align: center;
}

h1 {
    font-size: 10em;
}

.navBar {
    padding: 5px;
    background-color: #FFF;

    &_link {
        display: flex;
        margin: 0;

        li {
            margin: 10px;
            list-style-type: none;
            font-size: 17px;

            a {
                text-decoration: none;
                color: #555555;
            }
        }
    }
}

.about {
    color: green;
}

</style>
