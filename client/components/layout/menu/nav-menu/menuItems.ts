export type MenuItemProps = {
   path: string;
   label: string;
};

export const menuItems: MenuItemProps[] = [
   {
      path: '/',
      label: 'Books',
   },
   {
      path: '/trades',
      label: 'Trades',
   },
   {
      path: '/community',
      label: 'Community',
   },
];
