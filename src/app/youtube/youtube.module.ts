import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { YoutubeComponent } from "./youtube.component";

import { YoutubeRoutingModule } from "./youtube.routing.module";

@NgModule({
    declarations: [YoutubeComponent],
    imports: [YoutubeRoutingModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class YoutubeModule {}