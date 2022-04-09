import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [MatSnackBarModule] });
    service = TestBed.inject(NotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open snack bar', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = spyOn((service as any)._snackBar, 'open');
    service.showNotification('hello world!');
    expect(spy).toHaveBeenCalledWith('hello world!', 'close', { duration: 5000 });
  });

  it('should open snack bar with custom button', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = spyOn((service as any)._snackBar, 'open');
    service.showNotification('hello world!', 'custom');
    expect(spy).toHaveBeenCalledWith('hello world!', 'custom', { duration: 5000 });
  });
});
