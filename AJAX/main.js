$('#hakulomake').submit(function (event) {
    event.preventDefault();
        //const proxy = 'https://api.allorigins.win/get?url=';
        const osoite = $(this).attr('action');
        const hakulause = $(this).serialize();
        const url = osoite + '?' + hakulause;
        $('#tulos').empty();

    $.getJSON(url, function(sarjat){
        //console.log(JSON.parse(sarjat.contents));
        console.log(sarjat);

        $.each(sarjat, function(i, sarja){
            $('#tulos').append(`<div>${sarja.show.name}</div>`);

            $('#tulos').append(
                `<div><img src="${
                    sarja.show.image ? 
                    sarja.show.image.medium : 
                    'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'}" alt="${sarja.show.name
                    }"></div>`);

            $('#tulos').append(
                `<div><a href="${
                    sarja.show.officialSite || sarja.show.url
                }" target="_blank">Linkki kotisivulle</a></div>`);

            $('#tulos').append(`<div>${sarja.show.genres.join(', ')}</div>`);

            $('#tulos').append(`<div>${sarja.show.summary}</div>`);
        });
    });
});