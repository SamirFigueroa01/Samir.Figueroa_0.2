function calculatePrice(item) {
      var qty = document.getElementById("qty_" + item).value;
      var price;
      
      // To define prices for each item
      switch (item) {
        case 'basic':
          price = 10;
          break;
        case 'classic':
          price = 15;
          break;
        case 'premium':
          price = 25;
          break;
        default:
          price = 0;
      }
      
      // TO Calculate total price for each item
      var totalPrice = qty * price;
      
      // Display total price
      document.getElementById("price_" + item).value = totalPrice.toFixed(2);
      
      // To Recalculate total price 
      var total = 0;
      var prices = document.querySelectorAll("[id^='price_']");
      prices.forEach(function(element) {
        total += parseFloat(element.value);
      });
      document.getElementById("total_value").innerText = total.toFixed(2);
    }