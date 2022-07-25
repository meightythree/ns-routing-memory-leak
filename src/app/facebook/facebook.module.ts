import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FacebookComponent } from "./facebook.component";

import { FacebookRoutingModule } from "./facebook.routing.module";

@NgModule({
    declarations: [FacebookComponent],
    imports: [FacebookRoutingModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class FacebookModule {}