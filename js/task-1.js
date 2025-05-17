function isEnoughCapacity(products, containerSize) {
    let total = 0;
  
    for (let key in products) {
      total += products[key];
    }
  
    return total <= containerSize;
  }