<script setup>
</script>

<template>
    <header>
        <div class="header__logo">
            <a href="">mv<span>.</span></a>
        </div>
        <nav class="header__navbar">
            <ul class="header__navbar__list">
                <li class="header__navbar__list__item">
                    <a>À propos</a>
                </li>
                <li class="header__navbar__list__item">
                    <a>
                        Projets
                    </a>
                </li>
                <li class="header__navbar__list__item">
                    <a>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
* {
    font-family: 'Poppins', sans-serif;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    backdrop-filter: blur(12px);
    color: var(--text-color);
    -webkit-animation: appear 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.9s both;
    animation: appear 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.9s both;

    .header__logo {
        a {
            font-size: 32px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;

            span {
                color: #ff5a5f;
                font-weight: bold;
            }
        }
    }

    .header__navbar {
        .header__navbar__list {
            display: flex;
            list-style: none;

            .header__navbar__list__item {
                a {
                    font-size: 17px;
                    font-weight: 100;
                    color: #fff;
                    padding: 10px;
                    transition: all .3s ease-in-out;
                    border-radius: 5px;
                    margin-left: 15px;
                    cursor: pointer;

                    &:hover {
                        color: #ff5a5f;
                        background: var(--background--secondary);
                    }
                }
            }
        }
    }
}
</style>