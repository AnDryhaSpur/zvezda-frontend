from staticjinja import Site
import context

environment = {
    'top_slides': context.top_slides_list,
    'catalog': context.catalog_list,
    'benefits': context.benefits_list,
    'merits': context.merits_list,
}

if __name__ == "__main__":
    site = Site.make_site(searchpath="./jinja2", env_globals=environment)
    # enable automatic reloading
    site.render(use_reloader=True)