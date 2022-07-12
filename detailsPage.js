$(document).ready(function(){
        $('#header').load('topHEader.html');
        $('#footer').load('footer.html');
        // var category = $('#category').html;
    // var products = $('#products').html;
    // var productName = $('#productName').html;
        var category = 'Clothing';
        var products = 'Men';
        var productName = 'T-shirts';

        // $('#productRoute').text(`${category} > ${products} > ${productName}`);
        $('#productRoute').text("Clothing > Men > T-shirts");
        $('#productName').text("Amazon Brand - Myx Women's Cotton Kurti");
        $('#price').html(`&#8377 299.00 - &#8377 1,007.00`);
        // $('#rating').mdbRate();
       
})

    

    

   