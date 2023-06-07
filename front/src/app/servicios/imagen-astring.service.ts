import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenAStringService {

  constructor() { }

  getBase64(file:File):Promise<string>{
    return new Promise<string> ((resolve,reject)=> {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || '');
      reader.onerror = error => reject(error);
    })
  }
  /**
   * Cosas a escribir fuera del servicio:
   * -Como debe verse el html
   * <input type="file" (change)="handleFileInput($event)">
   * 
   * -Metodo en el componente para conseguir el string
   * handleFileInput(event:Event){
      const target= event.target as HTMLInputElement
      this.file = (target.files as FileList)[0]
      this.imgService.getBase64(this.file).then(data=>this.tattoo.imagen = data)
    }
    -El metodo recoge el evento que le mandas cuando cambias el input del archivo
    -Pilla el fichero, lo convierte en base64 y mete la información directamente en
      la imagen de un tattoo. Si se quiere guardar eso en otro lado, en la ultima linea
      del metodo habría que cambiar el "this.tattoo.imagen" a cualquier otra variable
      de tipo string.
   */
}