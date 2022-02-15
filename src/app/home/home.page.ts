import { Component } from '@angular/core';
import  {TextToSpeech}  from '@ionic-native/text-to-speech/ngx';
import { TextToSpeechAdvanced, TTSOptions, TTSVoice } from '@ionic-native/text-to-speech-advanced/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Text = [];
  texto:string = "Hola soy texto de prueba y estamos probando tts";

  constructor(
    private ttsAdv: TextToSpeechAdvanced,
  ) {
    this.Text = [
      "Things are going well so far",
      "That's the last straw",
      "The best of both worlds",
      "The person we were just talking about showed up!"      
    ]
  }
  
  reproducir(){
        let ttsvoice : TTSVoice;
        let ttsOps : TTSOptions = {
          text : this.texto,
          identifier: '',
          cancel: true       
        }



        this.ttsAdv.getVoices()
          .then(voices => {
            if(voices.length > 0){
              voices.forEach(v => {
                console.log(v);
                if(v.language.toLocaleLowerCase().indexOf('spanish') || v.language.toLocaleLowerCase().indexOf('español'))
                 { ttsOps.identifier = v.identifier;
                  ttsvoice = v;}
              })
            }else{
              console.log(`no hay voces`);
            }
          })
          .catch(err => console.error(err + `: Error en obtener voces`))
          .finally(() => console.log(`fin de la ejecucion`))



        this.ttsAdv.speak(this.texto)
          .then(() => {
            console.log(`success`);
          })
          .catch(err => console.error(err + `Error al reproducir audio`))
          .finally(() => console.log(`se ejecuto speak`))


        
    }
}

