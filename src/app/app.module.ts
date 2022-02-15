import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TextToSpeechAdvanced } from '@ionic-native/text-to-speech-advanced/ngx'
import { TextToSpeech }  from '@ionic-native/text-to-speech/ngx'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy },
      TextToSpeech,
      TextToSpeechAdvanced
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
