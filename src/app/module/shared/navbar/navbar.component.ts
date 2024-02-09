import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store, createSelector, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { AuthComponent } from '../../auth/auth.component';
import { UserService } from 'src/app/state/User/user.service';
// import { AuthComponent } from '../Module/auth/auth.component';

// import {
//   MatDialog,
//   MatDialogConfig,
//   MatDialogRef,
// } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private userService: UserService,
    private store: Store<AppState> //
  ) // private _snackBar: MatSnackBar
  { }

  isProfileMenuOpen: boolean = false;
  userProfile: any;

  // dialogRef?: MatDialogRef<AuthComponent>;

  selectUser = createSelector(
    (state: AppState) => state.user,
    (user) => user
  );

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');

    let clickedInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickedInsideButton = true;
      }
    });

    if (modalContainer && !clickedInsideButton && this.isNavbarContentOpen) {
      console.log(
        'container ---------------------- ',
        this.isNavbarContentOpen
      );
      this.closeNavbarContent();
    }
  }

  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }

  ngOnInit(): void {
    if (localStorage.getItem('jwt')) this.userService.getUserProfile();

    this.store
      .pipe(select((store: AppState) => store.user))
      .subscribe((user) => {
        this.userProfile = user.userProfile;
        if (user.userProfile) {
          this.dialog.closeAll();
        }
      });
  }
  navigateToCart = () => {
    this.router.navigate(['cart']);
  };

  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  openLoginModal(): void {
    this.dialog.open(AuthComponent, {
      // width: '400px',
      disableClose: false,
    });
  }

  handleLogout = () => {
    console.log('logout success');
    this.userService.logout();
  };

  isNavbarContentOpen = false;
  currentSection!: string;
  openNavbarContent(section: string) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
    console.log('currentSection section ', this.currentSection);
  }
}
