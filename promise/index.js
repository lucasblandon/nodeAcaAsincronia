const promesa = new Promise((resolve,reject) =>{
    const bandera = 5
    if (bandera === 5 ){
        resolve('Sucess')
    } else {
        reject(new Error('Internal Sever Error 500'))

    }

})
 
promesa.then(response => console.log(response))
    .catch(err => console-log(err))