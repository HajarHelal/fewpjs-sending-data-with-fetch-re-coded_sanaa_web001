
function submitData( name, email ) {
return fetch( 'http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify( {
      name,
      email
    } )
  } )
<<<<<<< HEAD
  .then( function ( response ) {
    return response.json()
  } )
=======

>>>>>>> d27082cbce5f2343a5bdf0fdbadaa7b78f37004c
  .then( function ( object ) {
    document.body.innerHTML = object[ "id" ]
  } )
  .catch( function ( error ) {
    document.body.innerHTML = error.message
  } )
}
