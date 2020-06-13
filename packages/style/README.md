# @morenobr/guideline-style

- CSS Button component based on Material Design: https://material.io/develop/web/components/buttons/
- CSS Floating Action Button component based on Material Design: https://material.io/develop/web/components/buttons/floating-action-buttons/
- CSS Icon Button component based on Material Design: https://material.io/develop/web/components/buttons/icon-buttons/
- CSS Icon Button Toogle component based on Material Design: https://material.io/develop/web/components/buttons/icon-buttons/
- CSS List Components (and derived of it) based on Material Design: https://material.io/develop/web/components/lists/
- CSS Top App Bar component based on Material Design: https://material.io/develop/web/components/top-app-bar/
- CSS Drawer component based on Material Design: https://material.io/develop/web/components/drawers/

## TODO CSS components based on Material Design

- Tab bar: https://material.io/develop/web/components/tabs/tab-bar/
- Checkboxes: https://material.io/develop/web/components/input-controls/checkboxes/
- Radio buttons: https://material.io/develop/web/components/input-controls/radio-buttons/
- Switches: https://material.io/develop/web/components/input-controls/switches/
- Linear progress: https://material.io/develop/web/components/linear-progress/
- Circular progress: https://material.io/develop/web/components/circular-progress/
- Menus: https://material.io/develop/web/components/menus/
         https://material.io/develop/web/components/menu-surface/
- Dialog: https://material.io/develop/web/components/dialogs/
- Data Tables: https://material.io/develop/web/components/data-tables/
- Chip: https://material.io/develop/web/components/chips/
- Card: https://material.io/develop/web/components/cards/
- Bottom Navigation: https://material.io/components/bottom-navigation
- Slider: https://material.io/develop/web/components/input-controls/sliders/
- Dividers: https://material.io/components/dividers
- Date Pickers: https://material.io/components/pickers
- Sheet side: https://material.io/components/sheets-side

## Changes after use CSS of Material Design

Basic changes are to not use name of root component in class name of children and variants. Just changed to use the context parent, and context of same element.

Example, in Icon Button Toogle, is just used 'on' class name with the class name original 'mg-icon-button-toogle', then the element has the class property as 'mg-icon-button-toogle on', instead of something as 'mg-icon-button-toogle mg-icon-button-toogle--on'.

## License Info

The root license of project is just MIT, but CSS components have their own license because third party libraries based as the Material Design CSS.