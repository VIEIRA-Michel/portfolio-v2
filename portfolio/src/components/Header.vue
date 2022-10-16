<script>
import logo from '@/assets/logo-portfolio.svg'
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
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12px);
    background: rgba(22, 23, 29, .85);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;

    .header__logo {
        a {
            font-size: 2rem;
            font-weight: 700;
            color: #fff;

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
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #fff;
                    padding: 1rem;
                    transition: all .3s ease-in-out;
                    border-radius: 5px;
                    margin-left: 15px;
                    cursor: pointer;

                    &:hover {
                        color: #ff5a5f;
                        // background: #ff5a5f;
                    }
                }
            }
        }
    }
}
</style>