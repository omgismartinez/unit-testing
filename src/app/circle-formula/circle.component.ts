export class CircleComponent {
  PI:    number = 3.14
  radio: number = 0
  r:     number = 0

  area(radio: number) {
    this.r = this.PI * (radio * radio)

    if (radio < 0) {
      this.r = 0;
    }
    return this.r
  }
}
