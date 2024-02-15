export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  inrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }

  inrementInActiveToInactive() {
    this.inactiveToActiveCounter++;
    console.log(this.inactiveToActiveCounter);
  }
}
