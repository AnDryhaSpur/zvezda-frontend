class FirstSlider():
    def __init__(self, img, title, link):
        self.img = img
        self.title = title
        self.link = link

first_slides = [FirstSlider(f'load-{x}.jpeg', f'Погрузчик {x}', '#') for x in range(1,4)]