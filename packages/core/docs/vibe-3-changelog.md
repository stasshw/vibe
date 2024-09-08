# Vibe 3 Changelog

## General

- Package rename - `monday-ui-react-core` renamed to `@vibe/core`: [codemod ✅]
  - `/tokens` -> `@vibe/core/tokens` [codemod ✅]
  - `/interactionsTests` -> `@vibe/core/interactionsTests` [codemod ✅]
  - `/testIds` -> `@vibe/core/testIds` [codemod ✅]
  - `/mockedClassNames` -> `@vibe/core/mockedClassNames`
- Removed entry pointes:
  - `/next` removed, migrate components to `@vibe/core`
  - `/types` remove, import from `@vibe/core` instead [codemod ✅]
- Entry points moved to a new library:
  - `/icons` -> `@vibe/icons` [codemod ✅]
  - `/storybookComponents` removed, use the `vibe-storybook-components` package instead
- `monday-ui-react-core/dist/main.css` removed, use `@vibe/core/tokens` instead
- CommonJS support removed
- All components' props interfaces are exported

## Colors

- Removed `--shareable-color` and `--private-color` for all themes

## Typography

- `Text` and `Heading` component API and style changed - use the [typography migration guide](https://style.monday.com/?path=/docs/typography-migration-guide--docs) to migrate.

## Components

### AttentionBox

codemod: `attention-box-component-migration`

- `componentClassName` -> `className` [codemod ✅]

### Avatar

codemod: `avatar-component-migration`

- `isSquare` -> `square` [codemod ✅]
- `isDisabled` -> `disabled` [codemod ✅]

### AvatarGroup

codemod: `avatar-group-component-migration`

- `removePadding` is removed as it's the default, component no longer gets a default padding bottom [codemod ✅]

### Box

codemod: `box-component-migration`

- `border` change from string to boolean [codemod ✅]
- Remove static prop Box.Borders

### BreadcrumbItem

codemod: `breadcrumb-item-component-migration`

- `isDisabled` -> `disabled` [codemod ✅]

### Button

codemod: `button-component-migration`

- `dataTestId` -> `data-testid` [codemod ✅]
- `children` prop is now mandatory
- `size` prop - removed `sm`, `md`, `lg` sizes, use `small`, `medium`, `large` accordingly

### ButtonGroup

codemod: `button-group-component-migration`

- `componentClassName` -> `className` [codemod ✅]]

### Checkbox

codemod: `checkbox-component-migration`

- `componentClassName` -> `className` [codemod ✅]

### Chips

codemod: `chips-component-migration`

- `dataTestId` -> `data-testid` [codemod ✅]
- `clickable`, `isClickable` removed, use `onClick` instead to get clickable behavior and style. Pay attention that this codemod removes `clickable` and `isClickable` only if `onClick` is present [codemod ✅]
- `color` - remove dark_indigo and blackish colors

### Clickable

codemod: `clickable-component-migration`

- `dataTestId` -> `data-testid` [codemod ✅]]

### Counter

codemod: `chips-component-migration`

- `wrapperClassName` -> `className` [codemod ✅]
  - Removed `sm`, `md`, `lg` sizes, use `small`, `medium`, `large` respectively

### Dialog

codemod: `dialog-component-migration`

- `shoudlCallbackOnMount` -> `shouldCallbackOnMount` [codemod✅]

### DialogContentContainer 🚩

codemod: `dialog-content-container-component-migration`

- Fixed "medium" size spacings
- Changed default size to "small" instead of "medium" [codemod - change usages of size medium to small, keep other usages the same ✅]]

### Divider

codemod: `divider-component-migration`

- `classname` -> `className` [codemod ✅]

### Flex

- Removed `Flex.gaps.NONE`

### Dropdown 🚩

codemod: `dropdown-component-migration`

- Removed `Dropdown.size` property, use `Dropdown.sizes` instead [codemod ✅]
- Remove size 'xxs' and 'xs'
- Remove `withReadOnlyStyle` prop, new read only style will apply when using `readOnly` prop [codemod - remove withReadOnlyStyle ✅]

### EditableInput

- `EditableInput` removed, use [`EditableText`](https://style.monday.com/?path=/docs/inputs-editabletext--docs) instead

### Heading

- `Heading` component API and style changed - use the [typography migration guide](https://style.monday.com/?path=/docs/typography-migration-guide--docs) to migrate.

### Icon

codemod: `icon-component-migration`

- `clickable`, `onClick` removed, use `<IconButton>` in case of a clickable icon
- Remove `clickable` if it is false [codemod ✅]

### IconButton

codemod: `icon-button-component-migration`

- `dataTestId` -> `data-testid` [codemod ✅]

## Input

codemod: `input-field-component-migration`

- `Input` component removed - use [`TextField`](https://style.monday.com/?path=/docs/inputs-textfield--docs). [codemod ✅]

### Label

codemod: `label-component-migration`

- `wrapperClassName` -> `className` [codemod ✅]
- Spin in animation removed due to UX decision
  - Removed `isAnimationDisabled` prop which is not needed anymore [codemod ✅]

### EditableHeading

- Complete API Change (TBD)

### Link 🚩

codemod: `link-component-migration`

- `componentClassName` -> `className` [codemod ✅]
- `Link.target` removed, use `Link.targets` instead [codemod ✅]

### Loader

codemod: `loader-component-migration`

- `svgClassName` -> `className` [codemod ✅]

### Menu

codemod: `menu-component-migration`

- `classname` -> `className` [codemod ✅]

### MenuDivider

codemod: `menu-divider-component-migration`

- `classname` -> `className` [codemod ✅]

### MenuItem

codemod: `menu-item-component-migration`

- `classname` -> `className` [codemod ✅]
- Tooltip now wraps the entire element so non-block layout given to the `title` prop may break

### MenuItemButton

codemod: `menu-item-button-component-migration`

- `classname` -> `className` [codemod ✅]

### MenuTitle

codemod: `menu-title-component-migration`

- `classname` -> `className` [codemod ✅]

### MenuButton

codemod: `menu-button-component-migration`

- `componentClassName` -> `className` [codemod ✅]
- `closeDialogOnContentClick` -> `closeMenuOnItemClick` [codemod ✅]
- Removed `disabledReason`, use `tooltipContent` instead [codemod ✅]

### Modal

codemod: `modal-component-migration`

- Modal no longer have the ability to remove the close button due to UX decision
  - Removed `hideCloseButton` prop which is not needed anymore [codemod ✅]
- The `unmountOnClose` prop default value changes to "true", meaning the Modal will not render if `show` is "false". To disable this behavior set `unmountOnClose` to "false".

### ModalHeader

codemod: `modal-header-component-migration`

- Modal no longer have the ability to remove the close button due to UX decision
  - Removed `hideCloseButton` prop which is not needed anymore [codemod ✅]

### RadioButton

codemod: `radio-button-component-migration`

- `componentClassName` -> `className` [codemod ✅]

## Search

- `Search` has changed - follow the [`Search` docs](https://style.monday.com/?path=/docs/inputs-search--docs) for the new API.

- ## SearchComponent

codemod: `search-component-import-migration`

- `SearchComponent` component removed - use [`Search`](https://style.monday.com/?path=/docs/inputs-search--docs). [codemod ✅]

## SplitButton

- Remove `data-testId` prop from nested elements (data-testId used to be applied also to each of the internal elements)

### Steps 🚩

codemod: `steps-component-import-migration`

- `isOnPrimary` removed add `color={Steps.colors.PRIMARY}` instead [codemod ✅]

### Tabs

- Reset spacings (removed default browser's margin/padding for ul,li elements)

### TabList

codemod: `tab-list-import-migration`

- `noPadding` is removed as it's the default, component no longer gets a default padding bottom [codemod ✅]

### TabPanels

codemod: `tab-panels-import-migration`

- Fix: TabPanels will render only the active tab
- `renderOnlyActiveTab` - removed as it's now the default behavior [codemod ✅]

### TextField

- `dataTestId` -> `data-testid` [codemod ✅]
- `iconsNames` prop removed `layout`
- Behavior of asterisk is now controlled by `required` prop, which means a field with asterisk will have to be required.
  - Removed `requiredAsterisk` [codemod ✅]
- Remove `withReadOnlyStyle` prop, new read only style will apply when using `readOnly` prop [codemod ✅]
- Removed `sm`, `md`, `lg` sizes, use `small`, `medium`, `large` respectively

### ThemeProvider

codemod: `theme-provider-import-migration`

- `theme` -> `themeConfig` [codemod ✅]
- Should it be out of beta ?

### Tipseen

codemod: `tipseen-import-migration`

- Default `color` changed from 'primary' to 'inverted'
- `isCloseButtonHidden` -> `hideCloseButton` [codemod ✅]
- `showDelay` changed default to 100
- `justify` removed
  - `Tipseen.justifyTypes` removed
- `submitButtonProps`, `dismissButtonProps` props removed, use separate props to customize the button
- `content` prop is now mandatory

### TipseenContent

codemod: `tipseen-content-import-migration`

- `isDismissHidden` -> `hideDismiss` [codemod ✅]
- `isSubmitHidden` -> `hideSubmit` [codemod ✅]

### Toggle

codemod: `toggle-import-migration`

- `componentClassName` -> `className` [codemod ✅]
- `isDisabled` -> `disabled` [codemod ✅]

### Tooltip

codemod: `tooltip-import-migration`

- `paddingSize` removed
- `themes` - remove all themes besides for "dark" & "primary"
- `showOnDialogEnter` changed default to be true (should we remove this prop?)
- `hideDelay` changed default to be 100
- `addKeyboardHideShowTriggersByDefault` default changed to true
- `position` changed to only accept "top, right, bottom, left"
- `justify` removed
  - `Tooltip.justifyTypes` removed
- `arrowPosition` removed
- - `Tooltip.arrowPositions` removed
- `withMaxWidth` prop removed, max-width is now set to 240px [codemod ✅]
- Tooltip's content is now wrapped in another div, non-block layouts inside the tooltip may break

### ColorPicker

codemod: `color-picker-import-migration`

- `ColorPicker.COLOR_STYLES` -> ColorPicker.colorStyles [codemod ✅]

### ColorPickerContent

codemod: `color-picker-content-import-migration`

- `ColorPickerContent.COLOR_STYLES` -> ColorPicker.colorStyles [codemod ✅]

### ResponsiveList

- Remove entire component

## Icons

- Removed Upgrade icon
- Featured icon renamed to Upgrade

## Hooks

### useClickableProps

- `dataTestId` -> `data-testid` [codemod ✅]

## monday-ui-style

- Remove `color-warning`, `color-warning-hover`, `color-warning-select`, `color-warning-select-hover` from colors.json, use `warning-color-*` instead