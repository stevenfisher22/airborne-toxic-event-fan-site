$(function() {
    var data = require('../data/data.json')

    var albumData = data.albums;
    // var count = 0;
    var output = '';
    albumData.forEach((item) => {
        output +='     <div>'
        output +='          <ul>'
        output +='              <li>'
        output +='                  <h2> + item.name + </h2>'
        output +='              <li>'
        output +='          </ul>'
        output +='     </div>';
    
        $('.album-covers').html(output);
    });
})


    // albumCovers

    // html += `
    //     <li>
    //         <h2><a href='/albums/${count}'>${item.name}</a> by ${item.artist}</h2>
    //         <a href='/albums/${count}'><img src='images/${item.artwork}'></a>
    //         <p>${item.summary}</p>
    //     </li>
    // `
    // count++;
