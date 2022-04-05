import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private _snackBar: MatSnackBar) {}

  /**
   * Displays a notification message
   * @param message message to display
   * @param action action button to display
   */
  showNotification(message: string, action = 'close'): void {
    this._snackBar.open(message, action, { duration: 5000 });
  }
}
