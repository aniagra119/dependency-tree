import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { SearchByTableColumnComponent } from './search-by-table-column/search-by-table-column.component';
import { SearchByDirectoryComponent } from './search-by-directory/search-by-directory.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'tbl-col', component: SearchByTableColumnComponent },
  { path: 'dir', component: SearchByDirectoryComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
