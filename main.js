const laptops = [
  {
    name: 'HP Essential 3020E 8G 256G',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  {
    name: 'Lenovo IdeaPad Slim 3 12450H 16G 512G',
    price: 469.01,
    stars: 5,
    reviews: 218,
    seller: 'QuantumTech Solutions',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1079/10797786/1581-lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'Alurin Go Start N4020 8G 256G',
    price: 229.9,
    stars: 2,
    reviews: 59,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1066/10663373/1374-alurin-go-start-intel-pentium-n4020-8gb-256gb-ssd-14-comprar.jpg'
  },
  {
    name: 'Acer Nitro V15 13420H 16G 1TB',
    price: 769,
    stars: 5,
    reviews: 136,
    seller: 'CyberPulse Systems',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1079/10792747/1824-acer-nitro-v-15-anv15-51-51pq-intel-core-i5-13420h-16gb-1tb-ssd-rtx-3050-156-review.jpg'
  },
  {
    name: 'HP 15-fd0076ns 1335U 16G 512G',
    price: 599,
    stars: 5,
    reviews: 121,
    seller: 'NovaByte Technologies',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1073/10733266/1752-hp-15-fd0076ns-intel-core-i5-1335u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'MSI Katana 13700H 16G 1TB',
    price: 1399,
    stars: 5,
    reviews: 45,
    seller: 'SiliconVista Tech',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1074/10745674/165-msi-katana-17-b13vgk-694xes-intel-core-i7-13700h-16gb-1tb-ssd-rtx-4070-173.jpg'
  },
  {
    name: 'Asus Zenbook 1260P 16GB 512GB',
    price: 999,
    stars: 4,
    reviews: 5,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1077/10771401/1552-asus-zenbook-14-oled-ux3402va-km209w-intel-evo-core-i7-1360p-16gb-512gb-ssd-14.jpg'
  },
  {
    name: 'PcCom Revolt 13500H 16GB 1TB',
    price: 1159.91,
    stars: 4,
    reviews: 4,
    seller: 'ByteFusion Innovations',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1075/10755873/1113-pccom-revolt-4050-intel-core-i5-13500h-16gb-1tb-rtx-4050-156-windows-11.jpg'
  },
  {
    name: 'ASUS ROG Strix 13650HX 32GB 1TB',
    price: 1599,
    stars: 5,
    reviews: 62,
    seller: 'ApexTech Emporium',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1072/10720423/123-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16.jpg'
  },
  {
    name: 'HP Zbook Power 7940HS 32GB 1TB',
    price: 2299,
    stars: 5,
    reviews: 5,
    seller: 'TitanPC Dynamics',
    image:
      'https://thumb.pccomponentes.com/w-140-140/articles/1076/10764003/6721-hp-zbook-power-g10-a-amd-ryzen-9-7940hs-32gb-1tb-ssd-rtx-2000-156-pt-9dd3514b-4007-40ac-8e33-77d1a76c14b7.jpg'
  }
]

const printLaptops = (laptops) => {
  const laptopSection = document.querySelector('.products')

  laptopSection.innerHTML = ``

  for (const laptop of laptops) {
    const imgUrl = document.createElement('img')
    const name = document.createElement('p')
    const price = document.createElement('h3')
    const divStars = document.createElement('div')
    const reviews = document.createElement('h4')
    const seller = document.createElement('p')

    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      if (i <= laptop.stars) {
        estrella.classList.add('rellena')
      }
      divStars.append(estrella)
    }

    imgUrl.src = laptop.image
    name.textContent = laptop.name
    price.textContent = `${laptop.price} €`
    reviews.textContent = `(${laptop.reviews})`
    seller.textContent = laptop.seller

    const divImg = document.createElement('div')
    const divName = document.createElement('div')
    const divPrice = document.createElement('div')
    const divValoration = document.createElement('div')
    const divSeller = document.createElement('div')
    const divLaptop = document.createElement('div')

    divImg.classList.add('imgContainer')
    divStars.classList.add('estrellas', 'flex-container')
    divValoration.classList.add('valoration', 'flex-container')

    divImg.append(imgUrl)
    divName.append(name)
    divPrice.append(price)
    divValoration.append(divStars)
    divValoration.append(reviews)
    divSeller.append(seller)
    divLaptop.append(divImg)
    divLaptop.append(divName)
    divLaptop.append(divPrice)
    divLaptop.append(divValoration)
    divLaptop.append(divSeller)
    laptopSection.append(divLaptop)

    laptopSection.classList.add('flex-container')
  }
}

const filtrarPorVendedor = (event) => {
  const selectedVendedor = event.target.value

  if (selectedVendedor === 'todos') {
    printLaptops(laptops)
  } else {
    const filtered = laptops.filter(
      (laptop) => laptop.seller === selectedVendedor
    )
    printLaptops(filtered)
  }
}

const filtrarPorPrecio = (event) => {
  const inputPrecio = event.target.previousElementSibling
  const precioFiltro = parseFloat(inputPrecio.value)

  if (!isNaN(precioFiltro)) {
    const filtered = laptops.filter((laptop) => laptop.price < precioFiltro)
    printLaptops(filtered)
  } else {
    alert('Por favor, ingrese un número válido para el precio.')
  }
}

const limpiarFiltros = () => {
  printLaptops(laptops)
}

const createSelectVendedor = () => {
  const divFiltros = document.querySelector('.filter')

  if (divFiltros) {
    const selectVendedor = document.createElement('select')

    const optionTodos = document.createElement('option')
    optionTodos.value = 'todos'
    optionTodos.textContent = 'Todos los vendedores'
    selectVendedor.appendChild(optionTodos)

    const uniqueVendedores = Array.from(
      new Set(laptops.map((laptop) => laptop.seller))
    )

    uniqueVendedores.forEach((vendedor) => {
      const optionVendedor = document.createElement('option')
      optionVendedor.value = vendedor
      optionVendedor.textContent = vendedor
      selectVendedor.appendChild(optionVendedor)
    })

    divFiltros.appendChild(selectVendedor)

    selectVendedor.addEventListener('change', filtrarPorVendedor)
  } else {
    console.error("Elemento con class 'filter' no encontrado")
  }
}

const createPrecioFilter = () => {
  const divFiltros = document.querySelector('.filter')
  const inputPrecio = document.createElement('input')
  const btnBuscar = document.createElement('button')

  inputPrecio.type = 'number'
  inputPrecio.placeholder = 'Introduce el precio'
  btnBuscar.textContent = 'Buscar'

  divFiltros.appendChild(inputPrecio)
  divFiltros.appendChild(btnBuscar)

  btnBuscar.addEventListener('click', filtrarPorPrecio)
}

const createLimpiarFiltrosButton = () => {
  const divFiltros = document.querySelector('.filter')
  const btnLimpiar = document.createElement('button')

  btnLimpiar.textContent = 'Limpiar Filtros'

  divFiltros.appendChild(btnLimpiar)

  btnLimpiar.addEventListener('click', limpiarFiltros)
}

createSelectVendedor()
createPrecioFilter()
createLimpiarFiltrosButton()
printLaptops(laptops)

const compromisos = [
  {
    imagen:
      'https://cdn.pccomponentes.com/img/repositorio/home/opcion-01-quienes-grey-min.webp',
    texto: 'Quiénes somos'
  },
  {
    imagen:
      'https://cdn.pccomponentes.com/img/repositorio/home/opcion-01-compromisos-grey-min.webp',
    texto: 'Nuestros compromisos'
  },
  {
    imagen:
      'https://cdn.pccomponentes.com/img/repositorio/home/opcion-01-nosotros-grey-min.webp',
    texto: 'Opina sobre nosotros'
  },
  {
    imagen:
      'https://cdn.pccomponentes.com/img/repositorio/home/opcion-01-servicios-grey-min.webp',
    texto: 'Nuestros servicios'
  },
  {
    imagen:
      'https://cdn.pccomponentes.com/img/repositorio/home/opcion-01-prensa-grey-min.webp',
    texto: 'Sala de prensa'
  }
]

const printCompromisos = (compromisos) => {
  const sectionCompromisos = document.querySelector('.compromisos')

  for (const compromiso of compromisos) {
    const image = document.createElement('img')
    const h4 = document.createElement('h4')

    image.src = compromiso.imagen
    h4.textContent = compromiso.texto

    const div = document.createElement('div')

    div.append(image)
    div.append(h4)
    sectionCompromisos.append(div)
  }
  sectionCompromisos.classList.add('flex-container')
}
printCompromisos(compromisos)
