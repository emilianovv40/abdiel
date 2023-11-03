//Verificamos si el navegador soporta Service Workers
if ('serviceWorker' in navigator && 'PushManager' in window) {
    //Registramos el service worker
    navigator.serviceWorker.register('service-worker.js')
    .then((registration) => { 
        console.log('Service Worker registrado con exito.', registration);

        //Solicitamos el permiso para la notificacion
        return Notification.requestPermission();
    })

    .then(permission => {
        if(permission === 'granted') {
            console.log('Permiso de notificacion concedido');

            //Aqui agregamos la notificacion push de la API que estariamos usando.
            return navigator.serviceWorker.ready;
        } else {
            console.log('permiso de notificacion denegado');
        }
    })

    .then(swRegistration => {
        //Aqui deberian de ir la suscripcion a la API que quieres usar.

    })

    .catch((error) => {
    console.log('Error en el registro del service worker', error);
     });
}