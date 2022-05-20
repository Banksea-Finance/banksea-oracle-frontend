import { ComponentStylesOverride, OverridablePropertiesByComponent } from '../types'
import { CSSProperties } from 'styled-components'

type OverridableComponentNames = keyof ComponentStylesOverride

type GetPropertiesByComponentName<ComponentName extends OverridableComponentNames> =
  keyof Required<ComponentStylesOverride>[ComponentName]

type ReturnType<ComponentName extends OverridableComponentNames, Property extends GetPropertiesByComponentName<ComponentName>> = Property extends keyof CSSProperties ? CSSProperties[Property] : string

type GetPropsByComponentName<ComponentName extends OverridableComponentNames> =
  OverridablePropertiesByComponent[ComponentName]['props']

export function getOverridableStyle<
  ComponentName extends OverridableComponentNames,
  Property extends GetPropertiesByComponentName<ComponentName>
>(
  componentName: ComponentName,
  property: Property,
  fallback: (props: GetPropsByComponentName<ComponentName>) => ReturnType<ComponentName, Property>
): (props: OverridablePropertiesByComponent[ComponentName]['props']) => ReturnType<ComponentName, Property> {
  // @ts-ignore
  return props => {
    if (props?.theme?.componentStylesOverride && componentName in props.theme.componentStylesOverride) {
      // @ts-ignore
      const override = props.theme.componentStylesOverride[componentName]?.[property]

      if (override) {
        if (typeof override === 'function') return override(props)

        return override
      }
    }

    return fallback(props)
  }
}
