function soyUnCallback(data){
    console.log(data);
}

function haciendoUnaPeticionHTTP(callback){
    console.log('Estoy realizando cosita');
    console.log('Ya casi temino...');
    callback({
        id:1,
        username:'Lucas_Blandon',
        edad: 25
    })
}

haciendoUnaPeticionHTTP(soyUnCallback);