import { store } from '../../../../store'
import { CompendiumItem, SkillFamily, ItemType } from '../../../../class'
import { ICompendiumItemData } from '../../../../interface'

interface ISkillData extends ICompendiumItemData {
  detail: string
  family: string
}

class Skill extends CompendiumItem {
  public readonly Detail: string
  public readonly Family: SkillFamily

  public constructor(data: ISkillData) {
    super(data)
    this.Detail = data.detail
    this.Family = SkillFamily[data.family] as SkillFamily
    this.ItemType = ItemType.Skill
    this.addSearchable(this.Detail)
  }

  public get Trigger(): string {
    return this._name
  }

  public static Deserialize(id: string): Skill {
    return store.getters.referenceByID('Skills', id)
  }
}

export { Skill, ISkillData }
