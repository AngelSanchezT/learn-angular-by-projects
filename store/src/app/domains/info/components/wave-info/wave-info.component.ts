import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-info.component.html',
  styleUrl: './wave-info.component.css'
})
export class WaveInfoComponent {

  @Input({required: true}) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;

  // Cuando los Hijos de este componentes son renderizados se ejecuta este evento
  // Utilizado para obtener el hijo wave para el reproductor de audio.
  ngAfterViewInit() {
    WaveSurfer.create({
        url: this.audioUrl,
        container: this.container.nativeElement
    });
  }

}
