class TopSlider():
    def __init__(self, img, title, text):
        self.img = img
        self.title = title
        self.text = text


top_slides_list = [
    TopSlider(img="img/slides/new_color.jpg",
              title="Представляем новые цвета бренда ZVEZDA",
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe optio nisi illo maiores officiis id perferendis natus nobis nemo."),
    TopSlider(img="img/slides/new_model.jpg",
              title="Новая модель - телескопический погрузчик ZVEZDA TL3000",
              text="Nostrum saepe optio nisi illo maiores officiis id perferendis natus nobis nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit."),
    TopSlider(img="img/slides/new_shipment.jpg",
              title="Большой завоз новой техники",
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe optio nisi illo maiores officiis id perferendis natus nobis nemo."),
]


class Catalog():
    def __init__(self, img, title, price, mass, capacity, bucket_size):
        self.img = img
        self.title = title
        self.price = price
        self.mass = mass
        self.capacity = capacity
        self.bucket_size = bucket_size


models = ["LX100F", "LX180F", "LX280F", "LX300F",
          "LX330G", "ZL15E", "ZL15G", "ZL20G"]
catalog_list = [
    Catalog(img=f"img/catalog/{title}.jpg",
            title=title,
            price=150000*index,
            mass=1000+500*index,
            capacity=500+250*index,
            bucket_size=round(0.7+0.2*index, 2)
            ) for index, title in enumerate(models)
]


class Benefits():
    def __init__(self, img, title, text):
        self.img = img
        self.title = title
        self.text = text


benefits_list = [
    Benefits(img="img/benefits/1.jpg",
             title="Производительность",
             text="Надёжные двигатели мировых производителей DEUTZ (Германия), WEICHAI (Китай), CUMMINS (США), YUCHAI (Китай), PERKINS (Англия)"),
    Benefits(img="img/benefits/2.jpg",
             title="Качество",
             text="Рабочие агрегаты и комплектующие проверенного качества. Гидравлические насосы (SEM); Ведущие мосты («LAIYANG» поставщик SEM); Коробка передач («Xin Li De» поставщик SEM)"),
    Benefits(img="img/benefits/3.jpg",
             title="Безопасность",
             text="Усиленная рама с запасом прочности. Повышенная устойчивость к изгибу и скручиванию. При производстве рамы и ковша погрузчика используются роботы-сварщики фирмы «Panasonic»(Япония)"),
    Benefits(img="img/benefits/4.jpg",
             title="Комфорт",
             text="Адаптированны для российских условий эксплуатации. Утеплённая кабина; Две жидкостные печки; Подогреватель двигателя; Вездеходные шины; Биметаллические втулки; Масла в агрегатах до -35С"),

]


class Merits():
    def __init__(self, prefix, number, title, text):
        self.prefix = prefix
        self.number = number
        self.title = title
        self.text = text


merits_list = [
    Merits(prefix="Более",
           number=11,
           title="Лет на рынке",
           text="Надежная техника и качественный сервис - залог отличной репутации и процветания компании"),
    Merits(prefix="Более",
           number=200,
           title="Единиц проданной техники",
           text="Множество довольных нашей техникой клиентов по всей России и СНГ"),
    Merits(prefix="До",
           number=1000,
           title="Наименований запчастей в наличии",
           text="Помощь в подборе запчастей и ремонте техники даже в постгарантийный период"),
]
