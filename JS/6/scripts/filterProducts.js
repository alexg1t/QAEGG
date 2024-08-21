//   function captureText(a) { console.log(a); }

// const searchSelector = document.querySelector('input[type="text"]');
// //searchSelector.addEventListener("keyup", captureText);
//  searchSelector.addEventListener("keyup", event=>captureText(event));


function captureText(e) {
    
    const searchSelector = document.querySelector('input[type="text"]');
    const searchText = searchSelector.value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        card.style.display = title.includes(searchText) ? 'block' : 'none';
    });
}



const searchSelector = document.querySelector('input[type="text"]');
searchSelector.addEventListener("keyup",e=>captureText(e));