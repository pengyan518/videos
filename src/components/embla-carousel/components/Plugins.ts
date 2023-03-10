import { CreateOptionsType, LooseOptionsType } from './Options'
import { EmblaCarouselType } from './'

export type LoosePluginType = {
  [key: string]: unknown
}

export type CreatePluginType<
  TypeA extends LoosePluginType,
  TypeB extends LooseOptionsType,
> = TypeA & {
  name: string
  options: CreateOptionsType<TypeB>
  init: (embla: EmblaCarouselType) => void
  destroy: () => void
}

export interface EmblaPluginsType {
  [key: string]: CreatePluginType<LoosePluginType, {}>
}

export type EmblaPluginType = EmblaPluginsType[keyof EmblaPluginsType]
