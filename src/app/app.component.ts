import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from './Models/AppState';
import { UserService } from './state/User/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from './module/auth/auth.component';
import { ProductService } from './state/Product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Uday-ecommerce';

  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private productService: ProductService,
  ) {}

  userProfile: any;
  categories: any;

  ngOnInit() {
    this.userService.getUserProfile();

    this.store.pipe(select((store) => store.auth)).subscribe((user) => {
      this.userService.getUserProfile();
    });

    const currentPath = this.activatedRoute.snapshot.routeConfig;
    console.log('Current path:', currentPath);

    console.log(
      this.activatedRoute.toString(),
      'router ----- ',
      this.router.routerState.snapshot
    );
    

    if (localStorage.getItem('jwt')) this.userService.getUserProfile();

    this.categories = this.productService
      .getAllCategoriesBy()
      .subscribe((categories) => {
        this.categories = categories;
        console.log('nav categories', this.categories.data);
      });

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
}
