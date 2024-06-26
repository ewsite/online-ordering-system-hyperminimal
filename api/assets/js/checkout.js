(function() {


    var totalPrice = 0
    var listsBox = document.getElementById("cart-box-lists")
    var totalPriceLabel = document.getElementById("total-price-label")
    var totalPriceInput = document.getElementById("total-price-input")
    function reload() {
        var cartData = JSON.parse(localStorage.getItem("cart"))


        if (!cartData.length)
            window.location.href = "/"
        
        listsBox.innerHTML = ""

        for (let index = 0; index < cartData.length; index++) {
            let data = cartData[index]
            var container = document.createElement("div")
            var descriptionContainer = document.createElement("div")
            var priceContainer = document.createElement("div")
            var priceLabel = document.createElement("b")
            var nameLabel = document.createElement("h4")
            var descLabel = document.createElement("p")
            var imageContainer = document.createElement("div")
            var img = document.createElement("img")


            img.src = `/assets/img/products/${data.id}.jpg`

            imageContainer.classList.add("cart-box-image")
            container.classList.add("cart-box-list")
            descriptionContainer.classList.add("cart-box-description")
            nameLabel.textContent = data.name

            totalPrice += (data.price * data.quantity)


            priceLabel.textContent = `$${data.price}.00 | ${data.quantity}pc(s)`

            imageContainer.append(img)
            priceContainer.append(priceLabel)
            descriptionContainer.append(nameLabel)
            descriptionContainer.append(descLabel)
            container.append(imageContainer)
            container.append(descriptionContainer)
            container.append(priceContainer)
            listsBox.append(container)
        }
    }

    reload()

    totalPriceLabel.textContent = `$${totalPrice}.00`
    totalPriceInput.value = totalPrice
}())