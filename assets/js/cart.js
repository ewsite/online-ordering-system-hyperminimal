(function() {

    var listsBox = document.getElementById("cart-box-lists")

    function reload() {
        var cartData = JSON.parse(localStorage.getItem("cart"))

        listsBox.innerHTML = ""

        for (let index = 0; index < cartData.length; index++) {
            let data = cartData[index]
            var container = document.createElement("div")
            var descriptionContainer = document.createElement("div")
            var actionsContainer = document.createElement("div")
            var deleteButton = document.createElement("button")
            var nameLabel = document.createElement("h4")
            var descLabel = document.createElement("p")
    
            container.classList.add("cart-box-list")
            descriptionContainer.classList.add("cart-box-description")
            actionsContainer.classList.add("cart-box-actions")
            deleteButton.classList.add("btn", "danger")
            
            deleteButton.textContent = "Delete"
            nameLabel.textContent = data.name
            descLabel = `${data.price.name} | ${data.price.value}`

            deleteButton.addEventListener("click", () => {
                cartData.splice(index, 1)
                localStorage.setItem("cart", JSON.stringify(cartData))
                reload()
            })
            
            descriptionContainer.append(nameLabel)
            descriptionContainer.append(descLabel)

            actionsContainer.append(deleteButton)
            container.append(descriptionContainer)
            container.append(actionsContainer)
            listsBox.append(container)
        }
    }

    reload()
}())