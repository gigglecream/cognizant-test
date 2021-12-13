import { Component } from '@angular/core';
import { AppFeature } from './model/application';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appFeatures: AppFeature[] = [];
  archivedAppFeatures: AppFeature[] = [];
  editMode: boolean = false;
  addMode: boolean = false;
  expanded: boolean = false;
  editFeatureItem: AppFeature[] = [];
  addFeatureItem: AppFeature[] = [];

  fetchApplications() {
    for(let i = 0; i < 10; i++){
      this.appFeatures[i] = {technicalName: "test" + i, enabled: true, applicationIds:["test" + i]};
    } //fetch mock applications
  }

  archievFeature(feature: AppFeature) {
    this.appFeatures = this.appFeatures.filter(obj => obj !== feature);
    this.archivedAppFeatures.push(feature);
  }

  editFeature(feature: AppFeature) {
    this.editFeatureItem[0] = feature;
    this.editMode = true;

  }

  updateFeature(feature: AppFeature) {
    let tempArr = this.appFeatures;
    for(let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].technicalName === feature.technicalName){
        tempArr[i] = feature;
        break;
      }
    }
    this.appFeatures = tempArr;
    this.editMode = false;
  }

  addFeature() {
    this.addFeatureItem[0] = {
      displayName: '',
      technicalName: '',
      effectiveDate: new Date(),
      description: '',
      enabled: false,
      applicationIds: []
    };
    this.addMode = true;
  }

  saveAddFeature() {
    this.appFeatures.push(this.addFeatureItem[0]);
    this.addFeatureItem = [];
    this.addMode = false;
  }
}
