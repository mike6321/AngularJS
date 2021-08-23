import {LogService} from "./log.service";

export class FactoryService {
  constructor(private logService: LogService, private isFactory: boolean) {
  }
  public log() {
    this.logService.info(`factory ${this.isFactory}`);
  }
}
