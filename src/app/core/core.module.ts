import { NgModule, LOCALE_ID } from '@angular/core';
import {
  ApiInformationRegistryConfigSimple, ApiRegistryModule, InformacionPuestoModule, EntornoModule,
  ApplicationModule
} from '@morphe/common';
import { IntranetModule } from '@morphe/seguridad';
import { BasicHttpClientModule, ApplicationManifestModule } from '@morphe/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, CommonModule } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

export const apiRegistryConfig: Array<ApiInformationRegistryConfigSimple> = [
  { cgdnCode: 'CGDNCODEAPI', version: '', allApikey: 'XXXXX-XXXX-XXXX-XXXX-XXXXXX', apikeyList: [] }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ApplicationModule.forRoot('VNTR'),
    EntornoModule.forRoot(),
    InformacionPuestoModule.forRoot(),
    ApiRegistryModule.forRoot(apiRegistryConfig),
    IntranetModule.forRoot(),
    ApplicationManifestModule.forRoot(),
    BasicHttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
  ],
  declarations: []
})
export class CoreModule { }
