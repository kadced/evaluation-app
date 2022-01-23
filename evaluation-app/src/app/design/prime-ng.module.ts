// ===========================================================================
// File: APP.MODULE-PRIMENG.ts
import { SharedModule, Header, Footer } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Dialog, DialogModule } from 'primeng/dialog';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FocusTrapModule } from 'primeng/focustrap';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeTableModule } from 'primeng/treetable';
import {RatingModule} from 'primeng/rating';
import { TreeModule } from 'primeng/tree';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {PasswordModule} from 'primeng/password';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SplitButtonModule} from 'primeng/splitbutton';
import {PickListModule} from 'primeng/picklist';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ToolbarModule} from 'primeng/toolbar';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import {DragDropModule} from 'primeng/dragdrop';
import {AvatarModule} from 'primeng/avatar';
import {BadgeModule} from 'primeng/badge';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SkeletonModule} from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';

//
export const APP_PRIMENG_MODULE = [
  DragDropModule,
  ProgressBarModule,
  ProgressSpinnerModule,
  BadgeModule,
  TagModule,
  SkeletonModule,
  AvatarModule,
  PasswordModule,
  ToastModule,
  StepsModule,
  BreadcrumbModule,
  FileUploadModule,
  HttpClientModule,
  TooltipModule,
  SidebarModule,
  DynamicDialogModule,
  DividerModule,
  OverlayPanelModule,
  ToolbarModule,
  ScrollPanelModule,
  CardModule,
  PickListModule,
  VirtualScrollerModule,
  SplitButtonModule,
  MultiSelectModule,
  SelectButtonModule,
  AutoCompleteModule,
  InputSwitchModule,
  InputMaskModule,
	SharedModule,
  InputTextModule,
	TableModule,
	DialogModule,
	ConfirmDialogModule,
	DropdownModule,
	MenubarModule,
	ButtonModule,
  RatingModule,
	ListboxModule,
	RadioButtonModule,
	PanelModule,
	AccordionModule,
	CalendarModule,
	TabViewModule,
	FocusTrapModule,
	CheckboxModule,
	TreeTableModule,
	TreeModule
];
//
export const APP_PRIMENG_COMPONENTS = [
	Dialog,
	ConfirmDialog,
	Header,
	Footer
];
//
import { ConfirmationService } from 'primeng/api';
//
export const APP_PRIMENG_PROVIDERS = [
	ConfirmationService
];
// ===========================================================================
