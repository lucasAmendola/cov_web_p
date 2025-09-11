import { Routes } from '@angular/router';
import { Home } from './secciones/home/home';
import { FamiliasSection } from './secciones/familias/familias-section';
import { VeterinariosSection } from './secciones/veterinarios/veterinarios-section';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
        {
        path: 'familias',
        component: FamiliasSection
    },
    {
        path: 'veterinarios',
        component: VeterinariosSection
    },
];