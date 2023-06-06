$(document).ready(function() {
    let button = $('button');
    let ul = $('ul');
    let li = $('li');
    console.dir(li);
    //button.delegate
    button.on()('click', function(){
        $(this).text('pushered');
        ul.css('border', '2px dashed #000')
        let temp = '<li>2</li>';
        ul.prepend(temp);
        ul.after(temp);
        ul.append(temp);
        ul.before(temp);
    })
    // li.click(function(){
    //     //$(this).remove()
    //     let c = $(this).clone();
    //     c.addClass('copy')
    //     ul.append(c);
    // })
    li.click(function(){
        //$(this).remove()
        let c = $(this).clone(true);
        c.addClass('copy')
        ul.append(c);
    })
    ul.delegate('li', 'click', function() {
        let c = $(this).clone();
        c.addClass('copy');
        ul.append(c);
    })
})

button.on('click', function(){
    let c = '<div>'
    let f = '</div>'
    $(this).before(c).after(f);
})
button.on('click', function(){
    let c = '<div>'
    let f = '</div>'
    $(this).wrap('<div class="copy">')
})
button.on('click', function(){
    li.wrap('<div class="copy">')
})
button.on('click', function(){
    li.wrapAll('<div class="copy">')
})
button.on('click', function(){
    li.wrapInner('<span class="copy">')
})
button.on('click', function(){
    li.unwrap('<span class="copy">')
})
li.click(function() {
    //console.log($(this).attr());
    let c=$(this).attr('title', 'kkkk');
    let d=$(this).attr('class');
    console.log(c, d);
})
li.click(function() {
    let c=$(this).removeAttr('title');
    let e=$(this).hasAttr('title');
    let d=$(this).data('data-price', '56');
    console.log(c);
})

li.each(function(elem) {
    $(this).text('d')
})