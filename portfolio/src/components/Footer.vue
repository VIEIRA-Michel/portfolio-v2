<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__container__contact" id="contact">
                <a href="mailto:michelvieira.pro@gmail.com">
                    <fa icon="fa-solid fa-envelope" />
                </a>
                <a href="https://www.linkedin.com/in/michelvieira23/">
                    <fa icon="fa-brands fa-linkedin" />
                </a>
                <a href="https://github.com/VIEIRA-Michel">
                    <fa icon="fa-brands fa-github" />
                </a>
            </div>
            <div class="footer__container__copyright">
                <p>© 2022 michelvieira.com</p>
            </div>
        </div>
    </footer>
</template>
<style scoped lang="scss">
* {
    font-family: 'Poppins', sans-serif;
    color: var(--text-color);
}

.footer {

    &__container {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        height: 100px;
        padding-top: 40px;
        padding-bottom: 40px;
        border-top: 2px solid var(--background--secondary);

        &__copyright {
            margin-right: 15px;
        }

        &__contact {
            display: flex;
            flex-direction: row;
            align-items: center;
            display: flex;
            justify-content: center;
            margin-left: 15px;

            a {
                background-color: var(--background--secondary);
                padding: 10px;
                margin-right: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                border-radius: 5px;
                opacity: 0.8;

                &:hover {
                    background-color: var(--background--secondary);
                    opacity: 1;
                    transition: all 0.3s ease-in-out;
                }

                svg {
                    background-size: cover;
                    color: #e5e8ef;
                    font-size: 24px;
                }
            }
        }

        &__logo {
            @media (max-width: 991px) {
                display: hidden;
            }

            @media (min-width: 992px) {
                display: block;
            }

            a {
                font-size: 32px;
                font-weight: 600;
                color: #fff;
                text-decoration: none;

                span {
                    color: #ff5a5f;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>