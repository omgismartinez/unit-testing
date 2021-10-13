import { CircleComponent } from './circle.component';

describe('CircleComponent', () => {
  
  let component: CircleComponent;

  beforeEach(() => {
    component = new CircleComponent();
  });

  it('should return 0 error if radio < 0', () => {
    const a = component.area(-1);
    expect(a).toBe(0);
  });

  it('should return 314 when radius is 10', () => {
    const a = component.area(10);
    expect(a).toEqual(314);
  });

  it('should return 3.14 when radius is 1', () => {
    const a = component.area(1);
    expect(a).toBe(3.14);
  });

  it('should return 34.1946... when radius is 3.3', () => {
    const a = component.area(3.3);
    expect(a).toBe(34.194599999999994);
  });
});