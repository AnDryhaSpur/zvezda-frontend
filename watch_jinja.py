from staticjinja import Site
import context

environment = {
    'first_slides': context.first_slides, #Список слайдов
}

if __name__ == "__main__":
    site = Site.make_site(searchpath="./jinja2", env_globals=environment)
    # enable automatic reloading
    site.render(use_reloader=True)