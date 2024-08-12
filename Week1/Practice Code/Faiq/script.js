const apiURL = 'https://fakestoreapi.com/products';
fetch(apiURL)
  .then(function(response) {
    return response.json(); 
  })
  .then(function(productsData) {
    const tbdy = document.querySelector('#products tbody');
    productsData.forEach(function(product) {
      const row = document.createElement('tr');
      row.innerHTML = '<td>' + product.id + '</td>' +
                      '<td>' + product.title + '</td>' +
                      '<td>$' + product.price + '</td>' +
                      '<td>' + product.category + '</td>' +
                      '<td>' + product.rating.rate + '</td>' +
                      '<td>' + product.rating.count + '</td>';
      tbdy.appendChild(row);
    });
    
    
    console.log("Average Rating:", avg(productsData));
    console.log("Electronics category", filterbyCategory(productsData, "electronics"));
    console.log("Expensive Product:", ExpensiveProduct(productsData));
  })
  .catch(function(error) {
    console.log('Error 404 Data not Found', error); 
  });

// Function to calculate the average rating of products
function avg(products) 
{
  let sum = 0;
  products.forEach(function(product) 
  {
    sum += product.rating.rate;
  });
  const average = sum / products.length;
  return average.toFixed(2);
}

// Function to filter products by category
function filterbyCategory(products, Category) 
{
  let fp = products.filter(function(product) 
  {
    return product.category === Category;
  });
  return fp.map(function(product) 
  {
    return product.title;
  });
}

// Function to find the most expensive product using reduce
function ExpensiveProduct(products) 
{
  let mostExpensive = products.reduce(function(mp, cp) 
  {
    return cp.price > mp.price ? cp : mp;
  });
  return mostExpensive.title;
}
