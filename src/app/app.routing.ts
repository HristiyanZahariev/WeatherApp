import {ModuleWithProviders} from '@angular/core'; 
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home.component';
import {AboutComponent} from './components/about.component';

export const AppRoutes:Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);