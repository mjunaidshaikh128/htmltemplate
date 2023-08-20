import { Component, OnInit } from '@angular/core';
import { Feature } from 'feature';

import { FeaturesService } from 'src/app/services/features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  fitFeatures: Feature[] = []

  constructor(private featureService: FeaturesService) {}

  ngOnInit(): void {
    this.featureService.getFeatures().subscribe((data) => this.fitFeatures = data)
  }
}
