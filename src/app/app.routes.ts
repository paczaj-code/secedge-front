import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { ShiftReport } from './views/user/shift-report/shift-report';
import { Login } from './views/login/login';
import { Dashboard } from './views/dashboard/dashboard';
import { NotFound } from './views/error/not-found/not-found';
import { Users } from './views/user/users/users';
import { Users as AdminUsers } from './views/admin/users/users';
// import { isAuthenticatedUserGuard } from './guards/isAuthenticatedUser.guard';
import { Site } from './views/admin/site/site';
import { KeySurvey } from './views/user/surveys/key-survey/key-survey';
import { CameraSurvey } from './views/user/surveys/camera-survey/camera-survey';
import { TicketSurvey } from './views/user/surveys/ticket-survey/ticket-survey';
import { BadgeSurvey } from './views/user/surveys/badge-survey/badge-survey';
import { ShiftActivity } from './views/admin/shift-activity/shift-activity';
// import { tablerTransform } from '@ng-icons/tabler-icons';
// import { isTeamLeaderGuard } from './guards/isTeamLeader.guard';
import { NoAccess } from './views/error/no-access/no-access';

export interface MenuItem {
  title: string;
  icon: string;
  link: string;
  initQueryParams?: object;
  directive?: string;
  submenu?: { items: MenuItem[]; initialOpen?: boolean };
}

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: Login,
  },
  {
    path: ':site',
    component: Home,
    // canActivate: [isAuthenticatedUserGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'shift-report', component: ShiftReport },
      { path: 'key-survey', component: KeySurvey },
      { path: 'camera-survey', component: CameraSurvey },
      { path: 'ticket-master', component: TicketSurvey },
      { path: 'badge-survey', component: BadgeSurvey },

      {
        path: 'admin',

        // canActivate: [isTeamLeaderGuard],
        children: [
          { path: 'admin-users', component: AdminUsers },
          { path: 'sites', component: Site },
          { path: 'shift-activities', component: ShiftActivity },
        ],
      },
      { path: 'users', component: Users },
      { path: 'no-access', component: NoAccess },
      { path: '**', component: NotFound },
    ],
  },

  { path: '**', component: NotFound },
];

export const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'tablerLayoutDashboardFill',
    link: 'dashboard',
  },
  {
    title: 'Shift reports',
    icon: 'tablerReport',
    link: 'shift-report',
  },
  {
    title: 'Surveys',
    icon: 'tablerCalendarMonth',
    link: '#',
    submenu: {
      initialOpen: true,
      items: [
        { title: 'Key survey', icon: 'tablerKey', link: 'key-survey' },
        {
          title: 'Camera audits',
          icon: 'tablerDeviceCctv',
          link: 'camera-survey',
        },
        {
          title: 'Ticket Master',
          icon: 'tablerTicket',
          link: 'ticket-master',
        },
        {
          title: 'Badge audits',
          icon: 'tablerIdBadge2',
          link: 'badge-survey',
        },
      ],
    },
  },
  {
    title: 'Team',
    icon: 'tablerUsersGroup',
    link: 'users',
    initQueryParams: {
      page: 1,
      perPage: 10,
      orderBy: 'id',
    },
  },
];

export const adminMenuItems: MenuItem[] = [
  {
    title: 'Admin',
    icon: 'tablerTools',
    link: 'admin',
    directive: 'appAdminMenu',
    submenu: {
      initialOpen: false,
      items: [
        { title: 'Users', icon: 'tablerUsersGroup', link: 'admin/admin-users' },
        {
          title: 'Sites',
          icon: 'tablerHomeStar',
          link: 'admin/sites',
          initQueryParams: {
            chosenSiteUUID: '',
          },
        },
        {
          title: 'Shift activities',
          icon: 'tablerTransform',
          link: 'admin/shift-activities',
          initQueryParams: {
            panel: 'activities',
          },
        },
      ],
    },
  },
];
