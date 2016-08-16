$.ajax('/profile:' + username)
    .done(function(users) {

        for (var i = 0; i < newUser.length; i++) {

            $('#profile-header').append(

                `
                    <h1>First Name: ${newUser[i].firstname}</h1>
                    <h1>Last Name: ${newUser[i].lastname}</h1>
                    <h3>Who do you need to keep in touch with this week? </h3>
                `
            );

        }

    }).fail(function(error) {
        console.log('There was an error ' + error);
    });
